( function( $ ) {
	// Responsive videos
	var all_videos = $( '.entry-content' ).find( 'iframe[src*="player.vimeo.com"], iframe[src*="youtube.com"], iframe[src*="dailymotion.com"],iframe[src*="kickstarter.com"][src*="video.html"], object, embed' ),
		f_height;

	all_videos.each(function() {
		var el = $(this);
		el
			.attr( 'data-aspectRatio', el.height() / el.width() )
			.attr( 'data-oldWidth', el.attr( 'width' ) );
	} );

	$(window)
		.resize( function() {
			all_videos.each( function() {
				var el = $(this),
					newWidth = el.parents( '.entry-content' ).width(),
					oldWidth = el.attr( 'data-oldWidth' );

				if ( oldWidth > newWidth ) {
					el
						.removeAttr( 'height' )
						.removeAttr( 'width' )
					    .width( newWidth )
				    	.height( newWidth * el.attr( 'data-aspectRatio' ) );
				}
			} );

			footer_height();
		} )
		.resize()
		.load( function() {
			footer_height();
		} );

	function footer_height() {
		f_height = $( '#footer-content' ).outerHeight() + 1;
		$( '#footer' ).css( { height: f_height + 'px' } );
		$( '#page' ).css( { marginBottom: -f_height + 'px', paddingBottom: f_height + 'px' } );
	}

	// Image anchor
	$( 'a:has(img)' ).addClass('image-anchor');

	$( 'a[href="#"]' ).click( function(e) {
		e.preventDefault();
	});
} )( jQuery );