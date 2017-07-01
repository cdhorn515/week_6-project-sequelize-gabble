
const models = require('../models'),
      // Gab =
      session = require('express-session');

module.exports = {
landing: function (req, res){
  res.render('gabble');
},
createPost: function (req, res){
  res.render('gabble');
}
};
