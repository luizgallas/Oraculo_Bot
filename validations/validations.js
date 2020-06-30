const moment = require('moment')
const { answerOptionsPT, answerOptionsEN } = require('.././constants/constants.js')

const validateDate = tweet => {
  const tweetDate = moment(tweet.created_at, "ddd MMM DD HH:mm:ss ZZ yyyy");
  console.log(tweetDate)

  const hours = moment.duration(moment().diff(tweetDate)).asHours()
  console.log(hours)
  return hours >= 0 && hours <= 1;
}

const validateLang = tweet => {
  const lang = tweet.lang

  if (lang === 'pt' || lang === 'es') {
    return answerOptionsPT
  } else {
    return answerOptionsEN
  }
}

module.exports = {
  validateDate,
  validateLang
}