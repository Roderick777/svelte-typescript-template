import type { Credentials } from "../interfaces/credentials.interface";

export class Session {
  public static credentialStorageKey = 'credentials'
  public static setToken(credentials: Credentials): void {
    localStorage.setItem(this.credentialStorageKey, JSON.stringify(credentials))
  }

  public static getCredentials(): Credentials {
    const credentials: Credentials = localStorage.getItem(this.credentialStorageKey)
    return credentials 
  }
}