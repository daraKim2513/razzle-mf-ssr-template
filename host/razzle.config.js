const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  modifyWebpackConfig({ webpackConfig, env }) {
    console.log(`[Razzle] Building for target: ${env.target}`);

    webpackConfig.plugins.push(
      new ModuleFederationPlugin({
        name: 'host',
        remotes: {
          product: 'product@http://localhost:8081/remoteEntry.js',
          order: 'order@http://localhost:8082/remoteEntry.js',
          member: 'member@http://localhost:8083/remoteEntry.js',
        },
        shared: {
          react: { singleton: true, requiredVersion: false },
          'react-dom': { singleton: true, requiredVersion: false },
        },
      })
    );

    return webpackConfig;
  },
};
