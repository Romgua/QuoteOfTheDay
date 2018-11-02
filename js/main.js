let _quoteController = new QuoteController();
let _quote;

$(document).ready(function(){
  // Gets all category
  getQoD();
});

function getQoD() {
    let category = 'inspire';
    _quoteController.getQoDbyCategory(category, function(quote) {
        _quote = quote;
        console.log(_quote);
        console.log(_quote.getTitle());
    });
}