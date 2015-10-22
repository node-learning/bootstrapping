(function ( $ ) {

	var registerForm = $( '#register' );

	registerForm.submit( function ( event ) {
		event.preventDefault();

		$.post( '/users', $( this ).serialize() )
			.then( function ( response ) {
				console.log( response );
				window.location = '/login';
			} );
	} );

	var loginForm = $( '#login' );

	loginForm.submit( function ( event ) {
		event.preventDefault();

		$.get( '/users/' + $( '#email' ).val(), {
			password: $( '#password' ).val()
		} ).then( function ( response ) {
			console.log( response );
		} );
	} )

})( jQuery );