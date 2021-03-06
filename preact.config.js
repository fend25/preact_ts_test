const preactCliTypeScript = require('preact-cli-plugin-typescript');
//const {resolve} = require('path');

/**
 * Function that mutates original webpack config.
 * Supports asynchronous changes when promise is returned.
 *
 * @param {object} config original webpack config.
 * @param {object} env options passed to CLI.
 * @param {WebpackConfigHelpers} helpers object with useful helpers when working with config.
 **/
export default function (config, env, helpers) {
  preactCliTypeScript(config);

  //config.resolve.alias['preact-cli-entrypoint'] = resolve(__dirname, 'src', 'index.ts');
}
