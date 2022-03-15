const Joi = require('joi')

const postValidation = {
    body: Joi.object().required().keys({
        title: Joi.string().required(),
        content: Joi.string().required()
    })
}



module.exports = { postValidation}