function GetServerTime()
{
	var date = new Date( );
	var now = date.getTime( );

 	var endDate = new Date("01/01/2022 00:00:00");
	var end = endDate.getTime( );

    var leftTime = end - now;

    var d,h,m,s;
 	date.setTime(date.getTime()+250);

	d = Math.floor(leftTime/1000/60/60/24);
 	h = Math.floor(leftTime/1000/60/60%24);
 	m = Math.floor(leftTime/1000/60%60);
    s = Math.round(leftTime/1000%60);
 	document.getElementById("date").innerHTML = d + " 天 ";
 	document.getElementById("time").innerHTML = h + " 小时 " + m + " 分钟 " + s + " 秒 ";
}
setInterval("GetServerTime()",250);
