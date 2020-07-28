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
        fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=de1d97bb-6f29-44ae-97db-8d7e1a81dc95&convert=eur')
    .then(resp => resp.json())
    .then(text => text.data)
    .then(
            currencies => {
                    for( let i = 0; i < currencies.length; i++ ) {
                        // Get currency
                        let currency = currencies[i]

                        // Filter currencies
                            if (currency.slug == 'bitcoin' || currency.slug == 'ethereum' || currency.slug == 'omg' || currency.slug == 'synthetix-network-token' ) {
                                // Send Tweet
                                Bot.tweet(`${currency.name} Price: €${currency.quote.EUR.price.toFixed(2)} [EUR]
#${currency.slug}`)
                        }
                    }
            }
    )
    //.then(bitcoin => console.log(bitcoin)) // debugging purposes
    .catch(error => console.log('Error ', error));
}

// run Bot
runBot();
