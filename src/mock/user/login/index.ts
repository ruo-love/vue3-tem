import { MockMethod } from "vite-plugin-mock"

export default [
  {
    url: "/api/login/pwd", // 注意，这里只能是string格式
    method: "post",
    response: res => {
      return {
        data: {
          userInfo: {
            nickName: "赵乾程",
            email: "1103661612@qq.com",
            roles:['user']
          },
          token: "dasdawefwfrreeeeeeeeeeeeeeefcadew"
        },
        message: "登录成功",
        code: 200
      }
    }
  }
] as MockMethod[] // 这里其实就是定义数据格式的，不了解的同学可以参考typescript的官方文档
