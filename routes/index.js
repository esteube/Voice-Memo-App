var express = require('express');
var router = express.Router();
var db = require('monk')(process.env.MONGOLAB_URI);
var notes = db.get('notes')
var users = db.get('users');
var bcrypt = require('bcryptjs');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');



router.get('/login', function(req, res, next) {
  res.render('login');
});

router.post('/login', function(req, res, next) {
  res.cookie('user', req.body.user_name)
  res.redirect('/')
})

router.get('/logout', function(req, res, next) {
  res.clearCookie('user')
  res.redirect('/')
})






/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.get('/sendData', function(req, res, next) {

})
router.get('/register', function(req, res, next) {
  res.render('register')
})
router.get('/index', function(req,res){
          res.render('index');
 })
 router.get('/login', function(req, res, next) {
   res.render('login')
 })

router.post('/login', function(req, res, next) {
  users.findOne({email: req.body.email}, function(err, docs) {
    if (docs && bcrypt.compareSync(req.body.password, docs.password)) {
      req.session.id = docs._id;
      res.redirect('/index');
    }
    else {
      res.render('login', {loginError: 'invalid email or password.2'})
    }
  })
    res.redirect('/')
})

router.post('/register', function(req, res, next) {
  users.find({email: req.body.email}, function(err, docs) {
    if (docs.length === 0) {
      req.session.id = docs._id;
      bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(req.body.password, salt, function(err, hash) {
          req.body.password = hash;
          users.insert(req.body);
        })
      })
      res.redirect('/index')
    }
    else {
      res.render('register', {registerError: 'Username already exists in the database.'})
    }
  })
})



module.exports = router;
