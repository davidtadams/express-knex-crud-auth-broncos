var express = require('express');
var router = express.Router();


router.get('/login', function(req, res, next) {
  res.render('login');
});

router.post('/login', function(req, res, next) {

});

router.get('/signup', function(req, res, next) {
  res.render('signup');
});

router.post('/signup', function(req, res, next) {

});

module.exports = router;
