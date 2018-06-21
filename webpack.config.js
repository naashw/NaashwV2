var Encore = require('@symfony/webpack-encore');
		Encore.enableSassLoader();

Encore
		.setOutputPath('web/build/')
		.setPublicPath('/web')
		.addEntry('index', './web/assets/js/index.js')
		.addEntry('naashw-portfolio', './web/assets/css/naashw.scss')
		.addEntry('jquery', './vendor/components/jquery/jquery.min.js')
		.addEntry('typed', './web/assets/lib/typed/typed.js')
		.addEntry('bootstrap4', './vendor/twbs/bootstrap/dist/css/bootstrap.min.css')
		.addEntry('progressbar', './node_modules/progressbar.js/dist/progressbar.min.js')
		.cleanupOutputBeforeBuild()
		.enableBuildNotifications();

module.exports = Encore.getWebpackConfig();
