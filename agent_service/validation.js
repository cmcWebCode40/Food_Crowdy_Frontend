const Joi = require('@hapi/joi');

const registerValidation = data => {
    const joiSchema = Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().email().required().min(6),
        password: Joi.string().required().min(6),
        phoneNumber: Joi.string().required()
    });
    return joiSchema.validate(data);
};

const loginValidation = data => {
    const joiSchema = Joi.object().keys({
        email: Joi.string().email().required().min(6),
        password: Joi.string().required().min(6)  
    });
    return joiSchema.validate(data);
};




module.exports.registerValidation = registerValidation
module.exports.loginValidation = loginValidation

