import Joi from '@hapi/joi';

export default Joi.object({
    liked: Joi.string().required(),
    type: Joi.string().required(),
    who: Joi.string().required(),
});
