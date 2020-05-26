/*
#Fit VIP by Bindx

[Script]

http-response,^https:\/\/bea\.sportq\.com\/SFitWeb\/sfit\/getUserBaseInfo,requires-body=1,max-size=0,script-path=https://gist.github.com/bindx/3abdcbfc46ae8ed7a701b2744fe7f91e,script-update-interval=0

[MITM]
hostname:bea.sportq.com

*/

var body = $response.body;
let obj = JSON.parse(body);
obj.entRet.entUserBaseInfo.isVip = 1;
body = JSON.stringify(obj);  
$done({body});