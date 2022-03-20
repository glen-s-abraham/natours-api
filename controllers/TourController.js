const fs = require('fs')
const path= `${__dirname}/../dev-data/data/tours-simple.json`
const tours = JSON.parse(fs.readFileSync(path));

exports.getAllTours = (req,res,next)=>{
    console.log(path)
    res.status(200).json({"data":tours})
}

exports.getSingleTour = (req,res,next)=>{
    res.status(200).json({"data":"tour data"})
}

exports.createTours = (req,res,next)=>{
    res.status(200).json({"data":"tours data created"})
}

exports.editTours = (req,res,next)=>{
    res.status(200).json({"data":"tour data updated"})
}

exports.delTours = (req,res,next)=>{
    res.status(200).json({"data":"tours data deleted"})
}


/******MIDDLEWARES*******/
exports.checkID=(req,res,next,val)=>{
    if(req.params.id*1>tours.length){
        return res.json(400).json({"fail":"Bad request"})
    }
    next()
}