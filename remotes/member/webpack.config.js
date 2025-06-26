const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/MemberApp.js',
  mode: 'development',
  devServer: {
    port: 8083,
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    hot: true,
  },
  output: {
  // 빌드된 파일이 들어갈 디렉토리
    path: path.resolve(__dirname, 'dist'),
    // 번들 JS 파일 이름
    filename: '[name].js',
    // dev server에서 serve할 때 public URL
    publicPath: 'http://localhost:8083/',
    clean: true,
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
      name: 'member',
      filename: 'remoteEntry.js',
      exposes: {
        './MemberApp': './src/MemberApp',
      },
      shared: { react: { singleton: true }, 'react-dom': { singleton: true } },
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};