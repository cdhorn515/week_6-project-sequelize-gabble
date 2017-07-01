const models = require('../models');
// console.log('here ', models);
// console.log(models);
      // User = require('')
  // session = require('express-session');

module.exports = {
  index: function(req, res) {
    var context = {};
    res.render('signup', context);
  },
  landing: function(req, res) {
    res.render('signup');
  },
  createUser: function(req, res) {
    req.getValidationResult().then(function(result) {
      if (result.isEmpty()) {
         models.user.create({
          username: req.body.username,
          password: req.body.password
        }).then(function(newUser) {
          console.log('signed up');
          req.session.userId = newUser.id;
          res.redirect('/gabble');
        });
      }
    });
  },
  loginLanding: function(req, res) {
    var context = {};
    res.render('login', context);
  },
  login: function(req, res) {
    var context = {};
    //pull data from page entry
    var username = req.body.username;
    var password = req.body.password;
    //findOne in database that matches username
    models.user.findOne({
      where: {
        username: username
      }
    }).then(function(user) {
      //if match then pull database info and store in session
      if (password === user.password) {
        req.session.user = user;
        req.session.username = user.username;
        req.session.userId = user.id;
        console.log('login successful');
        res.redirect('/gabble');
      } else {
        res.redirect('/login');
      }
    });
  }
};
