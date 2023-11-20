module.exports = {
    modifyPaths({
        webpackObject, // the imported webpack node module
        options: {
          pluginOptions, // the options passed to the plugin ({ name:'pluginname', options: { key: 'value'}})
          razzleOptions, // the modified options passed to Razzle in the `options` key in `razzle.config.js` (options: { key: 'value'})
        },
        paths, // the default paths that will be used by Razzle.
      }) {
        // Do some stuff...
        return paths;
      },
}