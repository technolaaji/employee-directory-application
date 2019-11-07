import Joi from '@hapi/joi';

export default Joi.object({
    title: Joi.string().required()
})