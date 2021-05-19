import axios from 'axios'

export class Api {
  public static urlBase = 'http://localhost:3000/'
  public static async get<T>(url: string): Promise<T> {
    const req: T = await axios.get(`${this.urlBase}${url}`)
    return req
  }
}