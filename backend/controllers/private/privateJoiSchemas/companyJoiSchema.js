import Joi from '@hapi/joi';

export default Joi.object({
    name: Joi.string().required(),
    location: Joi.string().required(),
    country: Joi.string().required(),
    phone: Joi.number().required(),
    expertise: Joi.array().items(Joi.string()).required()
})