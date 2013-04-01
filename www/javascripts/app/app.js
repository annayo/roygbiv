/**
 * @module global
 */
define(['jquery'], function($) {

	'use strict';

	var self = {
		'initialize': function () {
			self.$rainbow = $('#rainbow');
			self.$cta = $('<p />', { 'class': 'cta', 'text': 'Have double fun ✖‿✖', 'data-toggle-text': 'Have less fun ✖_✖' })
						.on('click', self.toggle);
			
			// delay call until all animations are started
			setTimeout(self.appendControl, 6000);
		},

		'appendControl': function () {
			// append button to control interaction and avoid non-semantic dom clutter
			self.$cta.appendTo($('#main')).fadeIn();
		},

		'toggle': function () {
			// store current button text 
			var currText = self.$cta.text();
			
			// toggle button text and button's data-toggle-text values
			self.$cta.text(self.$cta.data('toggle-text')).data('toggle-text', currText);
			
			self.$rainbow.toggleClass('reveal');
		}
	}

	return self;

});