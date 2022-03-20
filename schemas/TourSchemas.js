const joi=require('joi')

exports.postTourSchema = joi.object().keys({
    name:joi.string().alphanum().required(),
    price:joi.number().required()
})

   