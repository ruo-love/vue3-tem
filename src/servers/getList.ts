import http from "@/api/http"
export const getList = data => {
  return http({
    method: "post",
    mock: false,
    url: "/login/pwd",
    data
  })
}
