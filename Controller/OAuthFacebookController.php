<?php
require "../Facebook/autoload.php";
require "../Model/FacebookAPI.class.php";

use Facebook\Facebook;
use Facebook\Exceptions\FacebookSDKException;

use App\Model\FacebookAPI;

if(isset($_POST['action']) && !empty($_POST['action'])) {
    $action = $_POST['action'];

    if(!isset($OAuthFacebookController) || empty($OAuthFacebookController)) {
        $OAuthFacebookController = new OAuthFacebookController();
    }

    if(isset($_POST['data']) && !empty($_POST['data'])) {
        $quote = $_POST['data'];

        switch ($action) {
            case 'send':
                $OAuthFacebookController->send($quote);
                break;
        }
    }
}

class OAuthFacebookController
{
    protected $connection;
    private $fb;

    function __construct()
    {
        $this->fb = new FacebookAPI();

        try {
            $this->connection = new Facebook([
                'app_id' => $this->fb->getAppID(),
                'app_secret' => $this->fb->getAppSecret(),
                'default_graph_version' => 'v2.10'
            ]);

            // Get the \Facebook\GraphNodes\GraphUser object for the current user.
            // If you provided a 'default_access_token', the '{access-token}' is optional.
            $response = $this->connection->get('/me', $this->fb->getClientToken());

            $me = $response->getGraphUser();
            var_dump($me);
            echo 'Logged in as ' . $me->getName();

        } catch(FacebookSDKException $e) {
            // When validation fails or other local issues
            echo 'Facebook SDK returned an error: ' . $e->getMessage();
            exit;
        }
    }

    function send($sQuote) {
        $linkData = [
            'message' => $sQuote,
        ];

        try {
            // Returns a `Facebook\FacebookResponse` object
            $response = $this->connection->post('/me/feed', $linkData, $this->fb->getClientToken());

            $graphNode = $response->getGraphNode();
            var_dump($graphNode);

            echo 'Posted with id: ' . $graphNode['id'];
        } catch(FacebookSDKException $e) {
            echo 'Facebook SDK returned an error: ' . $e->getMessage();
            exit;
        }
    }
}
