/*
#Fit VIP by Bindx

[Script]

http-response,^https:\/\/bea\.sportq\.com\/SFitWeb\/sfit\/getUserBaseInfo,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/bindx/Surge-script/master/Fit-vip.js

[MITM]
hostname:bea.sportq.com

*/

var body = $response.body;
let obj = JSON.parse(body);
obj.entRet.entUserBaseInfo.isVip = 1;
body = JSON.stringify(obj);  
$done({body});