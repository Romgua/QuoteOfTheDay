class QuoteController {
    constructor() {
        // API
        this._urlAPI = 'http://quotes.rest/';
    }

    getQoDbyCategory(category, callback) {
        $.ajax({
            type: 'GET',
            url: this._urlAPI+"qod.json?category="+category,
            success: function(data) {
                callback(new Quote(data.contents.quotes[0]));
            }
        });
    }
}