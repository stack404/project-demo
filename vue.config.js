const webpack = require('webpack');
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');
const DATE_DIR = createDateDir();
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  assetsDir: `static/${DATE_DIR}`,  // 打包后静态文件所在目录
  lintOnSave: process.env.NODE_ENV === 'dev', // 是否开启将lint错误输出
  productionSourceMap: Boolean(process.env.sourceMap),

  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('./src'));

    /* if(process.env.NODE_ENV === 'dev'){
      config.plugin('wepack-bundle-analyzer').use(BundleAnalyzerPlugin);// 查看打包文件和大小
    } */

    config.module // 排除其他svg loader对src/assets/icons/svg进行操作
      .rule('svg')
      .exclude.add(resolve('src/assets/icons/svg'))
      .end();

    // 使用svg-sprite-loader对src/assets/icons/svg进行操作
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/icons/svg'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        // 定义使用规则 <svg> <use xlink:href="#icon-svg文件名"></use>  </svg>
        symbolId: 'icon-[name]'
      });
  },

  configureWebpack: {
    // Ignore all locale files of moment.js
    plugins: [new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)]
  }
};

function createDateDir() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const hour = now.getHours();
  const min = now.getMinutes();
  return `${year}${month}${day}${hour}${min}`;
}
