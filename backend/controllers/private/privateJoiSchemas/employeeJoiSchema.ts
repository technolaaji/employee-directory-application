import Joi from "@hapi/joi";

export default Joi.object({
  firstName: Joi.string().required(),
  middleName: Joi.string(),
  lastName: Joi.string().required(),
  company: Joi.string().required(),
  jobTitle: Joi.string().required(),
  picture: Joi.string(),
  location: Joi.string().required(),
  email: Joi.string().email(),
  skills: Joi.array().items(Joi.string())
});

// the picture here is a string tho it should be an image on the server
// but to make it simple, an employee provides a url for his/her pic
// it is faster and efficient on the backend side

// note: this setting might be updated to feature Amazon S3 and inject the image's url to the employee's profile
