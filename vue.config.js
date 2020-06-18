// vue.config.js
module.exports = {
    devServer: {
        proxy: 'http://127.0.0.1:3333'
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