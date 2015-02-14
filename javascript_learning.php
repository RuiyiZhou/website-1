<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Clock</title>
</head>

<style>

#time {
font-size:36px;	
	text-align:center;
	font-family:Gotham, "Helvetica Neue", Helvetica, Arial, sans-serif;
	color:#FFFFFF;
	vertical-align:central;
}

</style>

<script type="text/javascript">
function updateClock() {
var currentTime = new Date();
var currentHours = currentTime.getHours ( );
  var currentMinutes = currentTime.getMinutes ( );
  var currentSeconds = currentTime.getSeconds ( );

currentHours = ( currentHours < 10 ? "0" : "" ) + currentHours;
currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
  currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;
document.body.style.backgroundColor = "#"+currentHours+currentMinutes+currentSeconds;
document.getElementById("time").innerHTML = currentHours+":"+currentMinutes+":"+currentSeconds+"      #"+currentHours+currentMinutes+currentSeconds;
}

</script>

<body onLoad="updateClock(); setInterval('updateClock()',1000)">


<div id='time'></div>
</body>
</html>