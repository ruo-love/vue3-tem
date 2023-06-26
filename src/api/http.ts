import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from "axios"

import { showCodeMessage } from "@/api/code"

const BASE_PREFIX = import.meta.env.VITE_API_BASEURL as string

// 创建实例
const service: AxiosInstance = axios.create({
  // 前缀
  baseURL: BASE_PREFIX,
  // 超时
  timeout: 1000 * 60 * 30,
  // 请求头
  headers: {
    "Content-Type": "application/json"
  }
})

// 请求拦截器
service.interceptors.request.use(
  (config: any) => {
    if (config.mock) {
      config.baseURL = "/mock"
    }
    return config
  },
  (error: AxiosError) => {
    const { response } = error
    showCodeMessage(response.status)
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.data.mock) {
      console.log(`MOCK_URL: ${response.config.url}"\nMOCK_DATA:"`, response.data)
    }
    return response.data
  },
  (error: AxiosError) => {
    const { response } = error
    console.log(showCodeMessage(response.status))
    return Promise.reject(error)
  }
)

export default service
