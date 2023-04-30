import axios, { AxiosInstance, AxiosRequestHeaders, AxiosError, type AxiosResponse } from 'axios'
import { IHttp } from './domain/interfaces/IHttp';

import type { Response } from './domain/interfaces';
import type { IPayload } from './domain/interfaces';
import Exception from '../shared/error/Exception';
import { ErrorType } from '../shared/error/BaseError';
import HttpStatusCode from '../shared/enums/httpStatusCode';
import ErrorCode from '../shared/error/errorCode';

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
        baseURL: payload?.baseUrl ? payload.baseUrl : import.meta.env.VITE_API_URL,
        url: payload?.url,
        params: payload?.params,
        headers: this.requestHeaders(payload?.headers ?? {}),
        data: payload?.data ?? null,
        withCredentials: payload?.auth ?? true,
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
        baseURL: payload?.baseUrl ? payload?.baseUrl : import.meta.env.VITE_API_URL,
        url: payload?.url,
        params: payload?.params,
        headers: this.requestHeaders(payload?.headers ?? {}),
        data: payload?.data ?? null,
        withCredentials: payload?.auth ?? true,
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
        baseURL: payload?.baseUrl ? payload.baseUrl : import.meta.env.VITE_API_URL,
        url: payload?.url,
        params: payload?.params,
        headers: this.requestHeaders(payload?.headers ?? {}),
        data: payload?.data ?? null,
        withCredentials: payload?.auth ?? true,
      })

      return response.data
    } catch (e) {
      if (e instanceof Error) {
        const errorType: ErrorType = {
          code: e.name,
          category: 0,
          msg: e.message,
          description: e.message,
        }
        const error = new Exception(400, [errorType], [])
        console.log(error)

        throw error
      } else {
        console.log('Unexpected error', e);
      }
    } finally {
      return {} as Response<U>
    }
  }


  /*
    *********** DELETE ***********
  */
  async delete<T, U>(url: string, payload?: IPayload<T>): Promise<Response<U>> {
    try {
      const response = await this.axios.delete(url, {
        baseURL: payload?.baseUrl ? payload.baseUrl : import.meta.env.VITE_API_URL,
        url: payload?.url,
        params: payload?.params,
        headers: this.requestHeaders(payload?.headers ?? {}),
        data: payload?.data ?? null,
        withCredentials: payload?.auth ?? true,
      })

      return response.data
    } catch (e) {
      if (e instanceof Error) {
        const errorType: ErrorType = {
          code: e.name,
          category: 0,
          msg: e.message,
          description: e.message,
        }
        const error = new Exception(400, [errorType], [])
        console.log(error)

        throw error
      } else {
        console.log('Unexpected error', e);
      }
    } finally {
      return {} as Response<U>
    }
  }


  /*
    *********** PATCH ***********
  */
  async patch<T, U>(url: string, payload?: IPayload<T>): Promise<Response<U>> {
    try {
      const response = await this.axios.patch(url, {
        baseURL: payload?.baseUrl ? payload.baseUrl : import.meta.env.VITE_API_URL,
        url: payload?.url,
        params: payload?.params,
        headers: this.requestHeaders(payload?.headers ?? {}),
        data: payload?.data ?? null,
        withCredentials: payload?.auth ?? true,
      })

      return response.data
    } catch (e) {
      if (e instanceof Error) {
        const errorType: ErrorType = {
          code: e.name,
          category: 0,
          msg: e.message,
          description: e.message,
        }
        const error = new Exception(400, [errorType], [])
        console.log(error)

        throw error
      } else {
        console.log('Unexpected error', e);
      }
    } finally {
      return {} as Response<U>
    }
  }
}