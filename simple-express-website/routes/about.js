var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('about', { title: 'Bab\'s sample Express Web App', activeClass: 'About' });
});

module.exports = router;
