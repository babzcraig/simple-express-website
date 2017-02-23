var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Bab\'s sample Express Web App', activeClass: 'Home' });
});

module.exports = router;
