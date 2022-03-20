const fs = require('fs')
const Tour = require('../models/Tour') 

exports.getAllTours = async(req,res,next)=>{
    const tours=await Tour.find()
    res.status(200).json({"data":tours})
}

exports.getSingleTour = async(req,res,next)=>{
    const tour=await Tour.findById(req.params.id)
    res.status(200).json({"data":tour})
}

exports.createTours = async(req,res,next)=>{
    const tour = await Tour.create(req.body)
    res.status(201).json({"data":tour})
}

exports.editTours = async(req,res,next)=>{
    const tour = await Tour.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(200).json({"data":tour})
}

exports.delTours = async(req,res,next)=>{
    await Tour.findByIdAndDelete(req.params.id,req.body)
    res.status(204).json({"data":null})
}


/******MIDDLEWARES*******/
// exports.checkID=(req,res,next,val)=>{
//     if(req.params.id*1>tours.length){
//         return res.json(400).json({"fail":"Bad request"})
//     }
//     next()
// }