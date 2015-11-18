var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'OATS Home page' });
});

router.get('/assets', function(req, res, next) {
  res.render('assets', { title: 'OATS Asset page', address:'324324234' });
});


module.exports = router;
