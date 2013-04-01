/**
 * @module global
 */
define(['jquery'], function($) {

	'use strict';

	var self = {
		'initialize': function () {

			// append button to avoid non-semantic dom clutter
			self.$cta = $('<span />', { 'class': 'cta', 'text': 'double your fun!', 'data-toggle-text': 'less fun' })
						.appendTo($('#main'))
						.on('click', self.toggle);
		},

		'toggle': function () {

			// store current button text 
			var currText = self.$cta.text();
			// toggle button text and button's data-toggle-text values
			self.$cta.text(self.$cta.data('toggle-text')).data('toggle-text', currText);
			
			$('.rainbow').toggleClass('reveal');
		}
	}

	return self;

});