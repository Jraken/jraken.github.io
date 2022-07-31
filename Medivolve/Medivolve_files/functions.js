function $_GET(param){var vars={};window.location.href.replace(location.hash,'').replace(/[?&]+([^=&]+)=?([^&]*)?/gi,function(m,key,value){vars[key]=value!==undefined?value:'';});if(param){return vars[param]?vars[param]:null;}
return vars;}
function ValidateEmail(mail){if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)){return(true)}
return(false)}
function ValidatePassword(str){{var re=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;console.log(str,re)
return re.test(str);}}
function ValidatePhone(str){var phoneno=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;return phoneno.test(str);}
function ValidatePayerId(str){var phoneno=/^[0-9a-zA-Z]{5,5}/;return phoneno.test(str);}
var idleTime=0;$(document).ready(function(){var idleInterval=setInterval(timerIncrement,60000);$(this).mousemove(function(e){idleTime=0;});$(this).keypress(function(e){idleTime=0;});});function timerIncrement(){idleTime=idleTime+1;if(idleTime>179){console.log("Timeout");window.location="/logout.php";}}