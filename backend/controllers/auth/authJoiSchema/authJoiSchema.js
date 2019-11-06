import Joi from '@hapi/joi';

export default Joi.object({
    email: Joi.string().email(),
    password: Joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/)
})