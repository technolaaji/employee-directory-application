import Joi from '@hapi/joi';

export default Joi.object({
    country: Joi.string().required(),
    location: Joi.string().required(),
    name: Joi.string().required(),
    phone: Joi.number().required(),
});

// the main reason why expertise is an array is because a company can be experienced in multiple
// fields hence it is an array
