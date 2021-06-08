import _ from 'lodash'

const a = {
  b: {
    c: 'd',
    e: {
      f: '',
    },
  },
}

function removeEmptyFields (data) {
  Object.keys(data).forEach(key => {
    const fieldValue = data[key]

    if (typeof fieldValue === 'object') {
      removeEmptyFields(fieldValue)
      console.log('what', { data, key, len: fieldValue })

      if (_.isEmpty(fieldValue)) {
        console.log('what', { data, key })
        delete data[key]
      }
    }
    if (fieldValue === '' || fieldValue == null) {
      delete data[key]
    }
  })
}

console.log(a)
removeEmptyFields(a)
console.log(a)
