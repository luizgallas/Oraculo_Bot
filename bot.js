const twit = require('twit')
const randomItem = require('random-item')
const schedule = require('node-schedule')
const { validateDate, validateLang } = require('./validations/validations.js')
const config = require('./config/config.js')
const { scheduleTime, tweetsMaxQuantity, actualDate } = require('./constants/constants.js')
var T = new twit(config)

// var sched = schedule.scheduleJob({ minute: scheduleTime }, function() {
  // Search operation, look for all iterations with @BotOraculo
  T.get('search/tweets', { q: `@BotOraculo since:${actualDate}`, count: tweetsMaxQuantity})
        .then(function (response) {
    console.log(response.data)
    
    response.data.statuses.forEach(tweet => {
      // Filter iterations returning only the ones made in the last hour
      if(validateDate(tweet) === true) {
        var userName = tweet.user.screen_name
        var tweetId = tweet.id_str

        // Verify the tweet language to choose between portugues or english list of answerOptions
        var answerOptions = validateLang(tweet)

        // Tweet operation replying the user who mention the bot with one random answer
        T.post('statuses/update', { in_reply_to_status_id: tweetId, status: `@${userName} ${randomItem(answerOptions)}` },
          (err, data, response) => {
            console.log(data)
        }) 
      }
    })
  })
// })})

