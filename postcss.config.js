export default {
  plugins: {
    tailwindcss: {},
    'autoprefixer': {
      overrideBrowserslist: [
        "Android 4.1",
        "iOS 7.1",
        "Chrome > 31",
        "ff > 31",
        "ie >= 8",
        'last 10 versions', // 所有主流浏览器最近2个版本
      ],
    },
    // 'postcss-pxtorem': {
    //   rootValue: 75, // 75表示750设计稿，37.5表示375设计稿
    //   propList: ['*']//（数组）可以从 px 更改为 rem 的属性  使用通配符*启用所有属性。例子：['*']
    // }
  },
}
