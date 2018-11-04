<?php
/**
 * Created by PhpStorm.
 * User: Romain
 * Date: 04/11/2018
 * Time: 10:04
 */
require "../twitteroauth/autoload.php";
require "../Model/TwitterAPI.class.php";
use Abraham\TwitterOAuth\TwitterOAuth;
use App\Model\TwitterAPI;

if(isset($_POST['action']) && !empty($_POST['action'])) {
    $action = $_POST['action'];

    if((!isset($OAuthTwitterController) || empty($OAuthTwitterController))) {
        $OAuthTwitterController = new OAuthTwitterController();
    }

    if(isset($_POST['data']) && !empty($_POST['data'])) {
        $quote = $_POST['data'];

        switch ($action) {
            case 'sendTweet':
                return $OAuthTwitterController->sendTweet($quote);
                break;
        }
    }
}

class OAuthTwitterController
{
    protected $connection;
    private $twit;

    function __construct()
    {
        $this->twit = new TwitterAPI();
        $this->connection = new TwitterOAuth(
            $this->twit->getConsumerKey(),
            $this->twit->getConsumerSecret(),
            $this->twit->getOauthAccessToken(),
            $this->twit->getOauthAccessTokenSecret()
        );
    }

    function sendTweet($quote)
    {
        $statues = $this->connection->post("statuses/update", ["status" => $quote]);

        return json_encode($statues);
    }
}
