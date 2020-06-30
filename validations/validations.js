const moment = require('moment')

module.exports = tweet => {
    const tweetDate = moment(tweet.created_at, "ddd MMM DD HH:mm:ss ZZ yyyy");
    console.log(tweetDate)

    const hours = moment.duration(moment().diff(tweetDate)).asHours()
    console.log(hours)
    return hours >= 0 && hours <= 1;
}