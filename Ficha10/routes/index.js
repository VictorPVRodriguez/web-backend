var express = require('express');
const passport = require('passport');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

app.get('/signup', function(req,res){
  
});

app.post('/signup', passport.authentificate('local-signup',{
  successRedirect:'/profile', 
  failureRedirect:'/signup',
  failureFlash: true
}));