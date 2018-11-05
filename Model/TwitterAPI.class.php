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
        $this->_consumer_key = 'y25rFYU8SOEtMZKNnHPDElfWn';
        $this->_consumer_secret = 'V0WjSqMPEkfMz94VXIpOB6tjf5a1iRGV4MLAQJpezrCroq7xxq';
        $this->_oauth_access_token = '1058305761481314304-fMxHh9WCffolCfRv51LsMCgsUQpeAr';
        $this->_oauth_access_token_secret = 'kmLQ2itPi1siLMYvAuGY4ag3fcQEXtGJFZq7420l7FZmS';
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