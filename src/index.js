function isInArr(number, arr) {
  return arr.includes(number)
}

function getIndex(letter, word) {
  return word.indexOf(letter)
}

module.exports = {
  getIndex,
  isInArr
}

