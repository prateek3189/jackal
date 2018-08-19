// This wont allow any of the linting errors
/*
"use strict";
x = 10 // This is not allowed in strict mode
*/

// -------------------------- Practicing The Code ----------------------//
// Here is a normal expression
/*
var a = 2;
console.log(a);
*/

// -------------------------- Input and Output ----------------------//
/*
// Though this is not part of Javascript it is browser's
alert("Hello World");

// or we can use console.log();
console.log("Hello World");

// Prompt Statements
var age = prompt("What is your age ?");
console.log(age);
*/

// -------------------------- Operators ----------------------//
/*
var a, b;
a = b + 2; // Addition
a = b - 2; // Subtraction
a = b * 2; // Multiply
a = b / 2; // Division
a = b % 2; // Modulus

// Increment Operator
a = ++b // if b = 5 after a = 6, b = 6
a = b++	// if b = 5 after a = 5, b = 6

// Decrement Operator
a = --b // if b = 5 after a = 4, b = 4
a = b-- // if b = 5 after a = 5, b = 4

// You can also write
a = a + 2;
// or
a += 2; // This is easy to read and understand
*/

// -------------------------- Values and Types ----------------------//
/*
a = 43; // Number
console.log(a);

a = "43" // String
console.log(a);

a[0] // "4" in this case string behave as array to get values

// To convert type of variable from any to number
a = Number(a)
console.log(a);

// To convert type of variable from any to string
a = String(a)
console.log(a);

// Note: Here we do not have type for variable, but for value
a = 21;
a = a + "";
console.log(a); // It will behave like a string
*/

// -------------------------- Code Comments ----------------------//

// This is a single line comment

/*
    This is a multi line comment
    You can comment out multiple lines
    You should always provide a code comment to understandyour code by other developer
    also provide appropriate comments not the story of Harry Porter
*/

// -------------------------- Variables and Blocks ----------------------//
/*
x = 2; // This is not a formally decleared variable

var y = 34; // So declear it properly

let x = 1; // in ES6
const z = 1; // in ES6

function a () {
    // or a function
}

// Blocks
// It is anythig inside the { } like if, for, while, function or switch
// Let say
if(true) {
    // This is a block
}
*/

// -------------------------- Conditional Statement ----------------------//
/*
var a = 10;

if(a > 5) { // if true
    a = a * 2;
}

if(a) { // if its a falsy value then it wont execute
    a = a * 2;
}
*/

/*
-------- FALSY VALUES --------
0
-0
NaN
""
false
null
undefined

anything come next to void behave as undefined
void 0 // undefined
void(0) // undefined

Apart from this other values behave as true
*/

// -------------------------- Loops ----------------------//
/*
// Conditional Loop
while(a > 10) {
    // If the condition is true keep doing it or if it is false stop execution
    // This will check the condition first and then execute
    a = 5;
}

for(var i = 0; i < 10; i++) {
    console.log(i);
    // Here is three statements inside for loop
    // i = 0 => To initialize the loop - Initialization Clause
    // i < 10 => To check the condition for continuous execution - conditional clause
    // i ++ => Update statement. To update the operation - Update Clause
}

for( ; ; ) {
    // This loop will run for infinite times. Not because the condition is always true. but because it is never failing
}

for( ; true ; ) {
    // This loop will run for infinite times. Because the condition is always true. not because it is never failing
}

// To stop a loop
var a = 5;
while(true) {
    if(a <= 10) {
        break;
    }
}
*/

// -------------------------- Functions ----------------------//
/*
// Its block which not runs in a Loop
// but its a block which you can re-use as many times you need

function doSomething(arg1, arg2, arg3) {
    // Your operation
}
// Let's say I have to design some logic which can change my innerHTML of Board by the string I am providing

// The container where we need to change the Data
var codePane = document.getElementById('codePane');

// Setting some data to this container
codePane.innerHTML = "Some Data";

// Now let sat if the data is dynamic and it is changing on each event. In that case I hve copy this code and write it to each click. or better I can keep it in a function block and call that as much as times I want to

function showData(data) {
    var codePane = document.getElementById('codePane');
    codePane.innerHTML = data;
}
showData('Some Data');

// What if I am passing function as an argument to another function
function king() {
    return 1;
}

function queen(king) {
    var newValue;
    newValue = 10 + king; // 10function king() { return 1;}
    // newValue = 10 + king(); // Throw error
    return newValue;
}

queen(king);
queen(king()); // This will return the same as second statement => 11
*/

// -------------------------- Scope ----------------------//
/*
// Let's say I have a function as below
function myFunction(h) {
    // So when we are calling this function the value of b will be passed as argument. For now its 10
    var k = 22;
    g = g + h;
    g = g * h;
    return g / 2;
}

// So if I try to get the value of `h` it will be undefined or will throw error
console.log(h);

// Here is the scope of `h` is limited to that function block

// or let say we have one more variable inside the function `k` that will also throw error
console.log(k);

// Note: You can always access the variable outside the function, inside. but you can not use inside variable, outside
*/
