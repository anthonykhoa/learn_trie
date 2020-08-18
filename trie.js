// Initialize data structure
Trie = function () {
  this.children = {}
}

// Inserts a word into the trie.
Trie.prototype.insert = function (word, i = 0) {
  if (i === word.length) {
    // guards against calls with falsy input values
    if (i) this.isWord = true
    return
  }
  const char = word[i]
  if (!this.children[char]) this.children[char] = new Trie()
  const currentNode = this.children[char]
  return currentNode.insert(word, i + 1)
}

// Returns true if the word is in the trie.
Trie.prototype.search = function (word, i = 0) {
  if (i === word.length) return this.isWord || false
  const char = word[i]
  if (!this.children[char]) return false
  currentNode = this.children[char]
  return currentNode.search(word, i + 1)
}

// Returns true if there is any word in the trie that starts with the given prefix.
Trie.prototype.startsWith = function (prefix, i = 0) {
  if (i === prefix.length) return true
  const char = prefix[i]
  if (!this.children[char]) return false
  currentNode = this.children[char]
  return currentNode.startsWith(prefix, i + 1)
}

module.exports = Trie
