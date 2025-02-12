module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/my-vue-app/' : '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: true,
  devServer: {
    port: 8080,
    open: true,
  },
};