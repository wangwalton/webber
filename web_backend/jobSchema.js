import Joi from 'joi'

const jobSchema = Joi.object({
  _id: Joi.object(),
  userID: Joi.object(),

  request: Joi.object({
    url: Joi.string().required().uri(),
    method: Joi.string().valid('GET', 'POST'),
    headers: Joi.object(),
  }).required(),

  childRequest: Joi.object({
    urlRegex: Joi.string(),
    method: Joi.string().valid('GET', 'POST'),
    headers: Joi.object(),
  }),

  schedule: Joi.object({
    interval: Joi.number().min(300).required(),
    startAt: Joi.number(),
  }).required(),
})

export { jobSchema }

// const job = {
//   _id: {},
//   userID: {},
//   request: {
//     method: 'GET',
//     headers: {},
//   },
//   schedule: {
//   },
// }
// const validatedObj = jobSchema.validate(job, { abortEarly: false })
// console.log(validatedObj)
