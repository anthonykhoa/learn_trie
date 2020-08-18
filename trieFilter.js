// const fs = require('fs')
const searchTerm = require('./searchTerm')
const txtTrie = require('./makeTrie')

const start = Date.now()

const res = txtTrie.search(searchTerm)

const end = Date.now()
console.log(res)
console.log('Total time of search: ', end - start, ' milliseconds')
