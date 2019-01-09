var Encore = require('@symfony/webpack-encore');

Encore
    .enableSingleRuntimeChunk()
    .enableBuildNotifications()

// the project directory where all compiled assets will be stored
    .setOutputPath('public/build/')
    // the public path used by the web server to access the previous directory
    .setPublicPath('/build')
    .cleanupOutputBeforeBuild()

    .enableSourceMaps(!Encore.isProduction())
    .enableReactPreset()

    .addEntry('app', './assets/js/app.js')
    .addEntry('js/index', './assets/js/index.js')
;
// export the final configuration
module.exports = Encore.getWebpackConfig();
