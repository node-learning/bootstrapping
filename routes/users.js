var express = require( 'express' );
var usersStore = require( '../stores/users' );

var router = express.Router();

usersStore.set( 'a@a', {
	password: 'a',
	name: 'Jacek',
	email: 'a@a'
} );

/* GET users listing. */
router.get( '/', function ( req, res, next ) {
	res.send( 'respond with a resource' );
} );

router.post( '/', ( req, res ) => {
	usersStore.set( req.body.email, { password: req.body.password, name: req.body.name, email: req.body.email } );
	res.send( { status: -1, result: 'ok' } ); // lol
} );

router.get( '/:email', ( req, res ) => {
	var user = usersStore.get( req.params.email );

	console.log(req.body);

	if ( !user ) {
		res.status( 404 ).send( 'Sorry, we cannot find that!' );
		return;
	}

	if ( user.password !== req.query.password ) {
		res.status( 401 ).send( 'Unauthorized' );
		return;
	}

	res.send( user );
} );

module.exports = router;
