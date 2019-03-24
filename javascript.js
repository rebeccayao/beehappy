var quotes = [
  'You. Got. This.',
  'be so happy that when others look at you, they become happy too',
  '"you miss 100% of the shots you don\'t take" - wayne gretzky - micheal scott',
  'SMILE! :D',
  'positive thinking!',
  'you are strong.',
  'live life to the fullest!',
  'no one is you and that is your super power.',
  'believe in yourself :)',
  'it\'s okay to make mistakes.',
  'don\'t set yourself on fire to make others warm',
  'don\'t let what you can\'t do define what you can do',
  '"nothing is impossible, the word itself says i\'m possible"',
  'be proud of yourself.'
]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}