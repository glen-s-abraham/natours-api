const { delTours } = require("../controllers/TourController")
const fs = require("fs");

exports.requestTimeStamp = (req,res,next)=>{
    req['timestamp'] = new Date()
    next()
}

