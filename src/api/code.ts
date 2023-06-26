// src/api/code.ts
declare interface codeMessageMapTypes {
  400: string
  401: string
  403: string
  404: string
  405: string
  500: string
  [key: string|number]: string
}

const codeMessageMap: codeMessageMapTypes = {
  400: "400: 请求出现语法错误~",
  401: "401: 用户未授权~",
  403: "403: 服务器拒绝访问~",
  404: "404: 请求的资源不存在~",
  405: "405: 请求方法未允许~",
  408: "408: 网络请求超时~",
  500: "500: 服务器内部错误~",
  501: "501: 服务器未实现请求功能~",
  502: "502: 错误网关~",
  503: "503: 服务不可用~",
  504: "504: 网关超时~",
  505: "505: http版本不支持该请求~"
}

export const showCodeMessage = (code: number | string): string => {
  return codeMessageMap[JSON.stringify(code)] || "网络连接异常,请稍后再试!"
}
