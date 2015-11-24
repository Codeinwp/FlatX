jQuery(document).ready(function() {

	/* Upsells in customizer (Documentation, Reviews and Github links */
	if( !jQuery( ".flat-upsells" ).length ) {
		
		jQuery('#customize-theme-controls > ul').prepend('<li class="accordion-section flat-upsells">');
	
		jQuery('.flat-upsells').append('<a style="width: 80%; margin: 5px auto 5px auto; display: block; text-align: center;" href="http://themeisle.com/documentation-flat" class="button" target="_blank">{documentation}</a>'.replace('{documentation}', flatCustomizerObject.documentation));
		jQuery('.flat-upsells').append('<a style="width: 80%; margin: 5px auto 5px auto; display: block; text-align: center;" href="https://wordpress.org/support/view/theme-reviews/flat#postform" class="button" target="_blank">{review}</a>'.replace('{review}', flatCustomizerObject.review));
		jQuery('.flat-upsells').append('<a style="width: 80%; margin: 5px auto 5px auto; display: block; text-align: center;" href="https://github.com/Codeinwp/FlatX" class="button" target="_blank">{github}</a>'.replace('{github}', flatCustomizerObject.github));
		
		jQuery('.preview-notice').append('<a class="flat-upgrade-to-pro-button" href="http://themeisle.com/plugins/flat-plus/" class="button" target="_blank">{pro}</a>'.replace('{pro}',flatCustomizerObject.pro));

		jQuery('#customize-theme-controls > ul').prepend('</li>');
	}
	
});