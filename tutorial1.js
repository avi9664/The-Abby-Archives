// JavaScript File
//single line comment
/*multi-line mmmmmmmmmmmmeeeeeeeeeeeeeeeeeeeeeeeeeeeeeennnnnnnnnnnnnnnnnnnnnnn*/
var derpy = 9; //creates new variable with a numerical value
var meep = 1000;
var total = derpy + meep; 
console.log("hi"); //says whatever is in the parentheses in the console
console.log(total); //"" = string, without "" = variables 
//-------------------------------------------------------------------
var firstName = "abby";
var lastName = " w";
var fullName = firstName + lastName;
console.log(fullName);
//-------------------------------------------------------------------
var one = "1";
var two = "2";

var otherTotal = one + two; //one and two are string variables, so you get 12 instead of 3
console.log(otherTotal);
//-------------------------------------------------------------------
var array = [1, 2, 3, "meep"]; //a set of values
console.log(array);
array.push(4); // array.push adds something to an array
array.push(5);
array.push(6);
console.log(array);
//--------------------------------------------------------------------
function greeting() { //makes a function
    console.log("h0i!!");
    console.log("Greetings.");
    console.log("How are you?");
    console.log("I hope you are doing well.");
}

greeting(); //note the parentheses 
//---------------------------------------------------------------------
function greet(name) {
    console.log("Hello, " + name + "."); //adds a variable in between strings
}

greet("Abby"); //gives name a value, this case a string value
greet("Lord Buckethead");
//---------------------------------------------------------------------
for (var i = 0; i < 10; i++) { /*sets variable i to 0, then makes the loop 
happen while i is less than a number and i is increasing.
It's basically a repeat for i times function.*/
    console.log(i);
}
//----------------------------------------------------------------------
var array2 = ["a", "b", "c"]; //array[0] is "a"

for (var i=0; i <array2.length; i++){
    console.log(array2[i]);
    alert("hello world");
}