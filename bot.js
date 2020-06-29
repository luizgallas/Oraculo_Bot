var twit = require('twit')
const moment = require('moment')
var config = require('./config/config.js')
const randomItem = require('random-item')
var responseList = require('./constants/constants.js')

var T = new twit(config)
var date = moment().subtract(1, 'hours')

T.get('search/tweets', { q: `@BotOraculo since:2020-06-29`, count: 100 }).then(function (response) {
  console.log(response)

  response.data.statuses.forEach(tweet => {
    var userName = tweet.user.screen_name;
    var tweetId = tweet.id_str;

    T.post('statuses/update', { in_reply_to_status_id: tweetId, status: `@${userName} ${randomItem(responseList)}` },
      (err, data, response) => {
        resolve()
        response.sendStatus(200)
    }) 
  });
});
