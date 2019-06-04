var express = require('express');
var router = express.Router();
var aca = require(global.rname+'/service/acService');

global.room={};
room.roomid=1;
room.userid=2;

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.json(room);
  console.log(global.rname);
  console.log(aca.aaa);
  console.log(aca.aaa.getCounter());
  console.log(aca.aaa.getCounter());
  console.log("welcome");
  res.sendFile(global.rname+'/public/welcome.html');
 // res.end();
  //res.render('index', { title: 'Index' });
});


router.get('/login', function(req, res, next) {
  var username=req.query.username;
  var password=req.query.password;
  console.log(username+" "+password);
  res.redirect("/userView/"+1);
//res.json(JSON.stringify(room));
});

router.get('/userView/:id', function(req, res, next) {
  res.sendFile(global.rname+"/public/user.html");
//res.json(JSON.stringify(room));
});

module.exports = router;
