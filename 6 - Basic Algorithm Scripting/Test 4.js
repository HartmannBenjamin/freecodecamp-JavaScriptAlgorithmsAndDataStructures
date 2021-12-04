function findLongestWordLength(str) {
  let words = str.split(' ')
  let lengths = words.map(word => word.length)
  return Math.max(...lengths)
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
