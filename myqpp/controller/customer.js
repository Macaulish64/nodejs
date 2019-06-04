var express = require('express');
var router = express.Router();
//var acService = require(global.rname+'/service/acService');

/* GET users listing. */
router.post('/setInitTemp', function(req, res, next) {
  var roomId=req.body.roomID;
  var initTemp=req.body.initTemp;
 // return '{ "status":"'+acService.setInitTemp(roomId,initTemp)+'"}';
});

module.exports = router;
