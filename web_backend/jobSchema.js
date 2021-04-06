import Joi from 'joi'
import MONGODB from 'mongodb'

const { ObjectID } = MONGODB

const makeCustomValidator = (isValid, errorMessage) => {
  return (value, helpers) => {
    // Throw an error (will be replaced with 'any.custom' error)
    if (!isValid(value, helpers)) {
      throw new Error(errorMessage)
    }
  }
}

const specialID = new ObjectID('111111111111111111111111')
const userIntervalLimits = (value, helpers) => {
  const { ancestors } = helpers.state
  const { userID } = ancestors[ancestors.length - 1]

  if (userID?.equals(specialID)) {
    return true
  }

  if (value < 300) {
    return false
  }
  return true
}

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
    interval: Joi.number()
      .custom(makeCustomValidator(userIntervalLimits, 'minimum is 300'))
      .required(),
    startAt: Joi.number(),
  }).required(),
})

export { jobSchema }

// import _ from 'lodash'

//
// const job = {
//   _id: {},
//   userID: new ObjectID('111111111111111111111111'),
//   request: {
//     url: 'http://google.com',
//     method: 'GET',
//     headers: {},
//   },
//   schedule: {
//     interval: 200,
//   },
// }
// // const validatedObj = jobSchema.validate(job, { abortEarly: false })
// // console.log({ validatedObj, job })
//
// const sanitizedValues = _.pickBy(job, value => true)
// console.log({ job, sanitizedValues })
