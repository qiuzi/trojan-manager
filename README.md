<h2 align="center">
  <br>Trojan-Go Panel<br>
</h2>

## Requirements
- CentOS 7x64
- Ngnix Server
- PHP 7.3+ 
- Ioncube Loader
- Database(mysql or mariab)
- Cron

## Install Ioncube on server first
- https://www.howtoforge.com/tutorial/how-to-install-ioncube-loader/#-configure-ioncube-loader-on-centos
 
## Install tesseract ocr
yum list|grep tesseract 
yum install tesseract -y
  
## Panel Installation
```
- cd /www/xxx/public_html
- git clone https://github.com/frainzy1477/trojan-manager.git tmp -b master && mv tmp/.git . && rm -rf tmp && git reset --hard
- chmod -R 777 /www/xxx/public_html
- cd www/xxx/public_html
- Edit config/config.php and set database credentials
- Upload sql/trojan.sql to your database
- Edit ngnix config, add below line to location /, for redirect non-https to https uncomment return  301 https://xxx.xxx.xxx$request_uri.

location / {
	try_files $uri $uri/ /index.php$is_args$args;
	#return  301 https://xxx.xxx.xxx$request_uri;
}
- Reload /Restart ngnix
- Enjoy
```
## Create Admin Login
- cd /www/xxx/public_html
- php xcat createAdmin

## Cron Job
crontab -e 
```
 0 */1 * * * php /www/xxx/public_html/xcat backup
 0 */1 * * * php /www/xxx/public_html/xcat rate
 */1 * * * * php /www/xxx/public_html/xcat checkjob
 59 23 * * * php /www/xxx/public_html/xcat dailyjob
```

## Features
- [Google Analytic](https://analytics.google.com/analytics/web/) 
- [Google Console](https://console.developers.google.com/) 
- [Twilio](https://www.twilio.com/console/project/api-keys) 
- [AmazonSNS](https://aws.amazon.com/sns/)
- [Alphadvantage (Exchange rate key)](https://www.alphavantage.co/support/#api-key)
- [Paypal](https://developer.paypal.com/classic-home) 
- [Tawk](https://www.tawk.to/)
- [TelegramBot](https://telegram.org/)
- [Mailgun](https://www.mailgun.com/)
- [Twilio-Sendgrid](https://sendgrid.com/)


## Downloaod Apps
- cd /www/xxx/public_html
- php xcat downloadApps

## Upadete Apps
- cd /www/xxx/public_html
- php xcat updateApps

## Server backend
- [SERVER BACKEND](https://github.com/frainzy1477/trojan-go-webapi)


### NOTE
If you update smarty remember to replace file smarty_internal_resource_file.php   IN   .../vendor/smarty/smarty/libs/sysplugins/smarty_internal_resource_file.php to be able to read encoded and encypted files
