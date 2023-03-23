// src/api/http.ts
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from "axios"
import { ElMessage } from "element-plus"
import showCodeMessage from "@/api/code"

const BASE_PREFIX = "/api"

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
    //AxiosRequestConfig
    // TODO 在这里可以加上想要在请求发送前处理的逻辑
    // TODO 比如 loading 等
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status === 200) {
      return response.data
    }
    ElMessage.info(JSON.stringify(response.status))
    return response.data
  },
  (error: AxiosError) => {
    const { response } = error
    if (response) {
      ElMessage.error(showCodeMessage(response.status))
      return Promise.reject(response.data)
    }
    ElMessage.warning("网络连接异常,请稍后再试!")
    return Promise.reject(error)
  }
)

export default service
