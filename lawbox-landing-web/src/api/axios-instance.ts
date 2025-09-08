import axios, { AxiosRequestConfig } from 'axios'
import 'dotenv/config'

// See: https://orval.dev/guides/custom-axios

export const AXIOS_INSTANCE = axios.create({
  baseURL: process.env.API_BASE_URL,
})

export const axiosInstance = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig,
): Promise<T> => {
  const source = axios.CancelToken.source()

  const promise = AXIOS_INSTANCE({
    ...config,
    ...options,
    cancelToken: source.token,
  }).then(({ data }) => data)

  // @ts-ignore
  promise.cancel = () => {
    source.cancel('Query was cancelled')
  }

  return promise
}
