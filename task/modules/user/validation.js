const Joi = require('joi')

const signUpSchema = {

    body: Joi.object().required().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        password: Joi.string().required()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        cPassword: Joi.ref('password'),

    })
}
const signInSchema = {

    body: Joi.object().required().keys({
        email: Joi.string().required().email(),
        password: Joi.string().required()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    })
}
const token = {

    params: Joi.object().required().keys({
        token: Joi.string().required()
    })
}

module.exports = { signUpSchema, signInSchema, token }