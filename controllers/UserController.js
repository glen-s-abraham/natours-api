exports.getAllUsers = (req,res,next)=>{
    res.status(200).json({"data":"users data"})
}

exports.getSingleUser = (req,res,next)=>{
    res.status(200).json({"data":"user data"})
}

exports.createUser = (req,res,next)=>{
    res.status(200).json({"data":"user data created"})
}

exports.editUser = (req,res,next)=>{
    res.status(200).json({"data":"user data updated"})
}

exports.delUser = (req,res,next)=>{
    res.status(200).json({"data":"user data deleted"})
}
