const { answerOptionsPT, answerOptionsEN } = require('.././constants/constants.js')

// Validate tweet language to choose between portuguese or english answers
const validateLang = tweetLang => {
  if (tweetLang === 'pt' || tweetLang === 'es') {
    return answerOptionsPT
  } else {
    return answerOptionsEN
  }
}

module.exports = {
  validateLang
}