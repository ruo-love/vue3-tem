import { loginByPwd } from "@/api/user"
import { localStg } from "@/utils"
import { defineStore } from "pinia"

import { UserInfo, getToken, getUserInfo } from "./helpers"
import { LoginWay } from "@/enum"

interface AuthState {
  token: string
  userInfo: UserInfo
}

export const useAuthStore = defineStore("auth-store", {
  state: (): AuthState => {
    return {
      userInfo: getUserInfo(),
      token: getToken()
    }
  },

  actions: {
    async login(type: LoginWay, data) {
      try {
        switch (type) {
          case LoginWay.pwd:
            const res = await loginByPwd(data)
            this.saveUserLoginInfo(res.data)
        }
      } catch (err) {}
    },
    logout() {
      this.token = ""
      this.userInfo = {
        nickName: "",
        email: "",
        roles: ["user"]
      }
      localStg.remove("token")
      localStg.remove("userInfo")
    },
    saveUserLoginInfo({ userInfo, token }) {
      this.userInfo = userInfo
      this.token = token
      localStg.set("userInfo", userInfo)
      localStg.set("token", token)
    }
  }
})
