
const models = require('../models'),
      // Gab =
      session = require('express-session');

module.exports = {
landing: function (req, res){
    models.gab.findAll({
      include: [
        {
          model: models.user,
          as: 'user'
        }
      ]
    }).then(function(gabs){
      console.log(gabs);
      res.render('gabhome', {gabs: gabs});
    });
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
      res.render('gabhome', context);
    });
  // }

}};
