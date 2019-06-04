var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.json(room);
  var fs = require('fs');
  console.log("welcome");
  console.log("read");
  res.sendFile(global.rname+'/public/welcome.html')
  //res.render('index', { title: 'Index' });
});

module.exports = router;
