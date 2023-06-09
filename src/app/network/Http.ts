import axios, { AxiosInstance, AxiosRequestHeaders, AxiosError } from 'axios'
import { IHttp } from './domain/interfaces/IHttp'

import type { Response } from './domain/interfaces'
import type { IPayload } from './domain/interfaces'
import Exception from '../shared/error/Exception'
import HttpStatusCode from '../shared/enums/httpStatusCode'
import ErrorCode from '../shared/error/errorCode'

export default class Http implements IHttp {
  private axios!: AxiosInstance

  private requestHeaders = (headers: AxiosRequestHeaders): AxiosRequestHeaders => {
    return {
      ...headers,
      'Content-Type': 'application/json',
    }
  }

  constructor() {
    this.instanceAxios()
  }

  private instanceAxios() {
    this.axios = axios.create()
  }

  /*
    *********** GET ***********
  */
  async get<T, U>(url: string, payload?: IPayload<T>): Promise<Response<U>> {
    try {
      const response = await this.axios.get(url, {
        baseURL: payload?.baseUrl ? payload.baseUrl : import.meta.env.VITE_APP_URL_API,
        url: payload?.url,
        params: payload?.params,
        headers: this.requestHeaders(payload?.headers ?? {}),
        data: payload?.data ?? null,
      })

      return response.data
    } catch (err) {
      if (err instanceof AxiosError) {
        throw new Exception(err.response?.status ?? 500, err.response?.data.error ?? [])
      }
      else {
        throw new Exception(HttpStatusCode.INTERNAL_SERVER_ERROR, [ErrorCode.ERR0000])
      }
    }
  }


  /*
    *********** POST ***********
  */
  async post<T, U>(url: string, payload?: IPayload<T>): Promise<Response<U>> {
    try {
      const response = await this.axios.post(url, payload?.data ?? null, {
        baseURL: payload?.baseUrl ? payload?.baseUrl : import.meta.env.VITE_APP_URL_API,
        url: payload?.url,
        params: payload?.params,
        headers: this.requestHeaders(payload?.headers ?? {}),
        data: payload?.data ?? null,
      })

      return response.data
    } catch (err) {
      if (err instanceof AxiosError) {
        throw new Exception(err.response?.status ?? 500, err.response?.data.error ?? [])
      }
      else {
        throw new Exception(HttpStatusCode.INTERNAL_SERVER_ERROR, [ErrorCode.ERR0000])
      }
    }
  }


  /*
    *********** PUT ***********
  */
  async put<T, U>(url: string, payload?: IPayload<T>): Promise<Response<U>> {
    try {
      const response = await this.axios.put(url, {
        baseURL: payload?.baseUrl ? payload.baseUrl : import.meta.env.VITE_APP_URL_API,
        url: payload?.url,
        params: payload?.params,
        headers: this.requestHeaders(payload?.headers ?? {}),
        data: payload?.data ?? null,
      })

      return response.data
    } catch (err) {
      if (err instanceof AxiosError) {
        throw new Exception(err.response?.status ?? 500, err.response?.data.error ?? [])
      }
      else {
        throw new Exception(HttpStatusCode.INTERNAL_SERVER_ERROR, [ErrorCode.ERR0000])
      }
    }
  }


  /*
    *********** DELETE ***********
  */
  async delete<T, U>(url: string, payload?: IPayload<T>): Promise<Response<U>> {
    try {
      const response = await this.axios.delete(url, {
        baseURL: payload?.baseUrl ? payload.baseUrl : import.meta.env.VITE_APP_URL_API,
        url: payload?.url,
        params: payload?.params,
        headers: this.requestHeaders(payload?.headers ?? {}),
        data: payload?.data ?? null,
      })

      return response.data
    } catch (err) {
      if (err instanceof AxiosError) {
        throw new Exception(err.response?.status ?? 500, err.response?.data.error ?? [])
      }
      else {
        throw new Exception(HttpStatusCode.INTERNAL_SERVER_ERROR, [ErrorCode.ERR0000])
      }
    }
  }


  /*
    *********** PATCH ***********
  */
  async patch<T, U>(url: string, payload?: IPayload<T>): Promise<Response<U>> {
    try {
      const response = await this.axios.patch(url, {
        baseURL: payload?.baseUrl ? payload.baseUrl : import.meta.env.VITE_APP_URL_API,
        url: payload?.url,
        params: payload?.params,
        headers: this.requestHeaders(payload?.headers ?? {}),
        data: payload?.data ?? null,
      })

      return response.data
    } catch (err) {
      if (err instanceof AxiosError) {
        throw new Exception(err.response?.status ?? 500, err.response?.data.error ?? [])
      }
      else {
        throw new Exception(HttpStatusCode.INTERNAL_SERVER_ERROR, [ErrorCode.ERR0000])
      }
    }
  }
}