export function configureWebpack(config) {
  config.module.rules.push({
    // 处理markdown文件
    test: /\.md$/,
    use: [
      {
        loader: "vue-loader"
      },
      {
        loader: require.resolve("./utils/markdownLoader")
      }
    ],
  });
}
//   然后在vue.config.js文件中加入下面的配置
// export function chainWebpack(config) {
//   config.module
//     .rule('md')
//     .test(/\.md/)
//     .use('html-loader')
//     .loader('html-loader')
//     .end()
//     .use('markdown-loader')
//     .loader('markdown-loader')
//     .end()
// }
