const moment = require('moment')

// Possible answers used by Oraculo in portuguese
const answerOptionsPT = ['Sim!', 'Definitivamente sim!', 'Me parece que não',
   'Definitivamente não!', 'Não!']

// Possible answers used by Oraculo in english
const answerOptionsEN = ['Yes!', 'Definitely yes!', 'I dont think so',
   'Definitely no!', 'No!']

// Schedule timer in minutes
const scheduleTime = 15

// Maximum tweets limitation per search/hour
const tweetsMaxQuantity = 100

// Actual date for daily search
var actualDate = moment().format("YYYY-MM-DD")

module.exports = {
   answerOptionsPT,
   answerOptionsEN,
   scheduleTime,
   tweetsMaxQuantity,
   actualDate
}