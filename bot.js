const twit = require('twit')
const randomItem = require('random-item')
const schedule = require('node-schedule')
const validateDate = require('./validations/validations.js')
const config = require('./config/config.js')
const { answerOptions, scheduleTime, tweetsMaxQuantity, actualDate } = require('./constants/constants.js')
var T = new twit(config)

var sched = schedule.scheduleJob({ minute: scheduleTime }, function() {
  T.get('search/tweets', { q: `@BotOraculo since:${actualDate}`, count: tweetsMaxQuantity})
        .then(function (response) {
    console.log(response.data)
    
    response.data.statuses.forEach(tweet => {
      if(validateDate(tweet) === true) {
        var userName = tweet.user.screen_name
        var tweetId = tweet.id_str

        T.post('statuses/update', { in_reply_to_status_id: tweetId, status: `@${userName} ${randomItem(answerOptions)}` },
          (err, data, response) => {
            console.log(data)
        }) 
      }
    })
  })
})
