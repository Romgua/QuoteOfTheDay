<?php
namespace App\Model;

class FacebookAPI
{
    private $_app_id;
    private $_app_secret;
    private $_app_token;
    private $_client_token;

    /**
     * FacebookAPI constructor.
     * Create the API access object. Requires an array of settings:: App ID, App Secret
     * These are all available by creating your own application on developers.facebook.com
     */
    public function __construct() {
        $this->_app_id = '351511258942950';
        $this->_app_secret = 'f5ecebb0e55b5f9e56a04c8223080f7c';
        $this->_app_token = '351511258942950|FQkSYwXko9bYkLFsUSraaQVFK_I';
        $this->_client_token = 'EAAEZCspe5TeYBAIzahh554njcR0LtcgMMZAf1ntDA8Y89ukE9YGx1VZCZCAgDT5OFoUtrUShXobtz5KcLZAgzudXCzgwkeIwPZAysbJbYHN67yoAWV2kTUdZA08PJDmFrLeOyA0krBwhfzTZA2nGJWKNuUb13IlOBhhMPZBZChGFjuWdeTnayPnENmp7CWHZArZCA74ZD';
    }

    /**
     * @return string
     */
    public function getAppID() {
        return $this->_app_id;
    }

    /**
     * @return string
     */
    public function getAppSecret() {
        return $this->_app_secret;
    }

    /**
     * @return string
     */
    public function getAppToken() {
        return $this->_app_token;
    }

    /**
     * @return string
     */
    public function getClientToken() {
        return $this->_client_token;
    }
}