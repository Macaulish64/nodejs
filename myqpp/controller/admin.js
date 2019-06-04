var express = require('express');
var router = express.Router();

/* GET admin listing. */
//Power ON
router.get('/powerOn',function(req,res,next) {
    
});

//Set Params
router.post('/setParams', function(req, res, next) {
    var defaultRoomTemp=req.body.defaultRoomTemp;
    var tempHighLimit=req.body.tempHighLimit;
    var tempLowLimit=req.body.tempLowLimit;
    var defaultTargetTemp=req.body.defaultTargetTemp;
    var feeRateHigh=req.body.feeRateHigh;
    var feeRateMiddle=req.body.feeRateMiddle;
    var feeRateLow=req.body.feeRateLow;
    var defaultFunSpeed=req.body.defaultFunSpeed;

});

//Start upp
router.get('/startup',function(req,res,next){

});

//Watch roomState
router.get('/roomState/:roomid',function(req,res,next){
    var roomId=req.params.roomid;
});

module.exports = router;
