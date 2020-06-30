const moment = require('moment')
const { answerOptionsPT, answerOptionsEN } = require('.././constants/constants.js')

const validateDate = tweet => {
  const tweetDate = moment.utc(tweet.created_at, "ddd MMM DD HH:mm:ss ZZ yyyy");
  console.log("TweetDate:")
  console.log(moment(tweetDate).subtract(3, 'hours'))

  const hours = moment.duration(moment.utc().diff(tweetDate)).asHours()
  console.log("Time between tweet and now:")
  console.log(hours)

  return hours >= 0 && hours <= 1;
}

const validateLang = tweetLang => {
  if (tweetLang === 'pt' || tweetLang === 'es') {
    return answerOptionsPT
  } else {
    return answerOptionsEN
  }
}

module.exports = {
  validateDate,
  validateLang
}