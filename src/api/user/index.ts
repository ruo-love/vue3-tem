import http from "../http"

export function loginByPwd(data: any) {
  return http.post("/login/pwd", data)
}
