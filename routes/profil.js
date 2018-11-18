var express = require('express');
var router = express.Router();

// Login Layout
router.all('/*', function (req, res, next) {
    req.app.locals.layout = 'layout'; // set your layout here
    next(); // pass control to the next handler
});

// Get Sayembara Page
router.get('/', ensureAuthenticated, function(req, res){
	lastUrl = req.originalUrl;

	res.render('profil');
});

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		req.flash('error_msg', "profil");
		res.redirect('/');
	}
}

module.exports = router;