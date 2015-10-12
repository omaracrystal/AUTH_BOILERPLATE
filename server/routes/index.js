var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../client', 'index.html'));
});

module.exports = router;
