import { MockMethod } from "vite-plugin-mock"
import { dataFactory } from "../common"
/**
 * 密码登录mock
 */
const LoginByPwd: MockMethod = {
  url: "/mock/login/pwd", // 注意，这里只能是string格式
  method: "post",
  response: res =>
    dataFactory(
      200,
      {
        userInfo: {
          nickName: "赵乾程",
          email: "1103661612@qq.com",
          roles: ["user"]
        },
        token: "dasdawefwfrreeeeeeeeeeeeeeefcadew"
      },
      "登录成功"
    )
}

export default [LoginByPwd]
