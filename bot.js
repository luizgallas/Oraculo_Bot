const dotenv = require('dotenv')
dotenv.config()
const twit = require('twit')
const randomItem = require('random-item')
const { validateLang } = require('./validations/validations.js')
const config = require('./config/config.js')
const { botUserName, waitTime } = require('./constants/constants.js')
const T = new twit(config)

var queue = new Array()

// Create a conection between the bot and twitter API
var stream = T.stream('statuses/filter', { track: `@${botUserName}` });
// Track and capture tweets that contain @BotOraculo
stream.on('tweet', async function(tweet) {
  console.log(`Iteration found`)
  queue.push(tweet)

  //Handle tweets in a queue
  while ( queue.length != 0 ) {
    var firstTweet = queue.shift()
    await postTweet(firstTweet)
  }
})

function postTweet(tweet) {
  setTimeout(() => {
    var userName = tweet.user.screen_name
    var tweetId = tweet.id_str
    var answerOptions = validateLang(tweet.lang)

    // Validate that the tweet sender is not the bot, preventing infinite loop answers  
    if ( userName != botUserName ) {
      T.post('statuses/update', { in_reply_to_status_id: tweetId, status: `@${userName} ${randomItem(answerOptions)}` },
        (err, data, response) => {
          console.log(data)
      }) 
    }
  }, waitTime);
}