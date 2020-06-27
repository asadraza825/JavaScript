function clr(){
	document.getElementById("res").value = ""
}
function calc(a){
		document.getElementById('res').value += a
}
function get_calc(){
	
	result = eval(document.getElementById('res').value)
	console.log(result)
	document.getElementById('res').value = result

}




//a = parseInt(prompt("Please enter number 1"))
//b = parseInt(prompt("Please enter number 2"))
//op = prompt("Please select Operation number \n 1 = +\n 2 = -\n 3 = x\n4 = /")
//calc(a,b,op)