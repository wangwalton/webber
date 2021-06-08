import 'ag-grid-community/dist/styles/ag-grid.css'
import React from 'react'

import 'ag-grid-community/dist/styles/ag-theme-alpine.css'
import _ from 'lodash'

import {
  gql,
  useMutation
} from '@apollo/client'
import { useForm } from 'react-hook-form'

const CREATE_JOB = gql`
  mutation CreateJob($input: JobInput!) {
    createJob(job: $input) {
      _id
      errors {
        field   
        message
      }
    }
  }
`

const JobForm = ({ refetchJobs }) => {
  const [createJob] = useMutation(CREATE_JOB, {
    onCompleted: () => {
      refetchJobs()
    }
  })
  const { register, handleSubmit, setError, errors } = useForm({
    mode: 'onBlur'
  })
  console.log({ errors })
  const onSubmit = async (data) => {
    removeEmptyFields(data)
    try {
      const result = await createJob({
        variables: {
          input: data
        }
      })
      console.log({ result })
      if (result.data.createJob.errors) {
        const { errors } = result.data.createJob
        errors.forEach(error => {
          console.log('Setting', error)
          setError(error.field, { message: error.message })
          console.log(errors)
        })
      }
      console.log(result)
    } catch (e) {
      console.log(e)
    }
  }

  const validURL = (str) => {
    const pattern = new RegExp('^https?:\\/\\/' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i') // fragment locator
    return !!pattern.test(str)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="request.url" placeholder="URL" ref={register({
        required: true,
        validate: validURL
      })} />
        {errors?.request?.url && (<p style={{ color: 'red' }}>Not a valid URL</p>)}
      <select name="request.method" ref={register({ required: true })}>
        <option value="GET">GET</option>
        <option value="POST">POST</option>
      </select>
      <br></br>
      <label htmlFor="schedule.interval">Run Every X Seconds: </label>
      <input
        name="schedule.interval"
        type="number"
        placeholder={1}
        ref={register({ valueAsNumber: true, required: true, min: 10 })}
      />
        {errors?.schedule?.interval && (<p style={{ color: 'red' }}>miniumum is 300 seconds</p>)}
      <br></br>
      <label htmlFor="schedule.startAt">Start At (Unix Timestamp): </label>
      <input
        name="schedule.startAt"
        type="number"
        placeholder={1}
        ref={register({ valueAsNumber: true })}
      />
      <br></br>

      <label htmlFor="childRequest.urlRegex">Child Requests Regex: </label>
      <input
        name="childRequest.urlRegex"
        placeholder="URL regex to crawl"
        ref={register()}
      />
      <br></br>
      <input type="submit" />
    </form>
  )
}

function removeEmptyFields (data) {
  Object.keys(data).forEach(key => {
    const fieldValue = data[key]

    if (typeof fieldValue === 'object') {
      removeEmptyFields(fieldValue)

      if (_.isEmpty(fieldValue)) {
        delete data[key]
      }
    }
    if (fieldValue === '' || fieldValue == null) {
      delete data[key]
    }
  })
}
export default JobForm
