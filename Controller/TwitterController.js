class TwitterController {
    constructor() {}

    connect(quote, callback) {
        let _this = this;
        $.ajax({
            type: 'POST',
            url: "Controller/OAuthTwitterController.php",
            data: { action: 'connect' },
            success: function() {
                _this.sendTweet(quote, callback);
            }
        });
    }

    sendTweet(quote, callback) {
        console.log(quote);
        $.ajax({
            type: 'POST',
            url: "Controller/OAuthTwitterController.php",
            data: { action: 'sendTweet', data: quote },
            success: function(data) {
                console.log(data);
                callback(data);
            }
        });

    }
}