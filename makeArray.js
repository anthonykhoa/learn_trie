const fs = require('fs')
const fileChosen = require('./fileChosen')

// read data from chosen text file
const data = fs.readFileSync(fileChosen, 'utf-8')

// remove spaces from text file and convert to array
const removedNewline = data.split('\n')
const removedSpaces = removedNewline.toString().split(' ')

const txtArr = []
const wordsHash = {}

// make sure no repeating words are in array
removedSpaces.forEach((word) => {
  if (wordsHash[word]) return
  wordsHash[word] = true
  txtArr.push(word)
})

module.exports = txtArr

// fs.writeFile(
//   './txtArr',
//   JSON.stringify(txtArr),
//   (err) => err && console.log('***** HEEL0oOO0oO0 U GOT AN ERROR *****', err)
// )
