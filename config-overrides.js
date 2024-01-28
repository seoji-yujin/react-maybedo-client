const { overrideDevServer } = require('customize-cra');

function devServerConfig() {
  return (config) => ({
    ...config,
    devServer: {
      ...config.devServer,
      disableHostCheck: true,
    },
  });
}
module.exports = {
  devServer: overrideDevServer(devServerConfig()),
};
