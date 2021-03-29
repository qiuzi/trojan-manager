<?php
$TPanel['timeZone'] 	= "PRC"; 

$TPanel['debug']        = false; 
    
$TPanel['default_lang'] = "en"; // en & zh-cn

$TPanel['restrict_phonecode'] = false;  
$TPanel['whitelist_phonecode_country'] = ['China +86','India +91','United States +1','United Kingdom +44'];


$TPanel['restrict_email'] = false; 
$TPanel['whitelist_email'] = ['@gmail.com','@qq.com','@outlook.com','@protonmail.com','@ymail.com','@yahoo.com','@hotmail.com','@hotmail.co.uk'];


$TPanel['db_driver']    = 'mysql';   
$TPanel['db_host']      = 'localhost';
$TPanel['db_socket']    = '';
$TPanel['db_database']  = 'trojan';           
$TPanel['db_username']  = 'root';             
$TPanel['db_password']  = 'root';           
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
 