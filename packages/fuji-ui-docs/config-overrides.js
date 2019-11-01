const rewireYarnWorkspaces = require('react-app-rewire-yarn-workspaces');
const rewireReactHotLoader = require('react-app-rewire-hot-loader');
const { useBabelRc, addBabelPlugin } = require('customize-cra');

// may override webpack config in here
module.exports = function override(config, env) {
  // added hot loader
  var _config = rewireReactHotLoader(config, env);

  _config.resolve.alias = {
    ...config.resolve.alias,
    'react-dom': '@hot-loader/react-dom',
  };

  // read .babelrc in this project folder
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // _config = useBabelRc()(_config);

  // add babel plugins
  _config = addBabelPlugin('@babel/plugin-proposal-optional-chaining')(_config);

  // wiring the packages in workspace to allow babel transpilation
  // actually you can do it with customize-cra
  _config = rewireYarnWorkspaces(_config, env);

  return _config;
};
