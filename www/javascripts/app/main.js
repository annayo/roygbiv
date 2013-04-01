(function () {

	'use strict';

	require.config({

		// Disable timeout for scripts.
		'waitSeconds': 0,

		'baseUrl': 'javascripts',

		'paths': {

			// Core Libraries
			//http://modernizr.com/docs
			'modernizr': 'lib/modernizr-2.6.2.min',
			//http://api.jquery.com/
			'jquery': 'lib/jquery-1.9.1.min',
			
			// Application
			'app': 'app/app',

			// 3rd party
		},

		// Sets the configuration for your third party scripts that are not AMD compatible
		'shim': {
		}

	});

	// Initialize application
	require(['app'], function (app) {
		app.initialize();
	});

}());

