/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'

const BASE_URL = 'http://localhost:4000'

type ResponseType<T> = {
  config: any
  data: T
  headers: any
  request: any
  status: number
  statusText: string
}

const fetcher = {
  async get<T>(url: string): Promise<ResponseType<T>> {
    return await axios.get(url)
  },
  async post<T>(url: string, data: any): Promise<ResponseType<T>> {
    return await axios.post(url, data)
  }
}

export { fetcher as default, BASE_URL }
