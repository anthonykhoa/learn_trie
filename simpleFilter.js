// const fs = require('fs')
const searchTerm = require('./searchTerm')
const txtArr = require('./makeArray')

const start = Date.now()

const res = txtArr.some((word) => {
  if (word.includes(searchTerm)) return true
  return false
})
// txtArr.forEach((word) => word.includes(searchTerm) && res.push(word))
console.log(res)
const end = Date.now()

console.log('Total time of search: ', end - start, ' milliseconds')
