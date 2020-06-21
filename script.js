// Chapter 21-25 Assignment 1

/* let firstName = prompt("Input first name");
let lastName = prompt("Input last name");
let fullName = firstName+lastName;
alert("Your full name is "+fullName); */

// Chapter 21-25 Assignment 2

/* let input=prompt("Please input favorite mobile model");
alert("Phone model text length is "+input.length); */

// Chapter 21-25 Assignment 3

/* let var1="Pakistani";
document.write(`
<h2>String is ${var1}</h2>
<h2>Index of 'n' is ${var1.indexOf("n")}</h2>
`); */

// Chapter 21-25 Assignment 4

/* let var1="Hello World";
document.write(`
<h2>String is ${var1}</h2>
<h2>Last Index of 'l' is ${var1.lastIndexOf("l")}</h2>
`); */

// Chapter 21-25 Assignment 5

/* let var1="Pakistani";
document.write(`
<h2>String is ${var1}</h2>
<h2>Character at Index 3 is ${var1[3]}</h2>
`); */

// Chapter 21-25 Assignment 6

/* let firstName = prompt("Input first name");
let lastName = prompt("Input last name");
let fullName="" ;
let re=fullName.concat(firstName,lastName);
alert("Your full name is "+re); */

// Chapter 21-25 Assignment 7

/* let var1="Hyderabad";
document.write(`
<h2>String is ${var1}</h2>
<h2>After replacement: ${var1.replace("Hyder","Islam")}</h2>
`); */

// Chapter 21-25 Assignment 8

/* let var1="Ali and Sami are best friends. They play cricket and football together.";
document.write(`
<h2>String is ${var1}</h2>
<h2>After replacement: ${var1.replace(/and/g,"&")}</h2>
`); */

// Chapter 21-25 Assignment 9

/* let var1="472";
let var2=Number(var1);
document.write(`
Value= ${var1}
Type= ${typeof var1}<br>
Value= ${var2}
Type= ${typeof var2}
`); */

// Chapter 21-25 Assignment 10
/* let input =prompt("Input text");
document.write(`
<h3>Input: ${input}</h3>
<h3>Upper Case: ${input.toUpperCase()}</h3>
`); */

// Chapter 21-25 Assignment 11

/* let var1=prompt("Input something");
let title=var1.replace(/\b[a-z]/g, (x) => x.toUpperCase())
alert(title); */

// Chapter 21-25 Assignment 12
/* let num=35.36;
let con=num.toString();
let re=con.replace('.',"");
document.write(`
<h1>Number: ${num}</h1>
<h1>Result: ${re}</h1>
`); */

// Chapter 21-25 Assignment 13

/* let input=prompt("Input UserName");
let detect = "@ . , !";
let status=true;

for (var i = 0; i < input.length; i++)
{
  if (detect.indexOf(input.charAt(i)) != -1)
  {
     alert ("UserName Incorrect");
status=false;
     break;
  }
}
if(status){
    document.write(`<h1>${input}</h1>`);
} */

// Chapter 21-25 Assignment 14
/* let input=prompt("Input text to search")
let arr=["cake", "apple pie", "cookie", "chips", "patties"];
let find;

for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
    if(arr[index].toUpperCase() == input.toUpperCase())
    {
        find=index;
        break;
    }
    else
    {
        find=-1
    }

}

if(find!=-1){
    alert(input+" found at index "+find);
}
else{alert(input+" not found");} */

// Chapter 21-25 Assignment 15
/* let input=prompt("Input Password");
let find=input.search(/^(?!\d)\w{6,}$/i);
if(find!=-1){
    alert("OK")
}
else{
    alert("Wrong Password");
} */
// Chapter 21-25 Assignment 16
/* let  university = "University of Karachi";
let transform=university.split("");
document.write(`<h3>${transform}</h3>`); */

// Chapter 21-25 Assignment 17
/* let input=prompt("Input a sentence");
let length=input.length
let find=input[length-1];
document.write(`
<h2>Input: ${input}</h2>
<h2>Last Index: ${find}</h2>
`); */
// Chapter 21-25 Assignment 18
/* let sent="The quick brown fox jumps over the lazy dog";
let find="the";
let count=0;
let arr= sent.split(" ");
for(let i=0;i<arr.length;i++){
    if(arr[i].toUpperCase() == find.toUpperCase()){
        count++;
    }
    else{}
}
document.write(`
<h2>Tesxt: ${sent}</h2>
<h2>There are ${count} "${find}" in the sentence</h2>
`); */

// Chapter 26-30 Assignment 1
/* let input=prompt("Input Positive Number");
let check = parseFloat(input);

if(check>>0){
let rounds=Math.round(check);
let ceils=Math.ceil(check);
let floors=Math.floor(check);
document.write(`
<h2>Number: ${check}</h2>
<h2>Rounded: ${rounds}</h2>
<h2>Ceiling: ${ceils}</h2>
<h2>Floor: ${floors}</h2>
`);
}
else{
    alert("Not a positive number");
} */
// Chapter 26-30 Assignment 2
/* let input=prompt("Input Negative Number");
let check = parseFloat(input);

if(check<=0){
let rounds=Math.round(check);
let ceils=Math.ceil(check);
let floors=Math.floor(check);
document.write(`
<h2>Number: ${check}</h2>
<h2>Rounded: ${rounds}</h2>
<h2>Ceiling: ${ceils}</h2>
<h2>Floor: ${floors}</h2>
`);
}
else{
    alert("Not a Negative number");
} */
// Chapter 26-30 Assignment 3
/* let input=prompt("Input Number");
let check = parseFloat(input);
let abs=Math.abs(check);
document.write(`
<h2>Absolute of ${check} is ${abs}</h2>
`); */

// Chapter 26-30 Assignment 4
/*let dice=Math.floor((Math.random() * 6) + 1);
document.write(`<h1>Dice Number= ${dice}</h1>`); */


// Chapter 26-30 Assignment 5
/* let coin=Math.floor((Math.random() * 2) + 1);
if(coin==1){
document.write(`<h1>Coin= Head</h1>`);
}
else{
    document.write(`<h1>Coin= Tails</h1>`);
} */
// Chapter 26-30 Assignment 6
/* let number=Math.floor((Math.random() * 100) + 1);
document.write(`<h1>Random Number= ${number}</h1>`); */

// Chapter 26-30 Assignment 7
/* let input=prompt("Input Weight");
let rep=input.replace(/^[0-9]*\.$/g);
let transform=parseFloat(input);
document.write(`<h2>Weight is: ${transform} Kilograms</h2>`); */

// Chapter 26-30 Assignment 8
/* let value=Math.floor((Math.random() * 10) + 1);
console.log(value);
let input=prompt("Input number between 1-10");
if(input==value){
alert("Wow great! It's a match")
}
else{
    alert("Better luck next time")
} */

// Chapter 31-34 Assignment 1
/* let curr= new Date().toLocaleString();
document.write(`<h1>${curr}</h1>`); */

// Chapter 31-34 Assignment 2
/* let d = new Date();
let arr = ["January","February", "March","April", "May","June","July","August","September","October","November","December"];
let month = arr[d.getMonth()];
document.write(`<h2>Current Month is ${month}</h2>`); */

// Chapter 31-34 Assignment 3
/* let d = new Date();
let arr = ["Sun","Mon", "Tue","Wed", "Thu","Fri","Sat"];
let day = arr[d.getDay()];
alert(`Current day is ${day}`); */


// Chapter 31-34 Assignment 4
/* let d = new Date();
let arr = ["Sun","Mon", "Tue","Wed", "Thu","Fri","Sat"];
let day = arr[d.getDay()];

if(day=="Sun"|| day=="Sat"){
alert(`Today is Funday`);} */

// Chapter 31-34 Assignment 5
/* let epoch=Date.now()/60000;
document.write(`<h2>Time since Epoch in minutes= ${epoch}</h2>`); */

// Chapter 31-34 Assignment 6
/* let time= new Date().toLocaleTimeString();
document.write(time)
if(time.search("AM")!=-1){
    alert("Its AM");
}
else{
    alert("Its PM");
} */
// Chapter 31-34 Assignment 7
/* let laterDate=new Date(new Date().getFullYear(), 11, 31);
document.write(`<h1>${laterDate}</h1>`); */

// Chapter 31-34 Assignment 9
/* let msDiff = new Date().getTime()-new Date("April 27, 2020").getTime();
let daysSinceEid = Math.floor(msDiff / (1000 * 60 * 60 * 24));
document.write(`Days since Eid = ${daysSinceEid}`); */

// Chapter 31-34 Assignment 10
/* let msDiff = new Date().getTime()-new Date("January 01, 2020").getTime();
let Since = Math.floor(msDiff / (1000 ));
document.write(`Seconds since January 1st = ${Since}`); */

// Chapter 31-34 Assignment 13
/* let input=prompt("Input age");
let con=parseInt(input);
let d=new Date().getFullYear()-con;
alert("Birth year is "+d); */

// Chapter 31-34 Assignment 14
/* let name="ABC";
let arr = ["January","February", "March","April", "May","June","July","August","September","October","November","December"];
let month = arr[new Date().getMonth()];
let unit=Math.floor((Math.random() * 200) + 1);
let charges=10;
let amountPayable=unit*charges;
let lateAmount=250;
let grossAmount=amountPayable+lateAmount;

document.write(`
<h1>KESC Bill</h1>
<h3>Customer Name: ${name}</h3>
<h3>Month: ${month}</h3>
<h3>Number of Units: ${unit}</h3>
<h3>Charges per unit: ${charges}</h3>
<br>
<h3>Net Amount Payable: ${amountPayable}</h3>
<h3>Late Payment Surcharge: ${lateAmount}</h3>
<h3>Gross Amount Payable: ${grossAmount}</h3>
`); */

// Chapter 35-38 Assignment 11

/* function dateTime(){
    let curr= new Date().toLocaleString();
document.write(`<h1>${curr}</h1>`);
} */

// Chapter 35-38 Assignment 12
/* function fullName(){
    let first=prompt("Enter First Name");
    let last =prompt("Enter Last Name");
    document.write(first+last);
} */

// Chapter 35-38 Assignment 13
/* function sum(){
    let var1=prompt("Input 1st number");
    let var2=prompt("Input 2nd number");
    alert(Number(var1)+Number(var2));
} */
