const {postTourSchema}=require('../schemas/TourSchemas')

exports.postTourValidation = (req,res,next)=>{
    const {error,value}=postTourSchema.validate(req.body)
    if(error){
        return res.status(400).json({"err":error.message})
    }
    next()
}