//PDF : 01
//QUESTION : 01 
// var fname = prompt("ENTER FIRST NAME : ")
// var lname = prompt("LAST NAME : ")
// alert("HELLO ! "+fname+"    "+lname)

//QUESTION : 02 
// var mobile =prompt("ENTER YOUR FAVOURITE MOBILE PHONE MODEL : ")
// var str = mobile.length
// document.write(string)
// document.write("THE LENGTH OF THE ENTERED STRING IS : "+str)

//QUESTION : 03 
// var string = 'PAKISTANI'
// var index = string.indexOf('N')
// alert('INDEX OF N IN PAKISTANI : '+index)

//QUESTION : 04 
// var string = 'HELLO WORLD'
// var index = string.lastIndexOf("L")
// alert('LAST INDEX OF L IS : '+index)

//QUESTION : 05 
// var string = 'PAKISTANI '
// var chr= string.charAt(3)
// alert(chr)

//QUESTION ; 06 
// var fname = prompt("ENTER FIRST NAME : ")
// var lname = prompt("LAST NAME : ")
// var full = fname.concat(lname)
// alert(full)

//QUESTION : 07 
// var hyder = 'HYDERABAD'
// var islam = hyder.replace('HYDER','ISLAM')
// document.write("CITY : "+hyder.bold())
// document.write("<br>AFTER REPLACEMENT : "+islam.bold())

//QUSTION : 08 
// var message = "Ali and Sami are best friends. They play cricket and football together."
// var replacement = message.replace(/and/g,'&')
// document.write("AND REPLACED WITH & : "+replacement.bold()) 

//QUESTION : 09 
// var str = '123456'
// var num = Number(str)
// alert("converted from string to number : "+num)

//QUESTION : 10
// var ui = prompt("ENTER ANY STRING : ")
// var cap = ui.toUpperCase(ui)
// alert(cap.bold())

//QUESTION : 12
// var num = 35.67
// var string= num.toString()
// alert(string)

//QUESTION : 13 
// var username = prompt("ENTER YOUR USERNAME : ")
// for(var i = 0 ; i < username.length;i++){
// if(username[i] === "!" || username[i] ==="@" || username[i] === "," || username[i] === "." ){
//     alert("Kindly enter a valid user name that does`nt contain any symbols and characters ")
// }
// }

//QUESTION : 14 
// var a = ["cake","pine apple ","cookie","chips","fires","patties"]
// var search = prompt("searrch from the menu : ")

// for(var i = 0 ;i<=a.length-1;i++){
// if(a[i]===search.toLowerCase()){
//     alert("HURRAYYY, WE HAVE WHAT U NEED AT PLACE "+(i+1))
// }
// if(a[i]!==search.toLowerCase()){
//         alert("SORRY, WE DONT HAVE WHAT U NEED ")
//      }
//  }
 
//QUESTION : 17 
// var ui = prompt("any string : ")
// var lc = ui.charAt(ui.length-1)
// alert(lc)

//QUESTION : 18 
// var ui = ['The', 'quick', 'brown', 'fox', 'jumps', 'over','the','lazy', 'dog']
// var count=0 ;

//     for(var i = 0 ; i <= ui.length-1; i++){
// if(ui[i]==='The' || ui[i]==='the'){
//     count=count+1
// }
// }
// document.write(count+ " TIMES ")

//PDF 2 
//Question : 01
// var pi = parseFloat(prompt("ENTER POSITIVE INTEGER : "))
// document.write("<br>"+pi)
// document.write("<br>NUMBER : "+Number(pi))
// document.write("<br>ROUND OFF : "+Math.round(pi))
// document.write("<br>FLOOR : " +Math.floor(pi))
// document.write("<br>CEIL : "+Math.ceil(pi))

//Question : 02
// var pi = parseFloat(prompt("ENTER NEGATIVE FLOATING POINT : "))
// document.write("<br>"+pi)
// document.write("<br>NUMBER : "+Number(pi))
// document.write("<br>ROUND OFF : "+Math.round(pi))
// document.write("<br>FLOOR : " +Math.floor(pi))
// document.write("<br>CEIL : "+Math.ceil(pi))

//Question : 03
// var pi = +prompt("ENTER NEGATIVE INTEGER :  ")
// document.write("<br>"+Math.abs(pi))

//Question : 04
// var dice = Math.floor(Math.random()*7)
// alert("DICE SHOWS : "+dice)

//Question : 05
// var coin = Math.floor(Math.random()*3)
// if(coin===1){
// alert(coin+" COIN VALUE : TAILS ")}

// if(coin===2){
//     alert(coin+" COIN VALUE : HEADS ")}
    

//Question : 06
// var R = Math.floor(Math.random()*100)
// alert("RANDOM NUMBER BETWEEN 1 - 100 : "+R)

//Question : 07
// var weight = prompt("Enter you weight in kilograms : ")
// document.write("The weight of the user is "+parseInt(weight)+" Kilograms")

//Question : 08
// var secret = Math.floor(Math.random()*11)
// var ui = +prompt( "enter a number between 0 - 10 ")
// if(ui===secret){
//     alert("CONRATULATIONS , U WIN ")

// }
// if(ui!=secret){
//     alert("OOPS! TRY AGAIN ")
// }

//PDF 3 
//Question : 01
// var date = new Date();
// alert(date)

//Question : 02
// var months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
// var date = new Date();
// var themonth = date.getMonth();
// var currmonth = months[themonth]
// alert("Month : "+currmonth)

//Question : 03
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var date = new Date();
// var theDay = date.getDay();
// var nameOfToday = dayNames[theDay]
// alert("Today is : "+nameOfToday)

//Question : 04
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var date = new Date();
// var theDay = date.getDay();
// var nameOfToday = dayNames[theDay]
// if(nameOfToday==="Sun"||nameOfToday==="Sat"){
//  alert("IT`S A FUN DAYYYY ")
// }

//QUESTION : 05 
// var date = new Date();
// var noofday = date.getDate()
// if(noofday>0 && noofday<=15){
//     alert("First fifteen days of the month")
// }
// if(noofday>15){
//     alert("Last days of the month")
// }

//QUESTION : 06
// var date = new Date()
// document.write("<br>CURRENT DATE : "+date)
// var ms = date.getMilliseconds()
// document.write("<br>ELAPSED MILISECONDS : "+ms)
// var m = date.getMinutes()
// document.write("<br>ELAPSED MINUTES : "+m)

//QUESTION : 07
// var date = new Date();
// var time = date.getTime()
// alert(time)

//PDF 4 
//QUESTION : 01
// var date = new Date()
// alert(date)

//QUESTION : 02 
// var name = prompt("ENTER YOUR NAME : ")
// function greetuser(name){
// alert("HELLO , "+name)
// }
// greetuser(name)

//Question : 03
 
// function add(num1,num2){
//     var addition = num1+num2
//     return addition
//     alert(addition) 
// }
// add(+prompt("enter number : "),+prompt("enter number : "))

//QUESTION : 04 






























