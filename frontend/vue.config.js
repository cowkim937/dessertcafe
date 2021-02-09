module.exports = {
  transpileDependencies: [
    'vuetify'
  ],

  chainWebpack: config => {
    config
        .plugin('html')
        .tap(args => {
            args[0].title = "Umjirang";
            return args;
        })
  },

  devServer: {
    proxy: { 
      '/api': { 
        target: 'http://localhost:3000/api',
        changeOrigin: true, 
        pathRewrite: { 
          '^/api': ''
        } 
      } 
    } 
  },
  outputDir: '../backend/public',
}
