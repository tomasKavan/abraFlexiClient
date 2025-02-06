export enum AFErrorCode {
  MISSING_ABRA_COMPANY = 'MISSING_ABRA_COMPANY',
  ABRA_FLEXI_ERROR = 'ABRA_FLEXI_ERROR',
  ALREADY_IN_USE = 'ALREADY_IN_USE',
  QUERY_DETAIL_UNKNOWN_KEY = 'QUERY_DETAIL_UNKNOWN_KEY',
  MISSING_ID_IN_POPULATE = 'MISSING_ID_IN_POPULATE',
  UNKNOWN = 'UNKNOWN'
}

export class AFError extends Error {
  get code(): AFErrorCode {
    return this.name as AFErrorCode
  }

  constructor(code: AFErrorCode, msg?: string) {
    super(`[AFError].${code}: ${msg}`)
    this.name = code
  }
}