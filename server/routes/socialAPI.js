var express = require('express');
var router = express.Router();

var passportGithub = require('../auth/github');


router.get('/github', passportGithub.authenticate('github', { scope: [ 'user:email' ] }), function(req, res){
  console.log('here');
});

router.get('/github/callback',
  passportGithub.authenticate('github', {
    failureRedirect: '/login',
    successRedirect: '/#'
  })
);
  // function(req, res) {
  //   // Successful authentication
  //   res.json(req.user);
  // });

module.exports = router;
