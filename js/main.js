let _quoteController = new QuoteController();
let _twitterController = new TwitterController();
let _facebookController = new FacebookController();

$(document).ready(function(){
    // window.setInterval(function(){ // Set interval for checking
        let date = new Date(); // Create a Date object to find out what time it is
        // if(date.getHours() === 6 && date.getMinutes() === 0){ // Check the time
            let category = setCategory(date);
            sendQuote(category);
        // }
    // }, 60000); // Repeat every minute (1 minute)
});

function sendQuote(category) {
    let sQuote = "I think it is often easier to make progress on mega-ambitious dreams. Since no one else is crazy enough to do it, you have little competition. In fact, there are so few people this crazy that I feel like I know them all by first name. - Larry Page";
    // Get the quote of the day
    // _quoteController.getQoDbyCategory(category, function(quote) {
        // let sQuote = "\"" + quote.quote + "\" - " + quote.author;
        // let sQuote = "\"" + quote.quote + "\" - " + quote.author;

        // Connect and tweet the quote of the day on Twitter
        // _twitterController.connect(sQuote);
        // Connect and post the quote of the day on Facebook
        _facebookController.connect(sQuote);
    // });
}

function setCategory(date) {
    switch (date.getDay()) {
        case 0: return 'inspire';
        case 1: return 'management';
        case 2: return 'sports';
        case 3: return 'life';
        case 4: return 'love';
        case 5: return 'students';
        case 6: return 'art';
        default: return 'inspire';
    }
}