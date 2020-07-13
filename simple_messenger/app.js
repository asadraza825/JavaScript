function send(){
	user_name = "Asad Raza"
	var msg = document.getElementById("msg").value
	msg = user_name+": "+msg
	var p = document.createElement("p")
	txt = document.createTextNode(msg)
	p.appendChild(txt)
	msg_box = document.getElementById("msg_box")
	msg_box.appendChild(p)
	var msg = document.getElementById("msg").value = ""
}