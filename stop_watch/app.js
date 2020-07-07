var min = 0
var sec = 0
var msec = 0
function time_interval(){
	msec++
	if(msec==100){
		sec++
		msec=0
	}
	else if(sec==60){
		min++
		sec=0
	}
	time = min+":"+sec+":"+msec
	console.log(time)
	document.getElementById("time").innerHTML = time
}

function start(){
	interval_ob = setInterval(time_interval,10)
}

function stop(){
	clearInterval(interval_ob)
}

function clear_time(){
	document.getElementById("time").innerHTML = "0:0:0"
}