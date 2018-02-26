var express = require('express');
var router = express.Router();
var edmond = 'Edmond'

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/cool', function(req, res, next){
	res.render('index', {title: `You\'re so cool ${edmond}!`});
});

module.exports = router;
