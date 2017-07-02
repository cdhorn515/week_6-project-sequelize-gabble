
const models = require('../models'),
      // Gab =
      session = require('express-session');

module.exports = {
landing: function (req, res){
    console.log('userId, username, password ', req.session.userId, req.session.username, req.session.password);
    models.gab.findAll().then(function(gabs){
      console.log(gabs[1].text);
    });
  res.render('gabble');
},
createPost: function (req, res){
    // if(result.notEmpty()) {
      models.gab.create({
        text: req.body.gab,
        userId: req.session.userId
    }).then(function(newGab){
      console.log(newGab.text);
      var context = {
        message: "uploaded new gab"
      };
      res.render('gabble', context);
    });
  // }

}
};
