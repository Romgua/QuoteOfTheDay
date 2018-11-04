
Quote of the Day  
================  
Share a quote of the day on social network  
  
# Installation

Clone the repository [QuoteOfTheDay](https://github.com/Romgua/QuoteOfTheDay.git)

> git clone git@github.com:Romgua/QuoteOfTheDay.git

And copy folders into your server (for ex: **wampp**)
  
# Usage  
  
## How it works

Check the Date() every hour.
If hour = 6:00 AM, get the Quote of the day,   connect to [Twitter Account](https://twitter.com/Quote_QoD) and tweet the quote like   
> _"I think it is often easier to make progress on mega-ambitious dreams.  
Since no one else is crazy enough to do it, you have little competition.  
In fact, there are so few people this crazy that I feel like I know them all by first name." - Larry Page_  

## Set your credentials API

Set your Credential API (Key and Token) in the file _Model/Twitter.class.php_

     /**  
      * TwitterAPI constructor.
      * Create the API access object. Requires an array of settings::
      * oauth access token, oauth access token secret, consumer key, consumer secret
      * These are all available by creating your own application on dev.twitter.com
      */
     public function __construct() {  
         $this->_consumer_key = 'YOU_CONSUMER_KEY';  
         $this->_consumer_secret = 'YOU_CONSUMER_SECRET';  
         $this->_oauth_access_token = 'YOU_ACCESS_TOKEN';  
         $this->_oauth_access_token_secret = 'YOU_ACCESS_TOKEN_SECRET';  
     }

## Example

    let _quoteController = new QuoteController();  
    let _twitterController = new TwitterController();
    
    // Get the quote of the day
    _quoteController.getQoDbyCategory(category, function(quote) {  
	    let sQuote = "\"" + quote.quote + "\" - " + quote.author;
	    // Connect and tweet the quote of the day
	    _twitterController.connect(sQuote);
    });

  
# External librairies  and API
  
I used some external librairies like [jQuery](https://jquery.com/) for AJAX Request,   [QuoteREST](https://theysaidso.com/api/) to get the quote of the day and   [TwitterOAuth](https://twitteroauth.com/) to connect to Twitter and send a tweet.