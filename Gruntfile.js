// jshint node:true

module.exports = function( grunt ) {
	'use strict';

	var loader = require( 'load-project-config' ),
		config = require( 'grunt-theme-fleet' );
	config     = config();
	config.files.js.push( '!assets/js/*.js' );
	loader( grunt, config ).init();
};
