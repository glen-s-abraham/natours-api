const joi=require('joi')

exports.postTourSchema = joi.object().keys({
    name:joi.string().required(),
    price:joi.number().required(),
    rating:joi.number()
})

   