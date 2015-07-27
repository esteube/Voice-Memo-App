var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/', function(req, res, next) {
  res.render('users/index')
});

router.get('/:username', function(req, res, next) {
  if (req.cookies.user === req.params.username) {
    res.render('users/show', {username: req.params.username})
  } else {
    res.redirect('/users')
  }
});

router.get('/:someUser/edit', function(req, res, next) {
  if (req.cookies.user === req.params.someUser) {
    res.render('users/edit', {user: req.params.someUser})
  } else {
    res.redirect('/users')
  }
});

router.get('/:user/profile', function(req, res, next) {
  res.render('users/profile', {profileUser: req.params.user})
});


module.exports = router;
