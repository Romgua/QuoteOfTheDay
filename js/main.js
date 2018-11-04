let _quoteController = new QuoteController();
let _twitterController = new TwitterController();

$(document).ready(function(){
    window.setInterval(function(){ // Set interval for checking
        let date = new Date(); // Create a Date object to find out what time it is
        if(date.getHours() === 6 && date.getMinutes() === 0){ // Check the time
            let category = setCategory(date);
            sendQuote(category);
        }
    }, 60000); // Repeat every minute (1 minute)
});

function sendQuote(category) {
    // Get the quote of the day
    _quoteController.getQoDbyCategory(category, function(quote) {
        let sQuote = "\"" + quote.quote + "\" - " + quote.author;

        // Connect and tweet the quote of the day
        _twitterController.connect(sQuote);
    });
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