import Joi from '@hapi/joi';

export default Joi.object({
    name: Joi.string().required(),
    location: Joi.string().required(),
    country: Joi.string().required(),
    phone: Joi.number().required(),
    expertise: Joi.array().items(Joi.string()).required()
})

// the main reason why expertise is an array is because a company can be experienced in multiple
// fields hence it is an array