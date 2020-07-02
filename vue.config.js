// vue.config.js
module.exports = {
    devServer: {
        proxy: process.env.VUE_APP_ROOT_URL
      },
      configureWebpack: {
        module: {
          rules: [
            {
              test: /\.(jpg|png)$/i,
              use:[
                  {
                    loader:'file-loader',
                    options:{
                        name:'[name].[ext]',
                        outputPath:'/src/assets/img/',
                        publicPath:'/src/assets/img/'
                    }
                }
              ]
            }
          ]
        }
      },
  }