import { MockMethod } from "vite-plugin-mock"

/**
 * 密码登录mock
 */
export const LoginByPwd: MockMethod = {
  url: "/api/login/pwd", // 注意，这里只能是string格式
  method: "post",
  response: res => {
    return {
      data: {
        userInfo: {
          nickName: "赵乾程",
          email: "1103661612@qq.com",
          roles: ["user"]
        },
        token: "dasdawefwfrreeeeeeeeeeeeeeefcadew"
      },
      message: "登录成功",
      code: 200
    }
  }
}
