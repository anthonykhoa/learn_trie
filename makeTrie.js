const fs = require('fs')
const fileChosen = require('./fileChosen')
const Trie = require('./trie.js')

// read data from chosen text file
const data = fs.readFileSync(fileChosen, 'utf-8')

// remove spaces from text file and convert to array
const removedNewline = data.split('\n')
const removedSpaces = removedNewline.toString().split(' ')

const txtTrie = new Trie()
const wordsHash = {}

// make sure no repeating words are in array
removedSpaces.forEach((word) => {
  if (wordsHash[word]) return
  wordsHash[word] = true
  txtTrie.insert(word)
})

module.exports = txtTrie
// fs.writeFile(
//   './txtTrie',
//   JSON.stringify(txtTrie),
//   (err) => err && console.log('***** HEEL0oOO0oO0 U GOT AN ERROR *****', err)
// )
