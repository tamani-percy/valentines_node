var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Index' });
});

router.get('/yes_proposal', function(req, res, next) {
  res.render('yes_proposal', { title: 'YesProposal' });
});

module.exports = router;
