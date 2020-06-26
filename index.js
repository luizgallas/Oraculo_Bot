import T from '/config/config'
var Twit = require('twit')
import { options } from '/constants/constants'

const date = new Date.now() - 1
T.get('search/tweets', { q: `@BotOraculo since:${date}`, count: 100 }).then(function (response) {
    array.forEach(tweet => {
      const userName = tweet.response.data.statuses[0].user.screen_name;
      const tweetId = tweet.response.data.statuses[0].id_str;
      const message = _.sample(options)

      T.post('statuses/update', { in_reply_to_status_id: tweetId, status: `@${userName}, ${message}` },
        (err, data, response) => {
          resolve()
      })
    }) 
  });
})