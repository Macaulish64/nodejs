var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    console.log(room.toString());
    res.send("greeting!!");
    //res.json(JSON.stringify(room));
  });
  

module.exports = router;