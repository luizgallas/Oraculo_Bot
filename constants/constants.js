const moment = require('moment')

const answerOptions = ['Sim!', 'Definitivamente sim!', 'Me parece que não',
   'Definitivamente não!', 'Não!']

const scheduleTime = 59

const tweetsMaxQuantity = 100

var actualDate = moment().format("YYYY-MM-DD")

module.exports = {
   answerOptions,
   scheduleTime,
   tweetsMaxQuantity,
   actualDate
}