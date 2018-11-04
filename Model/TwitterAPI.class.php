<?php
namespace App\Model;

class TwitterAPI
{
    private $_consumer_key;
    private $_consumer_secret;
    private $_oauth_access_token;
    private $_oauth_access_token_secret;
    
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

    /**
     * @return string
     */
    public function getConsumerKey() {
        return $this->_consumer_key;
    }

    /**
     * @return string
     */
    public function getConsumerSecret() {
        return $this->_consumer_secret;
    }

    /**
     * @return string
     */
    public function getOauthAccessToken() {
        return $this->_oauth_access_token;
    }

    /**
     * @return string
     */
    public function getOauthAccessTokenSecret() {
        return $this->_oauth_access_token_secret;
    }
}