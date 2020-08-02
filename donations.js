const Twit = require('twit');
const TwitterBot = require('node-twitterbot').TwitterBot;
const fetch = require('node-fetch');

// Write the Env variables on Heroku or your server, to keep them save from Github
var Bot = new TwitterBot({
        consumer_key: 'HoLOf2E80xQd9VjBSAsdnjlwe',
        consumer_secret: '18Q5l361yHMVryutoJ7Oaup0lc3MObWwEHOzvWjTygtbupCkbm',
        access_token: '1285958645830889479-uxjJAhTuy1BJnWzzw1fS5G9BrHZhjG',
        access_token_secret: 'ik6Y1bXeTXd2fRj9yW5KQKvG2sZ4Nmc15OZr4S2Y7Ru9c'
});

// Function that builds and tweets the message
function runBot() {
        // Send Tweet
        Bot.tweet(`Bitcoin donations: 3K1E6MCoyyLkkXzYjpfMrDhrTnTqv4ywxX`)
}

// run Bot
runBot();
