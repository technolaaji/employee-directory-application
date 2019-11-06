import Joi from '@hapi/joi'

export default Joi.object({
    firstName: Joi.string().required(),
    middleName: Joi.string(),
    lastName: Joi.string().required(),
    company: Joi.string().required(),
    jobTitle: Joi.string().required(),
    picture: Joi.string(),
    location: Joi.string().required()
})