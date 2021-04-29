<?php
$TPanel['debug']        = false; 

$TPanel['timeZone'] 	= "PRC"; 
    
$TPanel['default_lang'] = "zh-cn"; // en & zh-cn 

$TPanel['restrict_phonecode'] = false; 

$TPanel['restrict_email'] = false;

$TPanel['whitelist_phonecode_country'] = [
    '+86' => 'China +86',
    '+1'  => 'United States +1',
    '+91' => 'India +91',
    '44'  => 'United Kingdom +44'
];

$TPanel['whitelist_email'] = [
	'@gmail.com','@qq.com',
	'@outlook.com','@protonmail.com',
	'@ymail.com','@yahoo.com',
	'@hotmail.com',
	'@hotmail.co.uk'
];

$TPanel['db_driver']    = 'mysql';   
$TPanel['db_host']      = 'localhost';
$TPanel['db_socket']    = '';
$TPanel['db_database']  = '';           
$TPanel['db_username']  = '';             
$TPanel['db_password']  = '';           
$TPanel['db_charset']   = 'utf8';
$TPanel['db_collation'] = 'utf8_general_ci'; 
$TPanel['db_prefix']    = '';  

$TPanel['cdn_forwarded_ip'] = array('HTTP_X_FORWARDED_FOR', 'HTTP_ALI_CDN_REAL_IP', 'X-Real-IP', 'True-Client-Ip');
foreach ($TPanel['cdn_forwarded_ip'] as $cdn_forwarded_ip) {
    if (isset($_SERVER[$cdn_forwarded_ip])) {
        $list = explode(',', $_SERVER[$cdn_forwarded_ip]); 
        $_SERVER['REMOTE_ADDR'] = $list[0];
        break;
    }
}
 