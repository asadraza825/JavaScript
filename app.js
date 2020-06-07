//#### Chapter 1 #####//
// 1 //
window.alert("Welcome!")
// 2 //
window.alert("Error! Please enter a valid password.")
// 3 //
window.alert("Welcome to JS Land...\n Happy Coding!")
// 4 //
window.alert("Welcome to JS Land...")
window.alert("Happy Coding!")
// 5 //
console.log("Hello... I can run JS through my web browser's console")
//#### Chapter 2 #####//
// 1 //
var username
var myName="Asad Raza"
// 2 //
var message = "Hello World"
window.alert(message)

// 3 //
var name="Asad Raza"
var age = "30 years old"
var profession = "Certified Mobile Application Development"
alert(name)
alert(age)
alert(profession)

// 4 //
alert("PIZZA")
alert("PIZZ")
alert("PIZ")
alert("PI")
alert("P")
// 5 //
var email = "example@gmail.com"
alert("My email address is "+email)
//6//
book = "A smarter way to learn JavaScript"
alert("I am trying to learn from the book "+book)
//7//
document.write("Yah! I can write content through JavaScript")
//#### Chapter 3 #####//
// 1 //
age = 30
alert("I am "+age+" years old")
// 2 //
visits = 30
alert("You have visited this website "+visits+" times")

// 3 //
birthYear = 1990
document.write("My birth year is "+birthYear)
document.write("Datatype of my declared variable is number")
// 4 //
visiterName = "John Doe"
product = "T-Shirt"
qnty = 5
document.write(visiterName+" ordered "+ qnty+" "+product+"(s) on XYZ clothing store")
//#### Chapter 4 #####//
// 1 //
var a,b,c
// 2 //
var a,b,c,d,e
// illegal 
//var 1a,2b,3c,3d,3e

// 3 //
document.write("<h2>Rules for naming JS variables</h2>")
document.write("Variable names can only contain $,numbers and _. For example $my_1stVariable<br>")
document.write("Variables must begin with a letter, $ or _. For example $name, _name or name <br>")
document.write("Variable names are case sensitive <br>")
document.write("Variable names should not be JS keywords <br>")

//#### Chapter 5 #####//
// 1 //
var a = 3
var b = 5
document.write("The sum of "+a+" and "+b+" is "+(a+b))

// 2 //
document.write("The substraction of "+a+" and "+b+" is "+(a-b))
document.write("The multiplication of "+a+" and "+b+" is "+(a*b))
document.write("The division of "+a+" and "+b+" is "+(a/b))
document.write("The remainder of "+a+" and "+b+" is "+(a%b))


// 3 //
var a
document.write("value after declaration "+a)
a = 5
document.write("value after initialization "+a)
a++
document.write("value after increment "+a)
a = a+7

document.write("value after addition is "+a)
a--
document.write("value after decrement "+a)
a = a%3
document.write("The reminder is "+a)
// 4 //
ticket_price = 600
document.write("The cost of 5 tickets is "+ticket_price*5)
// 5 //

var table = 4
document.write("Table of "+table)
document.write("<br>")
for (i = 1; i<=10;i++){
	num = i * table
	document.write(i+"x"+4+"="+num)
	document.write("<br>")
}
//6//
var temp= 25
var temp2 = 70
farh_temp = (temp*9/5)+32
calc_temp = (temp2-32)*5/9
document.write(temp+"<sup>0</sup>C is "+farh_temp+"F<sup>0</sup><br>")
document.write(farh_temp+"<sup>0</sup>F is "+calc_temp+"C<sup>0</sup>")
//7//
document.write("<h1>Shopping Cart</h1>")
var price_item1 = 650
var qnty1 = 3
var price_item2 = 100
var qnty2 = 7
var shipping_charges = 100 
document.write("Price of item 1 "+price_item1+"<br>")
document.write("Quantity of item 1 "+qnty1+"<br>")
document.write("Price of item 2 "+price_item2+"<br>")
document.write("Quantity of item 2 "+qnty2+"<br>")
document.write("Shipping Charges "+shipping_charges+"<br>")
cost = (price_item1*qnty1)+(price_item2*qnty2)+shipping_charges 
document.write("Total cost of your order "+cost)
// 8
document.write("<h1>Marks Sheet</h1>")
var total_marks = 980
var obtained_marks = 804
document.write("Percentage: "+(obtained_marks*100)/total_marks+"%")
//9
document.write("<h1>Currency in PKR</h1>")
var dollar = 10
var saudi_riyal = 25
var dollar_exc = 104.80
var saudi_riyal_exc = 28
total_currency = (dollar*dollar_exc)+(saudi_riyal*saudi_riyal_exc)
document.write("Total Currency in PKR: "+total_currency )
//10
var num = 2
num = num+5*10/2
alert(num)

//11
document.write("<h1>Age Calculator</h1>")
var current_year= 2020
var birth_year= 1989
document.write("Current Year: "+current_year)
document.write("<br>Birth Year: "+birth_year)
document.write("<br>Your age is: "+(current_year-birth_year))
//12
document.write("<h1>The Geometrizer</h1>")
var radius = 20
var pi = 3.142
var birth_year= 1989
document.write("Radius of circle: "+radius)
document.write("<br>The Circumference is: "+2*pi*radius)
document.write("<br>The area is: "+(pi*radius*radius))
//13
document.write("<h1>The Lifetime Supply Calculator</h1>")
var fav_snack = "Choclate Chip"
var current_age = 15
var est_age = 65
var snack_per_day = 3
rem_year = est_age -current_age
max_snacks = rem_year * snack_per_day
document.write("Favourite Snack: "+ fav_snack)
document.write("<br>Current Age: "+ current_age)
document.write("<br>You will need "+max_snacks+" "+fav_snack+" to last you untill the ripe old age of "+est_age)

//#### Chapter 6-9 #####//z
// 1 //
var a = prompt("Please enter any number: ")
var current_age = 15
var est_age = 65
var snack_per_day = 3
rem_year = est_age -current_age
max_snacks = rem_year * snack_per_day
document.write("Result:<br>")
document.write("The value of a is: "+ a)
document.write("<br>--------------------------<br>")
document.write("<br>The value of ++a is: "+ ++a)
document.write("<br>Now the value of a is: "+ a)
document.write("<br><br>")
document.write("<br>The value of a++ is: "+ a++)
document.write("<br>Now the value of a is: "+ a)
document.write("<br><br>")
document.write("The value of --a is: "+ --a)
document.write("<br>Now the value of a is: "+ a)
document.write("<br><br>")
document.write("<br>The value of a-- is: "+ a--)
document.write("<br>Now the value of a is: "+ a)


// 2 //
var a = 2,b=1 

var result = --a - --b + ++b + b--;
document.write("a is "+a)
document.write("<br>b is "+b)
document.write("<br>result is "+result)

// 3 //
var a = prompt("Please enter your name: ")
document.write("Welcome! "+a)
// 4 //
var table = prompt("Please enter table number: ")
if (table == ""){
    table = 5
}
for (i = 1; i<=10;i++){
	num = i * table
	document.write(i+"x"+table+"="+num)
	document.write("<br>")
}
// 5 //

var subject1 = prompt("Please enter Subject 1:")
var subject2 = prompt("Please enter Subject 2:")
var subject3 = prompt("Please enter Subject 3:")
var subj1_obt_marks = prompt("Please enter Subject 1 obtained marks: ")
var subj2_obt_marks = prompt("Please enter Subject 2 obtained marks: ")
var subj3_obt_marks = prompt("Please enter Subject 3 obtained marks: ")
total_obt = (subj1_obt_marks*1+subj2_obt_marks*1+subj3_obt_marks*1)
var max_marks = 100
document.write("<b>Subject Total Marks Obtained Marks Percentage</b><br>")
document.write(subject1+" &emsp;&emsp;"+max_marks+" &emsp;&emsp;"+subj1_obt_marks+" &emsp;&emsp;"+(subj1_obt_marks*100/max_marks+"%"))
document.write("<br>"+subject2+" &emsp;&emsp;"+max_marks+" &emsp;&emsp;"+subj2_obt_marks+" &emsp;&emsp;"+(subj2_obt_marks*100/max_marks+"%"))
document.write("<br>"+subject3+" &emsp;&emsp;"+max_marks+" &emsp;&emsp;"+subj3_obt_marks+" &emsp;&emsp;"+(subj3_obt_marks*100/max_marks+"%"))


document.write("<br>&emsp;&emsp;&emsp;&emsp;<b>"+300+" &emsp;&emsp;"+total_obt+" &emsp;&emsp;"+" &emsp;&emsp;"+(total_obt*100/300)+"%</b>")




//#### Chapter 9-11 #####//
// 1 //
var city = prompt("Please enter your city")
city = city.toLowerCase()
if (city == "karachi"){
	document.write("Welcome to city of Lights")
}
else{
	document.write("Welcome to city "+city)
}

// 2 //
var gender= prompt("Please enter your gender")
gender = gender.toLowerCase()
if (gender == "male"){
	document.write("Welcome Sir!")
}
else if(gender == "female"){
	document.write("Welcome Ma'm!")
}


// 3 //
var color = prompt("Please enter signal color")
color = color.toLowerCase()
if (color == "red"){
	document.write("Must Stop")
}
else if(color == "yellow"){
	document.write("Ready to Move")
}
else if(color == "green"){
	document.write("Move Now")
}


// 4 //
var a = prompt("Please enter remaining fuel")
if (a <0.25 ){
	document.write("Please refill the fuel in your car")
}

// 5 //
//a. 
var a = 4; if (++a === 5){ alert("given condition for variable a is true"); }
//b. 
var b = 82; if (b++ === 83){ alert("given condition for variable b is true"); }
//c. 
var c = 12; if (c++ === 13){ alert("condition 1 is true"); } if (c === 13){ alert("condition 2 is true"); } if (++c < 14){ alert("condition 3 is true");} if(c === 14){ alert("condition 4 is true"); }
//d
//d. 
var materialCost = 20000; var laborCost = 2000; var totalCost = materialCost + laborCost; if (totalCost === laborCost + materialCost){ alert("The cost equals"); }
//e. 
if (true){ alert("True"); } if (false){ alert("False"); }

//f
if("car" < "cat"){ alert("car is smaller than cat"); }

//6

var grade,remakrs;
var subject1 = prompt("Please enter Subject 1:")
var subject2 = prompt("Please enter Subject 2:")
var subject3 = prompt("Please enter Subject 3:")
var subj1_obt_marks = prompt("Please enter Subject 1 obtained marks: ")
var subj2_obt_marks = prompt("Please enter Subject 2 obtained marks: ")
var subj3_obt_marks = prompt("Please enter Subject 3 obtained marks: ")
total_obt = (subj1_obt_marks*1+subj2_obt_marks*1+subj3_obt_marks*1)
var max_marks = 100
var total_per = (total_obt*100/300)
document.write("<h1>Marks Sheet</h1>")
document.write("Total Marks: 300")
document.write("<br>Obtained Marks: "+total_obt)
document.write("<br> Percentage: "+total_per+"%")

if (total_per >=80){
	grade = "A-1"
	remarks = "Excellent"	
}
else if (total_per >=70 ){
	grade = "A"
	remarks = "Good"	
}
else if (total_per >=60 ){
	grade = "B"
	remarks = "You need to improve"	
}
if (total_per <60 ){
	grade = "Fail"
	remarks = "Sorry"	
}
document.write("<br>Grade: "+grade)
document.write("<br>Remarks: "+remarks)
//7
var secret_number = 5

num = prompt("Please guess number")

if (num == secret_number){

	alert("Bingo! Correct answer")
}
else{
alert("Close enough to the correct answer”.")
}
//8
num = prompt("Please enter number")

if (num%3 == 0){

	alert("Divisiable by 3")
}
else{
alert("Not divisable by 3")
}
//9
num = prompt("Please enter number")

if (num%2 == 0){

	alert("Even")
}
else{
alert("Odd")
}
//10
num = prompt("Please enter temparature")

if (num>40){
	alert("It is too hot outside.")
}
else if (num>30){
	alert("The Weather today is Normal.")
}
else if (num>20){
	alert("Today’s Weather is cool.")
}

else if (num>10){
	alert("OMG! Today’s weather is so Cool.")
}

//11
a = prompt("Please enter first number")
b = prompt("Please enter second number")
document.write("The sum of "+a+" and "+b+" is "+(a*1+b*1))
document.write("<br>The substraction of "+a+" and "+b+" is ",(a-b))
document.write("<br>The multiplication of "+a+" and "+b+" is "+(a*b))
document.write("<br>The division of "+a+" and "+b+" is "+(a/b))
document.write("<br>The remainder of "+a+" and "+b+" is "+(a%b))


//#### Chapter 12-13 #####//
// 1 //
a = prompt("Please enter any character")

if(a.charCodeAt(0)>=65 & a.charCodeAt(0)<=90){
	document.write("Uppercase alphabet")
}
else if(a.charCodeAt(0)>=97 & a.charCodeAt(0)<=122){
	document.write("Lowercase alphabet")
}

else if(a.charCodeAt(0)>=48 & a.charCodeAt(0)<=57){
	document.write("Number")
}
// 2 //

a = prompt("Please enter any number")
b = prompt("Please enter any number again")
if(a>b){
	document.write("A is greater")
}
else if(a<b){
	document.write("B is greater")
}

else if(a==b){
	document.write("A and B are equal")
}
 


// 3 //
a = prompt("Please enter any number")

if(a>0){
	document.write("Positive")
}
else if(a<0){
	document.write("Negetive")
}

else if(a==0){
	document.write("Zero")
}
 

// 4 //
var input = prompt("Enter a character:");
if (input == 'a' || input == 'A' || input == 'e' || input == 'E' || input == 'i' || input == 'I' || input == 'o' || input == 'O' || input == 'u' || input == 'U') {
document.write("True");

} else {
	document.write("False");
}
// 5 //

var input = prompt("Enter your password");
var password = "123"

if (input == ""){
	document.write("Please enter your password");
}
else if(input == password){
document.write("Correct! The password you entered matches the original password")

}
else { 
document.write("Incorrect password");

}

//6
var greeting; 
var hour = 13; 
if (hour < 18) { 
	greeting = "Good day";
} 
else greeting = "Good evening";

alert(greeting) 
//7
var input = prompt("Enter your time");
if(input>12){
a = "pm"
}
else a = "am"
if(input>12){
input = input-12
}
document.write(input,a);

//#### Chapter 14-16 #####//
// 1 //
a = []
//2
a = new Array()
//3
a = ["asad","raza"]
//4
a = [1,2,3]
//5
a = [true,false]
//6
a = ["asad",12,"raza",23]
//7
a = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"]
for (i in a){
document.write(a[i])
document.write("<br>")
}
//8
a = ["Michael","John","Tony"]
b = [320,230,480]

total_marks = 500
for (i in a){
per = (b[i]*100)/total_marks
document.write("Score of "+a[i]+" is "+" "+b[i]+". Percentage"+per+"%")
document.write("<br>")
}

// 9 //
function show_colors(){
	for (i in colors){
		index  = (i*1+1)
		document.write(index+"-"+colors[i]+"<br>")
	}
}
	colors = ["red","green","blue"]
	show_colors(colors)
	input = prompt("What select color number you want to add in begining")
	aa = colors[0]
	colors[0]= colors[input-1];
	colors[input-1]= aa
	document.write("<br>updated array <br>--------<br>")
	show_colors(colors)
	input = prompt("What color number you want to add in end")
	colors.push(colors[input-1])
	colors.splice(input-1,1)
	document.write("<br>updated array <br>--------<br>")
	show_colors(colors)
	colors.unshift("Purple","Blue Sky")
	document.write("<br>updated array <br>--------<br>")
	show_colors(colors)
	colors.shift()
	document.write("<br>updated array <br>--------<br>")
	show_colors(colors)
	colors.pop()
	document.write("<br>updated array <br>--------<br>")
	show_colors(colors)
	input = prompt("Please write color name")
position=""
for (pos in colors){
	position = position.concat("\n",pos)
}
pos = prompt("Please write color position"+position)
aa = colors[pos]
colors.splice(pos,1,input)
colors.push(aa)
position=""
for (pos in colors){
	position = position.concat("\n",pos)
}
pos = prompt("Please write color position you want to delete"+position)
numbers = prompt("Please write number of colors you want to delete")
colors.splice(pos,numbers)
document.write("<br>updated array <br>--------<br>")
show_colors(colors)
	
// 10 //
std = [320,230,480,120]
document.write("Score of Students: ")
for(i in std){
document.write(std[i]+",")
}
std.sort()
document.write("<br>Ordered Score of Students: ")
for(i in std){
document.write(std[i]+",")
}
// 11 //
cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"]
document.write("Cities List:<br>")
for(i in cities){
	document.write(cities[i],",")
}
document.write("<br>Selected Cities:<br>")
document.write(cities[2]+",")
document.write(cities[3])
// 12 //
var arr = ["This", " is ", " my ", " cat"];
document.write("<h1>Array:</h1><br>")
document.write(arr.join())
document.write("<h1>String:</h1><br>")
document.write(arr.join(" "))
//13
var arr = ["This", " is ", " my ", " cat"];
for (i in arr){
	document.write(arr[i]+" ")
}
//#### Chapter 17-20 #####//
// 1 //
var arr = [[]]
// 2 //
var arr = [[0,1,2,3],[1,0,1,1],[2,1,0,1]]

// 3 //
for(i=i;i<=10;i++){
	document.write(i+"<br>")
}
// 4 //
var table = prompt("Please enter a number to show its multiplication table")
var table_len = prompt("Enter length multiplication table")
document.write("Multiplication table of "+table+"<br>")
document.write("Length "+table_len)
for (i = 1; i<=table_len;i++){
	num = i * table
	document.write(i+"x"+table+"="+num)
	document.write("<br>")
}

// 5 //
fruits = ["apple","banana","mango","orange","strawberry"]
for(i in fruits){
	document.write(fruits[i]+"<br>")
}
for(i in fruits){
	document.write("Element at index "+i+" is "+fruits[i]+"<br>")
}

//6
document.write("<b>Counting</b><br>")
for(i=1;i<=15;i++){
	document.write(i+",")
}

document.write("<br><b>Reverse counting:</b><br>")
for(i=10;i>=1;i--){
	document.write(i+",")
}

document.write("<br><b>Even:</b><br>")
for(i=0;i<=20;i++){
	if(i%2==0)
		document.write(i+",")
}


document.write("<br><b>Odd:</b><br>")
for(i=0;i<=20;i++){
	if(i%2!=0)
		document.write(i+",")
}

document.write("<br><b>Series:</b><br>")
for(i=2;i<=20;i++){
	if(i%2==0)
		document.write(i+"k,")
}

//7

var A = ["cake","applie pie","cookie","chips","patties"]
input = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'm?")
a = A.indexOf(input)
if(a>=0){
document.write(input+" is <b>available</b> at index "+a+" in our bakery")
}
else{
document.write("We are sorry. "+input+" is <b>not available</b> in our bakery")
}

//8
var A = [24,53,78,91,12]
document.write("Array items: ")
for(i in A){
	document.write(A[i]+",")
}
A.sort()
document.write("<br>The largest number is ",A.pop())

//9
var A = [24,53,78,91,12]
document.write("Array items: ")
for(i in A){
	document.write(A[i]+",")
}
A.sort()
document.write("<br>The smallest number is ",A[0])
// 10
for(i = 5;i<=100;i=i+5)
{
document.write(i+",")
}