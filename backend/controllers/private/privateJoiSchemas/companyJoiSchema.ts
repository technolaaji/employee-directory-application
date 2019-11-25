import Joi from '@hapi/joi';

export default Joi.object({
    country: Joi.string().required(),
    description: Joi.string(),
    email: Joi.string()
        .email()
        .required(),
    image: Joi.string(),
    location: Joi.string(),
    name: Joi.string().required(),
    phone: Joi.number(),
});

// the main reason why expertise is an array is because a company can be experienced in multiple
// fields hence it is an array
