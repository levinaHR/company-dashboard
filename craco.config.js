const CracoLessPlugin = require('craco-less');
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@body-background': '#F4FAF5',
              '@layout-body-background': '#F4FAF5',
              '@layout-sider-background': '#FFFFFF',
              '@primary-color': '#35763B',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
