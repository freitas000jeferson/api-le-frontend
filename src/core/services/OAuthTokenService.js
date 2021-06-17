const _refresh_token = "refresh_token"
const _access_token = "access_token"

export default class OAuthTokenService {

  constructor(fields) {
    this.accessToken = fields.accessToken
    this.expiresIn = fields.expiresIn
    this.refreshToken = fields.refreshToken
  }
    
  get accessToken() {
      return localStorage.getItem(_access_token)
  }

  set accessToken(v) {
      if (v == null) {
          localStorage.removeItem(_access_token)
      } else localStorage.setItem(_access_token, v)
  }

  get refreshToken() {
      return localStorage.getItem(_refresh_token)
  }
}