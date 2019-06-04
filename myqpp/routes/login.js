var express = require('express');
var router = express.Router();
global.room={};
room.roomid=1;
room.userid=2;
/* GET home page. */

router.get('/', function(req, res, next) {
  console.log(room.toString());
  res.json(room);
  //res.json(JSON.stringify(room));
});

module.exports = router;
