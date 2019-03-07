const CONFIG = require('config')
const webpack = require('webpack')
const chalk = require('chalk')

function setEnv () {
  console.log(chalk.black.bgGreen('*** QUE PASA MUFASA ***'))
  console.log(chalk.black.bgYellow('Ejecutando con NODE_ENV: ' + process.env.NODE_ENV))
  console.log(chalk.black.bgRed('Archivo de configuración: '))
  console.log(CONFIG)
  console.log(chalk.black.bgWhite('ahora préndete uno, se inicia el server...'))
}

setEnv()

module.exports = {
  /* pwa: {
    name: 'Stream Viewer',
    themeColor: '#00b2fe',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    // configure the workbox plugin
    workboxPluginMode: 'GenerateSW'
  }, */
  configureWebpack: config => {
    config.plugins.push(
      new webpack.DefinePlugin({
        APP_CONFIG: JSON.stringify(CONFIG),
        VERSION: JSON.stringify(process.env.npm_package_version)
      })
    )
  },
  chainWebpack: config => {
    config.module
      .rule('eslint').use('eslint-loader').options({
        fix: true
      })
    config.module
      .rule('vue').use('vue-svg-inline-loader').loader('vue-svg-inline-loader')
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "./src/styles/globals";`
      }
    }
  }
}
