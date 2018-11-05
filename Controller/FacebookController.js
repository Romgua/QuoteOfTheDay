class FacebookController {
    constructor() {}

    connect(quote) {
        let _this = this;
        $.ajax({
            type: 'POST',
            url: "Controller/OAuthFacebookController.php",
            data: { action: 'connect' },
            success: function() {
                _this.sendTweet(quote);
            }
        });
    }

    send(quote) {
        $.ajax({
            type: 'POST',
            url: "Controller/OAuthFacebookController.php",
            data: { action: 'send', data: quote },
            success: function(data) {
                //console.log(data);
            }
        });
    }
}