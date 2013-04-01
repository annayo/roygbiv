/**
 * @module Build
 * @submodule Build.Config
 * @class Build.Config.Compass
 * @static
 */

module.exports = function(config) {

	return {

		'prod': {},

		'watch': {
			'options': {
				'force': false
			}
		},

		'debug': {
			'options': {
				'debugInfo': true
			}
		},

		'options': {
			'sassDir': config.stylesheets + '/scss',
			'cssDir': config.stylesheets + '/generated',
			'imagesDir': config.images,
			'force': true,
			'noLineComments': true,
			'debugInfo': false,
			'outputStyle': 'expanded',
			'relativeAssets': true
		}
	};

}