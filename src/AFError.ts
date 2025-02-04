export enum AFErrorCode {
  ABRA_FLEXI_ERROR = 'ABRA_FLEXI_ERROR',
  ALREADY_IN_USE = 'ALREADY_IN_USE',
  UNKNOWN = 'UNKNOWN'
}

export class AFError extends Error {
  get code(): AFErrorCode {
    return this.name as AFErrorCode
  }

  constructor(code: AFErrorCode, msg?: string) {
    super(msg)
    this.name = code
  }
}