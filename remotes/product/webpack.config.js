// remotes/product/webpack.config.js
const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  mode: 'development',
  entry: './src/ProductApp.js',
  output: {
    // 빌드된 파일이 들어갈 디렉토리
    path: path.resolve(__dirname, 'dist'),
    // 번들 JS 파일 이름
    filename: '[name].js',
    // dev server에서 serve할 때 public URL
    publicPath: 'http://localhost:8081/',
    clean: true,
  },
  devServer: {
    port: 8081,
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'product',
      // 이 이름(remoteEntry.js)이 host에서 호출하는 파일 이름
      filename: 'remoteEntry.js',
      exposes: {
        // host가 import할 때 쓰는 경로
        './ProductApp': './src/ProductApp',
      },
      shared: {
        react: { singleton: true, eager: true },
        'react-dom': { singleton: true, eager: true },
      },
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
