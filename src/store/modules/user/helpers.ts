import { localStg } from "@/utils"

export interface UserInfo {
  nickName: string
  email: string
  roles: Array<"admin" | "user">
}

export const getUserInfo = () => {
  let initUserInfo: UserInfo = {
    nickName: "",
    email: "",
    roles: ["user"]
  }

  const userInfo = localStg.get("userInfo")
  return userInfo ?? initUserInfo
}
export const getToken = () => {
  return localStg.get("token") || ""
}
