var oneLinerJoke = require('one-liner-joke');

var getRandomJoke = oneLinerJoke.getRandomJokeWithTag('food').body;

module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },

  random_joke: () => {
    return getRandomJoke;
  },
};
