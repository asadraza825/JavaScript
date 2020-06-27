//#### Chapter 21-25 #####//
// 1 //
fname = window.prompt("Please enter your first name")
lname = window.prompt("Please enter your last name")
window.alert("Welcome! "+fname+' '+lname)
 // 2 //
model = window.prompt("What is your favourite mobile model")
alert("Length of String: "+model.length)

// 3 //
str = "Pakistani"
document.write("String: "+str)
document.write("<br>Index of 'n': "+str.indexOf("n"))

// 4 //
str = "Hello World"
document.write("<br>String: "+str)
document.write("<br>Last index of 'l': "+str.lastIndexOf("l"))

// 5 //
str = "Pakistani"
document.write("<br>String: "+str)
document.write("<br>Character at index 3: "+str[3])
//6
fname = window.prompt("Please enter your first name")
lname = window.prompt("Please enter your last name")
name = fname.concat(" "+lname)
window.alert("Welcome! "+name)
//7
str = "Hyderabad"
document.write("<br>City: "+str)
document.write("<br>After replacement: "+str.replace("Hyder","Islam"))
//8
str = "Ali and Sami are best friends. They play cricket and football together."
document.write("<br>After replacement: "+str.replace("and","&"))
//9
str = "472"
document.write("<br>Value: "+str)
document.write("<br>Type: "+typeof(str))
str = parseInt(str)
document.write("<br>Value: "+str)
document.write("<br>Type: "+typeof(str))
//10
str = window.prompt("Please enter word")
document.write("<br>User input: "+str)
document.write("<br>Upper Case: "+str.toUpperCase())
//11
str = window.prompt("Please enter word")
document.write("<br>User input: "+str)
title = str[0].toUpperCase()
len = str.length
document.write("<br>Title Case: "+title+str.substring(1,len))
//12
var num = 35.36
document.write("<br>Number: "+num)
num = (35.36+"").replace(".","")
document.write("<br>Result: "+num)
//13
str = window.prompt("Please enter username")
for (i=0;i<=str.length;i++){
	var char  = str[i]
	if (charCodeAt(char) == 33 || charCodeAt(char) == 44 || charCodeAt(char)==46 || charCodeAt(char)==64){
		alert("Please enter a valid username")
	}
}
document.write("<br>User input: "+str)
title = str[0].toUpperCase()
len = str.length
document.write("<br>Title Case: "+title+str.substring(1,len))
//14
var A = ["cake","applie pie","cookie","chips","patties"]
input = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'm?")
a = A.indexOf(input)
if(a>=0){
document.write(input+" is <b>available</b> at index "+a+" in our bakery")
}
else{
document.write("We are sorry. "+input+" is <b>not available</b> in our bakery")
}
//15
//15
function alphanumeric(pwd){ 
if(!pwd.match("^[a-zA-Z0-9]*$")){
  document.write("<br>It should contain alphabets and numbers. ")	
}
else{
return false
}
}
str = window.prompt("Please enter password")
var letters = /^[0-9a-zA-Z]+$/;
if(str.length <6){
	document.write("<br>It must at least 6 characters long")	
}
else if(str.charCodeAt(0) >=48 && str.charCodeAt(0) <=57 ){
	document.write("<br>Password can not begin with number")	
}
else{
alphanumeric(str)
}

//16
var uni = "University of Karachi"
a = uni.split("")
for(i=0;i<=a.length;i++){
document.write("<br>"+a[i])
}
//17
str = window.prompt("Please enter word")
document.write("<br>User input: "+str)
document.write("<br>Last Character of input: "+str[str.length-1])


//#### Chapter 26-30 #####//
//1
num = parseFloat(window.prompt("Please enter positive number"))
document.write("<br>Number: "+num)

document.write("<br>Round off value: "+Math.round(num))

document.write("<br>Floor value: "+Math.floor(num))

document.write("<br>Ceil value: "+ Math.ceil(num))
//2
num = parseFloat(window.prompt("Please enter negetive number"))
document.write("<br>Number: "+num)

document.write("<br>Round off value: "+Math.round(num))

document.write("<br>Floor value: "+Math.floor(num))

document.write("<br>Ceil value: "+ Math.ceil(num))
//3
num = -4
document.write("<br>The absolute value of "+num+" is "+Math.abs(num))
//4
var dice = Math.floor( Math.random() * 5 ) +1;
document.write("<br>random dice value: "+dice)
var dice = Math.floor( Math.random() * 5 ) +2;
document.write("<br>random dice value: "+dice)
//5
var coin = Math.floor( Math.random() * 1 ) +2;
document.write("<br>"+coin)
document.write("<br>random coin value: Heads")
var coin = Math.floor( Math.random() * 1 )+1 ;
document.write("<br>"+coin)
document.write("<br>random coin value: Tails")

//6
var num = Math.floor( Math.random() * 100 ) +1;
document.write("<br>The random number between 1 and 100: "+num)
//7
num = parseFloat(window.prompt("Please enter weight in kilograms"))
document.write("<br>The weight of user is "+num+" Kilograms")

//8
num = parseInt(window.prompt("Please enter number between 1 and 10"))
var secNum = Math.floor( Math.random() * 10 ) +1;
if (num==secNum){
document.write("Congrats")
}
else{
document.write("Try again!")
}

//#### Chapter 31-34 #####//
// 1 //
date = new Date()
daysList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
monthsList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Aug', 'Oct', 'Nov', 'Dec'];
h = date.getHours()
m = date.getMinutes()
s = date.getSeconds()
day = date.getDay()
time = date.getTime()
month= date.getMonth()
y = date.getFullYear()
datetime = daysList[day]+" "+monthsList[month]+" "+y+" "+h+":"+m+":"+s
document.write("<br>"+datetime)
document.write("<br>")
document.write("<br>")
document.write("<br>")

//2
date = new Date()
monthsList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Aug', 'Oct', 'Nov', 'Dec'];
month = date.getMonth()
document.write("<br>Current Month: "+monthsList[month])

//3
date = new Date()
daysList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
day = date.getDay()
document.write("<br>Today is: "+daysList[day].substring(0,3))

//4
date = new Date()
daysList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
day = date.getDay()
if (day=='Saturday' || day =='Sunday'){ 
 document.write("<br>It's fun day")
}
else{
document.write("<br>It's working day")
}

//5
date = new Date()
d = date.getDate()
if (d<16){ 
 document.write("<br>IFirst fifteen days of the month")
}
else{
document.write("<br>Last days of the month")
}

//6
date = new Date()
daysList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
monthsList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Aug', 'Oct', 'Nov', 'Dec'];
h = date.getHours()
m = date.getMinutes()
s = date.getSeconds()
day = date.getDay()
time = date.getTime()
month= date.getMonth()
y = date.getFullYear()
datetime = daysList[day]+" "+monthsList[month]+" "+y+" "+h+":"+m+":"+s
document.write("<br>Current Date"+datetime)
document.write("<br>Eclipsed seconeds since january 1970"+date.getTime())
document.write("<br>Eclipsed minutes since january 1970"+date.getMinutes())

//7
date = new Date()
h = date.getHours()

if (h>12){
    a  = "PM"
}
else{
a  = "AM"
}
document.write("<br>It's "+a)

//8
my_date = new Date()
var last_date = new Date(my_date.getFullYear(), my_date.getMonth()-1 + 1, 0);
document.write("<br>Later Date: "+last_date)

//9
date1 = new Date(2015,6,18)
date2 = new Date(2020,6,25)
const diffTime = Math.abs(date2 - date1);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
document.write("<br>"+diffDays+" days have passed since 1st Ramzan, 2015");

//10
date1 = new Date(2015,12,5)
date2 = new Date(2020,6,25)
const diffTime = Math.abs(date2 - date1);
document.write("<br>"+date2)
document.write("<br>"+diffTime +" seconds have passed since begining of 2015");

//11
date = new Date()
daysList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
monthsList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Aug', 'Oct', 'Nov', 'Dec'];
h = date.getHours()
m = date.getMinutes()
s = date.getSeconds()
day = date.getDay()
time = date.getTime()
month= date.getMonth()
y = date.getFullYear()
datetime = daysList[day]+" "+monthsList[month]+" "+y+" "+h+":"+m+":"+s
h = date.getHours()+1
datetime2 = daysList[day]+" "+monthsList[month]+" "+y+" "+h+":"+m+":"+s
document.write("<br> Current Date: "+datetime2)
document.write("<br>1 hour ago it was: "+datetime)

//12
date = new Date()
daysList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
monthsList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Aug', 'Oct', 'Nov', 'Dec'];
h = date.getHours()
m = date.getMinutes()
s = date.getSeconds()
day = date.getDay()
time = date.getTime()
month= date.getMonth()
y = date.getFullYear()
datetime = daysList[day]+" "+monthsList[month]+" "+y+" "+h+":"+m+":"+s
y = date.getFullYear()-100
datetime2 = daysList[day]+" "+monthsList[month]+" "+y+" "+h+":"+m+":"+s
document.write("<br> Current Date: "+datetime)
document.write("<br>100 years back, it was: "+datetime2)

//13
date = new Date()
age = parseInt(prompt("Please enter your age"))
y = date.getFullYear()-age
alert("Your birth year is: "+y)

//14
date = new Date()
daysList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
monthsList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Aug', 'Oct', 'Nov', 'Dec'];
units = 410
charges_unit = 16
net_amount = units * charges_unit 
late_surc = 350
gross_amount = net_amount + late_surc
document.write("<h1>K- Electric Bill</h1>")
document.write("<br> Customer Name: Asad Raza")
document.write("<br> Current Month:"+monthsList[date.getMonth()])
document.write("<br> Number of units:"+ units)
document.write("<br> Charges per unit: "+charges_unit )
document.write("<br> Net Amount Payable (within Due Date): "+net_amount)
document.write("<br>Late Payment Surcharge: "+ late_surc)
document.write("<br>Gross Amount Payable (after Due Date): "+gross_amount)

//#### Chapter 35-38 #####//
// 1 //
function current_date(){
	date = new Date()
	document.write(date)
}

current_date()
//2
function greeting(fname,lname){
	document.write("Welcome! "+fname+" "+lname")
}

greeting("asad","raza")
//3
function add(a,b){
	
	document.write(a+b)
}
a = parseInt(prompt("Please enter number 1"))
b = parseInt(prompt("Please enter number 2"))
add(a,b)
//4
function calc(a,b,op){
	var result=0
	switch(op){
	case  '1':
	 result = a+b
	break;
	case  '2':
	 result = a-b
	break;
	case  '3':
	 result = a*b
	break;
	case  '4':
	 result = a/b
	break;
	
	}	
	document.write("RESULT: "+result)
}
a = parseInt(prompt("Please enter number 1"))
b = parseInt(prompt("Please enter number 2"))
op = prompt("Please select Operation number \n 1 = +\n 2 = -\n 3 = x\n4 = /")
calc(a,b,op)
//5
function sqr(a){
	document.write(a*a)
}

sqr(2)
//6
function factorialize(num) {
	if (num < 0) 
		  return -1;
	else if (num == 0) 
		return 1;
	else {
		return (num * factorialize(num - 1));
	}
  }
  fact = factorialize(7);
  document.write(fact)
//7
function count(start,end){
	for(i=start;i<=end;i++){
	document.write(i)
	}
	}
	
	a = prompt("please enter start number")
	b = prompt("please enter end number")
	a = parseInt(a)
	b = parseInt(b)
	count(a,b)
//8
function hypo(base,perp){
	hypo = base*base+perp*perp
	hypo = hypo*hypo
	document.write(hypo)

}

a = prompt("please enter base number")
b = prompt("please enter perpendicular number")
a = parseInt(a)
b = parseInt(b)
hypo(a,b)
//9
function area(w,h){
	document.write("Area="+w*h)

}
width = 5
height = 7
area(15,27)
area(width,height)
//10
function palindrome(str) {

    var len = str.length;
    var mid = Math.floor(len/2);

    for ( var i = 0; i < mid; i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }

    return true;
}

res = palindrome("madam")
if(res){
document.write("Palindrome Word")
}
else{
document.write("Non-Palindrome Word")
}
//11
function camelWord(str){
	a = str[0].toUpperCase()
	b = str.substring(1,str.length)
	return a+b
}

res = camelWord("the quick brown fox")
document.write(res)

//12
function Longest_word(str){
	str = str.split(" ")
	len = new Array()
	previous = 0
	for(i=0;i<=str.length-1;i++){
	current = str[i].length
	if (current > previous == true) {
    		largest = str[i];
		previous = largest.length
	} else {
	    previous = largest.length			
	}
	
	}
	return largest 
}

res = Longest_word("Web Development Tutorial asadrazarind")
document.write(res)

//13
function word_occuring(str,chr){
	str = str.indexOf(chr)
	return str
}

res = word_occuring("Web Development Tutorial asadrazarind","a")
document.write(res)

//14
function calcCircumference(r){
	return 2*3.14*r

}
function calcArea(r){
	return 3.14*r*r
}
res = calcCircumference(5)
document.write("Circumfernce "+res)
res = calcArea(5)
document.write("<br>Area: "+res)
