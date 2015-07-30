var express = require('express');
var router = express.Router();
var db = require('monk')(process.env.MONGOLAB_URI);
var users = db.get('users');















/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
// router.post('/register', function(req, res, next) {
//   users.insert(req.body, function(err, docs){
//     res.redirect('/')
//   })
// })
//
// router.get('/register', function(req, res, next) {
//   res.render('register')
// })


//****************
// router.post('/register', function (req, res, next) {
//   var user = req.body;
//   var errors = [];
//
//   if (!user.email) {
//     errors.push('Missing Email');
//   }
//
//   if (!user.password) {
//     errors.push('Missing Password');
//   }
//
//   if (errors.length) {
//     res.render('landing', { title: 'Gif City', errors: errors, user: user });
//   } else {
//     users.find({email: user.email}, function (err, doc) {
//       if (doc) {
//         errors.push('Email is taken');
//         res.render('landing', { title: 'Gif City', errors: errors });
//       } else {
//         user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10));
//         users.insert(req.body, function (err, doc) {
//           req.session.email = doc.email;
//           res.redirect('/gifs');
//         });
//       }
//     });
//   }
// });
// //******************
//
// router.post('/login', function(req, res, next) {
//   users.insert(req.body, function(err, docs){
//     res.redirect('/')
//   })
// })
//
// router.get('/login', function(req, res, next) {
//   res.render('register')
// })
//
// //***************
//
// router.post('/login', function (req, res, next) {
//   var user = req.body;
//   users.findOne({email: user.email}, function (err, doc) {
//     if (doc) {
//       if (bcrypt.compareSync(user.password, doc.password)) {
//         req.session.email = doc.email;
//         res.redirect('/index');
//       } else {
//         res.redirect('/');
//       }
//     } else {
//       res.redirect('/')
//     }
//   });
// });
// // ---------- logout ----------
// router.get('/logout', function (req, res, next) {
//   req.session = null;
//   res.redirect('/');
// });





module.exports = router;
