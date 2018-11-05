class TwitterController {
    constructor() {}

    connect(quote) {
        let _this = this;
        $.ajax({
            type: 'POST',
            url: "Controller/OAuthTwitterController.php",
            data: { action: 'connect' },
            success: function() {
                _this.sendTweet(quote);
            }
        });
    }

    sendTweet(quote) {
        $.ajax({
            type: 'POST',
            url: "Controller/OAuthTwitterController.php",
            data: { action: 'sendTweet', data: quote },
            success: function(data) {
                console.log("Tweet sent");
            }
        });
    }
}