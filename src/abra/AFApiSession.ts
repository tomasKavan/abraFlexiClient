import { AFApiClient } from './AFApiClient.js'
import { extractServer } from './AFApiUrlHelper.js'
import { AFError, AFErrorCode } from './AFError.js'
import { AFSessionConfig, AFCompany, AFSessionStatus, AFApiFetch } from './AFTypes.js'

const LOGIN_PATH = '/login-logout/login.json'
const KEEP_ALIVE_PATH = '/login-logout/session-keep-alive.json'
const CHECK_PATH = '/login-logout/check.json'
const LOGOUT_PATH_TPL = '/status/user/:username/logout'
const COMPANIES_PATH = '/c.json'

const KEEP_ALIVE_DEFAULT_MS = 120 * 1000

export class AFApiSession {
  private _sessionError: null | AFError = null
  private _serverUrl: string
  private _username: string

  private _password: null | string = null
  private _authSessionIdStore: null | string = null
  private _refreshToken: null | string = null
  private _csrfToken: null | string = null

  private _loginPromiseStore: Promise<void> | null = null
  private _logoutPromiseStore: Promise<void> | null = null
  private _keepAliveIntervalMs: number | null = null
  private _keepAliveHandler: any = null

  private _statusListeners: Record<string, (status: AFSessionStatus) => void> = {}

  constructor(config: AFSessionConfig) {
    this._serverUrl = extractServer(config.url)
    this._username = config.username

    if (config.password) this._password = config.password
    
    if (typeof config.keepAlive === 'undefined' || typeof config.keepAlive) this._keepAliveIntervalMs = KEEP_ALIVE_DEFAULT_MS
    if (typeof config.keepAlive === 'number') this._keepAliveIntervalMs = config.keepAlive

    if (config.authSessionId) {
      this._establish(config.authSessionId)
    } else if (typeof config.autoLogin === 'undefined' || config.autoLogin) {
      this.login()
    }
  }

  get status(): AFSessionStatus {
    if (this._loginPromise) return AFSessionStatus.LogingIn
    if (this._logoutPromise) return AFSessionStatus.LogingOut
    if (this._authSessionId) return AFSessionStatus.Online
    return AFSessionStatus.Offline
  }

  get sessionError(): null | AFError {
    return this._sessionError
  }

  get serverUrl(): string {
    return this._serverUrl
  }

  get username(): string {
    return this._username
  }

  private get _loginPromise(): Promise<void> | null {
    return this._loginPromiseStore
  }

  private set _loginPromise(p: Promise<void> | null) {
    if (this._loginPromiseStore === p) return
    this._loginPromiseStore = p
    this._notifyStatusChange()
  }

  private get _logoutPromise(): Promise<void> | null {
    return this._logoutPromiseStore
  }

  private set _logoutPromise(p: Promise<void> | null) {
    if (this._logoutPromiseStore === p) return
    this._logoutPromiseStore = p
    this._notifyStatusChange()
  }

  private get _authSessionId(): string | null {
    return this._authSessionIdStore
  }

  private set _authSessionId(p: string | null) {
    if (this._authSessionIdStore === p) return
    this._authSessionIdStore = p
    this._notifyStatusChange()
  }

  usePassword(pwd: string) {
    this._password = pwd
  }

  async login() {
    if (this.status === AFSessionStatus.LogingOut) throw new AFError(AFErrorCode.LOGOUT_UNDERWAY, `[AFApiSession] Can't login while logout attempt is underway.`)
    if (this.status === AFSessionStatus.LogingIn) return this._loginPromise
    if (this.status === AFSessionStatus.Online) return
    if (!this._password) throw new AFError(AFErrorCode.PASSWORD_EMPTY, `[AFApiSession] Can't login with empty password.`)

    this._sessionError = null
    this._loginPromise = (async () => {
      let resp: Response
      let body: any

      try {
        const url = new URL(LOGIN_PATH, this._serverUrl)
        resp = await fetch(url, { 
          headers: { 'Content-Type': 'application/json' },
          method: 'POST',
          body: JSON.stringify({ username: this.username, password: this._password }),
          redirect: 'error'
        })
        // TODO distinguish error codes 
        //      302 code - user has another session in progress
        //      XXX code - wrong username/password
        //      anything else?

        body = await resp.json()

        if (!(typeof body === 'object' 
          && body !== null 
          && typeof body.authSessionId === 'string' 
          && body.success
        )) {
           throw new AFError(AFErrorCode.LOGIN_FAILED, `[AFApiSession] Login response is not stisfactory ${body}`)
        }

        this._authSessionId = body.authSessionId
        this._refreshToken = body.refreshToken
        this._csrfToken = body.csrfToken

        this._enableKeepalive()

      } catch (e) {
        if (!(e instanceof AFError)) {
          e = new AFError(AFErrorCode.LOGIN_FAILED, (e as Error).message)
        }
        this._sessionError = e as AFError
        throw this._sessionError

      } finally {
        this._loginPromise = null
      }
    })()

    return this._loginPromise
  }

  async logout() {
    if (this.status === AFSessionStatus.LogingIn) throw new AFError(AFErrorCode.LOGIN_UNDERWAY, `[AFApiSession] Can't login while logout attempt is underway.`)
    if (this.status === AFSessionStatus.LogingOut) return this._logoutPromise
    if (this.status === AFSessionStatus.Offline) return

    this._logoutPromise = (async () => {
      let resp: Response

      try {
        const url = new URL(LOGOUT_PATH_TPL.replace(':username', this.username), this._serverUrl)
        resp = await fetch(url)

        this._authSessionId = null
        this._refreshToken = null
        this._csrfToken = null

        this._disableKeepalive()

      } catch (e) {
        if (!(e instanceof AFError)) {
          e = new AFError(AFErrorCode.LOGIN_FAILED, (e as Error).message)
        }
        this._sessionError = e as AFError
        throw this._sessionError

      } finally {
        this._logoutPromise = null
      }
    })()

    return this._logoutPromise
  }

  async getCompanies(): Promise<AFCompany[]> {
    if (this.status !== AFSessionStatus.Online) throw new AFError(AFErrorCode.SESSION_NOT_ONLINE, `Can't fetch company list while session not online.`)
    
    let resp: Response
    let body: any

    try {
      const url = new URL(COMPANIES_PATH, this._serverUrl)
      resp = await this._fetchBuilder()(url)

      body = await resp.json()

      if (!(typeof body === 'object' && body !== null 
        && typeof body.companies === 'object' && body.companies !== null
        && body.companies.company instanceof Array
      )) {
          throw new AFError(AFErrorCode.UNKNOWN, `[AFApiSession] Unknown company list reponse format ${body}`)
      }

      return body.companies.company.map((obj: any) => {
        return {
          id: parseInt(obj.id),
          nazev: obj.nazev,
          urlComponent: obj.dbNazev,
          created: new Date(obj.createDt)
        } as AFCompany
      })
    } catch (e) {
      if (!(e instanceof AFError)) {
        e = new AFError(AFErrorCode.UNKNOWN, (e as Error).message)
      }
      throw e
    }
  }

  client(company: string | AFCompany): AFApiClient {
    const companyUrlComponent = (typeof company === 'string') ? company : company.toString()
    
    return new AFApiClient({
      url: this._serverUrl,
      company: companyUrlComponent,
      fetch: this._fetchBuilder()
    })
  }

  onStatusChange(listener: (status: AFSessionStatus) => void): string {
    const key = Object.keys(this._statusListeners).length.toString()
    this._statusListeners[key] = listener
    return key
  }

  offStatusChange(listenerId: string) {
    delete this._statusListeners[listenerId]
  }

  private _fetchBuilder(): AFApiFetch {
    const sessionId = this._authSessionId
    return (input: RequestInfo | URL, init?: RequestInit): Promise<Response> => {
      let out: RequestInit = { ...init }
      
      const headers = new Headers(out.headers)
      headers.set('X-authSessionId', sessionId || '')
      out.headers = headers
      
      return fetch(input, out)
    }
  }

  private _establish(sessionId: string) {
    this._loginPromise = (async () => {
      try {
        this._keepaliveTick(true)
      } finally {
        this._loginPromise = null
      }
    })()

    return this._loginPromise
  }

  private _enableKeepalive() {
    if (!this._keepAliveIntervalMs) return
    if (this._keepAliveHandler) this._disableKeepalive()
    
    this._keepAliveHandler = setInterval(
      this._notifyStatusChange.bind(this), 
      this._keepAliveIntervalMs
    )
  }

  private _disableKeepalive() {
    clearInterval(this._keepAliveHandler)
    this._keepAliveHandler = null
  }

  private async _keepaliveTick(thr?: boolean) {
    let resp: Response
    let body: any

    try {
      const url = new URL(KEEP_ALIVE_PATH, this._serverUrl)
      resp = await fetch(url)

      body = await resp.json()

      if (!(typeof body === 'object' && body !== null && body.success)) {
          throw new AFError(AFErrorCode.LOGIN_FAILED, `[AFApiSession] Login response is not stisfactory ${body}`)
      }

    } catch (e) {
      if (!(e instanceof AFError)) {
        e = new AFError(AFErrorCode.LOGIN_FAILED, (e as Error).message)
      }
      this._sessionError = e as AFError
      
      this._authSessionId = null
      this._refreshToken = null
      this._csrfToken = null

      if (thr) {
        throw e
      }
    }
  }

  private _notifyStatusChange() {
    const status = this.status
    const keys = Object.keys(this._statusListeners)
    for (const key of keys) {
      this._statusListeners[key](status)
    }
  }
}