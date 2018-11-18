var express = require('express');
var router = express.Router();

// Login Layout
router.all('/*', function (req, res, next) {
    req.app.locals.layout = 'layout'; // set your layout here
    next(); // pass control to the next handler
});

// Get Homepage
router.get('/', function(req, res){
	lastUrl = req.originalUrl;
	
	res.render('index');
});

module.exports = router;