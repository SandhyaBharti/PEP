const student = {
    fullName: "Sandhya Bharti",
    age: 23,
    grade:"A",
    CGPA: 8.2,
    isPass: true,
};
console.log(student); 
console.log(student.age); 
console.log(student["age"]);

// update the value 
student["age"] = student["age"] + 1;

// 1. Create a const object called "product" to store information shown in the picture(a product on flipkart).
const product = {
    pdtName : "Ball Pen",
    rating : 4.5,
    offer : 5,
    price : 280,
    isDeal : true,
};
console.log(product);

// 2. create a const object called "profile" to store information shown in the picture(instgram profile).
const profile = {
    userName: "Sandhya Bharti",
    posts: 195,
    followers: 569,
    following: 4,
    id: "sandhyabharti",
    isFollow: false,
};
console.log(profile);

// 26th jan 2026

// operators in js

// Arithmetic operators
let a = 10;
let b = 5;
console.log("a + b =", a + b); // Addition
console.log("a - b =", a - b); // Subtraction
console.log("a * b =", a * b); // Multiplication
console.log("a / b =", a / b); // Division
console.log("a % b =", a % b); // Modulus   
console.log("a ** b =", a ** b); // Exponentiation

// Assignment operators 
let c = 20;
console.log("c =", c); // Assignment
c += 5; // c = c + 5
console.log("c after += 5:", c);
c -= 3; // c = c - 3
console.log("c after -= 3:", c);
c *= 2; // c = c * 2
console.log("c after *= 2:", c);
c /= 4; // c = c / 4
console.log("c after /= 4:", c);
c %= 3; // c = c % 3
console.log("c after %= 3:", c);    
c **= 2; // c = c ** 2
console.log("c after **= 2:", c);   
// Comparison operators
let x = 15;
let y = 10;
console.log("x == y:", x == y); // Equal to
console.log("x != y:", x != y); // Not equal to
console.log("x === y:", x === y); // Strict equal to
console.log("x !== y:", x !== y); // Strict not equal to
console.log("x > y:", x > y); // Greater than
console.log("x < y:", x < y); // Less than
console.log("x >= y:", x >= y); // Greater than or equal to
console.log("x <= y:", x <= y); // Less than or equal to    
// Logical operators
let p = true;
let q = false;
console.log("p && q:", p && q); // Logical AND
console.log("p || q:", p || q); // Logical OR
console.log("!p:", !p); // Logical NOT
console.log("!q:", !q); // Logical NOT
// Increment and Decrement operators
let m = 7;
console.log("m before increment:", m);
m++;    
console.log("m after increment:", m);
m--;    
console.log("m after decrement:", m);   
// Ternary operator
let age = 18;
let eligibility = (age >= 18) ? "Eligible to vote" : "Not eligible to vote";
console.log("Voting eligibility:", eligibility);
// Typeof operator
let value = 42;
console.log("Type of value:", typeof value);
let text = "Hello, World!";
console.log("Type of text:", typeof text);
let isAvailable = true;
console.log("Type of isAvailable:", typeof isAvailable);
// Operator precedence
let result = 10 + 5 * 2; // Multiplication has higher precedence than addition
console.log("Result of 10 + 5 * 2:", result);
result = (10 + 5) * 2; // Parentheses change the precedence
console.log("Result of (10 + 5) * 2:", result);
// End of operators in js

//conditional statements: to implement some condition in the code 
let number = 10;
if (number > 0) {
    console.log(number + " is a positive number.");
} else if (number < 0) {
    console.log(number + " is a negative number.");
} else {
    console.log("The number is zero.");
}   

let marks = 85;
if (marks >= 90) {
    console.log("Grade: A");
} 
else if (marks >= 80) {
    console.log("Grade: B");
}   
else if (marks >= 70) {
    console.log("Grade: C");
}
else if (marks >= 60) {
    console.log("Grade: D");
}
else {
    console.log("Grade: F");
}

let mode = dark;
let color;
if(mode === "dark") {
    color = "black";
    console.log("Dark mode is enabled.");
}
else if(mode === "light") {
    color = "white";
    console.log("Light mode is enabled.");
}
else {
    console.log("system default color.");
}

if(mode === "dark") console.log("Dark mode")
else console.log("Light mode");


number = 3;
if(number % 2 === 0) {
    console.log(number + " is an even number.")
}else {
    console.log(number + " is an odd number.")
}

//swithch statement
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday"); 
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

// 1. Get user to input a number using prompt("Enter a number:"). Check if the number is a multiple of 5 or not.
let userInput = prompt("Enter a number:");
if(userInput % 5 === 0) {
    console.log(userInput + " is a multiple of 5.");
} else {
    console.log(userInput + " is not a multiple of 5.");
}

//2. Write a code which can give grades to students according to their scores:
//90-100 -> A, 70-89 -> B, 60-69 -> C, 50-59 -> D, below 50 -> F
let score = prompt("Enter your score:");
if(score > 90 && score <= 100) {
    console.log("Grade: A");
}
else if(score >= 70 && score <= 89) {
    console.log("Grade: B");
}
else if(score >= 60 && score <= 69) {
    console.log("Grade: C");
}
else if(score >= 50 && score <= 59) {
    console.log("Grade: D");
}
else {
    console.log("Grade: F");
}


// 27th jan 2026
// loops in js => used to repeat a block of code multiple times(again and again) until a certain condition is met
// for loop => print 1 to 5
console.log("For loop:");
for (let i = 1; i <= 5; i++) {
    console.log("Iteration " + i);
}
console.log("loop ended.");

// calculate sum of 1 to 5
let sum = 0;
for(let i = 1; i <= 5; i++) {
    sum = sum + i;  
}
console.log("sum of 1 to 5 is:" + sum);

//infinte loop: A loop that never ends 
// for(;;) {
//     console.log("This loop will run forever.");
// }


// while loop
console.log("While loop:");
let j = 1;
while (j <= 5) {
    console.log("Iteration " + j);
    j++;
}
// do...while loop
console.log("Do...While loop:");
let k = 1;
do {
    console.log("Iteration " + k);
    k++;
}
while (k <= 5);

//for-of loop : helps to use the loop in strings and arrays
// for(let value of strVar) {
// do some work 
// }
console.log("For-of loop:");
let size = 0;
let strVar = "Hello Sandhya";
for(let i of strVar) {
    console.log(i);
    size++;
}; 
console.log("size of string is:" + size);

//for-in loop : helps to use the loop in objects
console.log("For-in loop:");
const person = {    
    name: "Sandhya",
    age: 23,
    city: "Patna"
};
for (let key in person) {
    console.log("key = ", key, "value" + person[key]);
}
// end of loops in js
// 1. Print all even numbers from 0 to 100.
let evenNumber = 0;
console.log("Even numbers from 0 to 100:");
for(let i = 0; i <= 100; i++) {
    if(i % 2 === 0) {
        console.log("Even no.:" + i);
    }
}

// 2. Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.
let gameNumber = 7; // random game number
let userGuess = prompt("Guess the game number (between 1 and 10):");
console.log("User guessed: " + userGuess);
while(parseInt(userGuess) !== gameNumber) {
    userGuess = prompt("Wrong guess! Try again:");
    console.log("User guessed: " + userGuess);
}
console.log("Congratulations! You guessed the correct number: " + gameNumber);

//Strings: is a sequence of characters used to represent text
let message = "Hello, Sandhya!";
let message2 = 'Welcome to JavaScript programming.';
console.log("Original message:", message);
console.log("Length of message:", message.length); // length of string
//string methods=> built-in functions to manipulate strings
// convert to uppercase
let newMessage = message.toUpperCase();
console.log("New Message:", newMessage);
// convert to lowercase
let lowerMessage = message.toLowerCase();
console.log("Lowercase Message:", lowerMessage);
//remove white spaces from both ends
let spacedMessage = "   Hello, Sandhya!   ";
console.log("Spaced Message:", spacedMessage);
console.log("Trimmed Message:", spacedMessage.trim()); // remove white spaces

console.log("Character at index 7:", message.charAt(7)); // character at specific index
console.log("Index of 'Sandhya':", message.indexOf("Sandhya")); // index of substring
console.log("Substring (7, 14):", message.substring(7, 14)); // extract substring
console.log("Replace 'Sandhya' with 'World':", message.replace("Sandhya", "World")); // replace substring
console.log("Split message by comma:", message.split(",")); // split string into array

console.log(str.slice(0, 5)); // slice method (start, end), end is excluded 

let concatMessages = message.concat(" ", message2);    // another method for concatination=>(message + message2)
console.log("Concatenated Message:", concatMessages); // concatenate strings

console.log(str.replace("JavaScript", "JS")); // replace method (old substring, new substring)

// 1. Prompt the user to enter their full name.
//Generate a username for them on input.
//Start username eith @, follwed by their full name and ending with thhe fullname length.
//eg: user name = "Sandhya Bharti", username should be "@Sandhya Bharti13"
let userFullName = prompt("Enter your fullname without spaces:");
console.log(userFullName);
let userName = "@" + userFullName + userFullName.length;
console.log("Generated username:", userName);

// Template literals => A way to have embedded expressions in strings.
let name = "Sandhya";
let greeting = `Hello, my name is ${name}. Welcome to JavaScript programming!`;
console.log(greeting);

let obj = {
    item: "book",
    price: 15,
};
let descritption = `The item is a ${obj.item} and its cost is ${obj.price} rupees.`
console.log(descritption);

//string interpolation => To create strings by doing substitution of placeholders with actual values.
// `string text ${expression} string text`
//escape characters in strings => To include special characters in strings that would otherwise be difficult to represent.
let escapeString = "He said, \"JavaScript is awesome!\"\nLet's learn it together.\tEnjoy coding!";
console.log(escapeString);


//Arrays: is a data structure that can hold multiple values at a time. array is mutable(can be changed).
let fruits = ["Apple", "Banana", "Orange", "Mango"];
console.log("Fruits array:", fruits);
console.log("Fruits array:", fruits.length); // length of array
console.log("First fruit:", fruits[0]);

let marksArray = [85, 90, 78, 92, 88];
let totalMarks = 0;
for(let i = 0; i < marksArray.length; i++) {
    totalMarks += marksArray[i];
}
console.log("Total marks:", totalMarks);

let heros = ["Ironman", "Spiderman", "Thor", "Hulk"];
for(let idx = 0; i < heros.length; i++) {
    console.log(heros[i]);
}
//for-fo loop
for(let hero of heros) {
    console.log(hero);
}

let cities = ["mumbai", "delhi", "bangalore", "chennai"];
for(let city of cities) {
    console.log(city);
    console.log(city.toUpperCase());
}

// 1. For a given array with marks of students->[85,97,44,37,76,60].Find average marks of the entire class.
let studentMarks = [85, 97, 44, 37, 76, 60];
let averageMarks = 0;
let sumMarks = 0;
for(let marks of studentMarks) {
    sumMarks = sumMarks + marks;
}
averageMarks = sumMarks / studentMarks.length;
console.log(`Average marks of the class: ${averageMarks}`);

// 2. For a given array with prices of 5 items -> [250, 645, 300, 900, 50].
// All items have an offer of 10% OFF on them. 
// Change the array to store final price after applying offer.
let itemPrices = [250, 645, 300, 900, 50];
let i = 0;
for(let price of itemPrices) {
    let offer = price / 10;
    itemPrices[i] = itemPrices[i] - offer;
    console.log("Final price after 10% OFF:", itemPrices[i]);
    i++;
}
//using for loop
for(let i = 0; i < itemPrices.length; i++) {
    let offer = itemPrices[i] / 10;
    itemPrices[i] = itemPrices[i] - offer;
    console.log("Final price after 10% OFF:", itemPrices[i]);
}

//array methods => built-in functions to manipulate arrays
fruits.push("Grapes"); // add element at the end
console.log("Fruits after push:", fruits);
fruits.pop(); // remove last element
console.log("Fruits after pop:", fruits);
fruits.shift(); // remove first element work as pop
console.log("Fruits after shift:", fruits);
fruits.unshift("Pineapple"); // add element at the beginning work as push
console.log("Fruits after unshift:", fruits);
let citrusFruits = fruits.slice(1, 3); // extract sub-array
console.log("Citrus fruits (slice):", citrusFruits);
let index = fruits.indexOf("Orange"); // find index of element
console.log("Index of Orange:", index);
fruits.splice(2, 1, "Kiwi"); // remove and add elements
console.log("Fruits after splice:", fruits);
fruits.slice(1, 4); // extract sub-array / sometimes we use to copy our OG array
console.log("Fruits after slice(1,4):", fruits);
let joinedFruits = fruits.join(", "); // join array elements into string
console.log("Joined fruits:", joinedFruits);
fruits.sort(); // sort array
console.log("Sorted fruits:", fruits);
fruits.reverse(); // reverse array
console.log("Reversed fruits:", fruits);

// 1. Create an array to store companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix".
// a. remove the first company from the array, b. remove uber & add Ola in its place
// c. add amazon at the end 
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// a. remove the first company from the array
companies.shift(); // remove first company
console.log(`Companies after removing first: ${companies}`);
// b. remove uber & add Ola in its place
companies.splice(2, 1, "Ola"); // remove Uber and add Ola
console.log(`Companies after replacing uber with ola: ${companies}`);
// c. add amazon at the end
companies.push("Amazon"); // add Amazon at the end
console.log(`Companies after adding amazon at the end: ${companies}`);


// 28th jan 2026
// functions in js => A block of code designed to perform a particular task. Functions are reusable. it prevents us from redundancy.
// Function declaration
// function functionName(parameters) {
//     // function body
//     return value;
// }

function myFunction() {
    console.log("I am sandhya bharti");
    console.log("i am from bihar");
}
myFunction(); // function call

// function with parameters and return value
function paraFunct(para) {
    console.log(para);
}
paraFunct("Hello, sandhya this side");

function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("Sandhya"));
// Function expression
const add = function(a, b) {
    return a + b;
};
console.log(add(5, 3));
// Arrow function
const multiply = (x, y) => x * y;
console.log(multiply(4, 6));

// sum of two number
function Subtraction(y, z) {
    s = y + z;
    return s;
}
let sub = (345, 789);
console.log("Sub of two numbers is:" + sub);

// Arrow functions: compact way of writing a function 
//const functionName = (param1, param2, ...) => {
    //do some work
    //return value;
//};
const mul = (a, b) => {
    console.log("Multiplication: ", a * b);
}
mul(7,8);

// 1. Create a function using the "function" keyword that keeps a String as an argument & returns the number of vowels in the string. 
function countVowels(str) {
    let count = 0;
    for(const char of str) {
        console.log(char);
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
           char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
            count++;
        }
    }
    console.log("Number of vowels in the string:", count);
}

// 2. Create an arrow function to perform the same task.
const vowelCount = (str) => {
    let count = 0;
    for(char of str) {
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
           char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
            count++;
        }
    }
    return count;
}

// forEach Loop in arrays => A method that executes a provided function once for each array element.
// * A callback is a function passed as an argument to another function.
let numberArray = [1, 2, 3, 4, 5];
numberArray.forEach((num) => {
    console.log("Number:", num);
});

let authors = ["Sandhya", "Anjali", "Rohit", "Suresh"];
authors.forEach((authors) => {
    console.log("Author:", authors);
})

// Higher order functions => A function that takes another function as an argument or returns a function as a result.
function higherOrderFunction(callback) {
    console.log("Inside higher order function.");
    callback();
}

// 1. For a given array of numbers, print the square of each value using the forEach loop.
let nums = [1, 2, 3, 4, 5];
nums.forEach((nums) => {
    console.log(nums * nums);
})
// 2nd method 
let calcSquare = (nums) => {
    console.log(nums * nums)
};
nums.forEach(calcSquare);

// some more Array Methods
// 1. Map: Creates a new array with the results of some operation. The value its callback returns are used to form new array.
// arr.map(callbackFnx(value, index, array))
nums.map((val) => {
    console.log(val);
});

let newArr = nums.map((val) => {
    return val;
})
console.log(newArr);

// 2. Filter: Creates a new array of elements that give true for a condition/filter. Eg: all even elements
let evenArr = arr.filter((val) => {
    return val % 2 === 0; 
})
console.log(evenArr);

// 3. Reduce => Performs some operations and reduces the array to a single value. It returns that single value.
const initialValue = 0;
const mulWithInitial = nums.reduce(
    (accumulator, currentValue) => accumulator * currentValue, initialValue,
);
console.log(mulWithInitial);

const bigger = arr.reduce((prev, curr) => {
    return prev > curr ? prev : curr;
})
console.log(bigger);

// 1. We are given an array of marks of students. Filter our of the marks of students that scored 90+.
let stMarks = [78, 87, 98, 89, 34, 90, 99, 91];
let grtrMarks = stMarks.filter((stMarks) => {
    return stMarks > 90;
})
console.log(grtrMarks);

// 2. Take a number n as input from user. Create an array of numbers from 1 to n.
// USe the reduce method to calculate sum of all numbers in the array.
// Use the reduce method to calculate product of all numbers in the array.
let n = prompt("Enter a number:");
let nArr = [];
for(let i =0; i <= n; i++) {
    nArr[i - 1] = i;    // 1(0), 2(1), 3(2),...   
}
console.log(nArr);
let summation = nArr.reduce((res, curr) => {
    return res + curr;
})
console.log(`Sum of the no. is: ${summation}`);
let pdt = nArr.reduce((res, curr) => {
    return res * curr;
})
console.log(`Product of no.: ${pdt}`);
// End of functions in js


// DOM: Document Object Model 
// 1. Create a H2 heading element with text - "Hello JavaScript". Append "from LPU students" to this text using JS.
let h2 = document.querySelector("h2");
console.log(h2.innerText);
h2.innerText = h2.innerText + " " + "from LPU students";

// 2. Create 3 divs with common class name - "box". Access them & add some unique text to each of them.
let divs = document.querySelectorAll(".box");
// console.log(divs[0]);
/*
divs[0].innerText = "new unique value 1"; 
divs[1].innerText = "new unique value 2"; 
divs[2].innerText = "new unique value 3"; 
*/
// we will use loops here 
let ids = 1;
for(div of divs) {
    // console.log(div);
    // console.log(div.innerText);
    div.innerText = `new unique value ${idx}`;
    ids++;
}

// Attributes: 
let para = document.querySelector("p");
console.log(para.getAttribute("class"));
console.log(para.setAttribute("class", "newClass"));

let div = document.querySelector("div");
div.style.backgroundColor = "green";
div.style.fontSize = "30px";
div.style.visibility = "hidden";

let newBtn = document.createElement("button");
newBtn.innerText = "Click me";
console.log(newBtn);

let div = document.querySelector("div");
div.append(newBtn);
div.prepend(newBtn);
div.before(newBtn);
div.after(newBtn);
let p = document.querySelector("p");
div.append(newBtn);
div.prepend(newBtn);
div.before(newBtn);
div.after(newBtn);

let newHeading = document.createElement("h3");
newHeading.innerHTML = "<i>Hi, i am new heading!</i>";
document.querySelector("body").prepend(newHeading);

let para = document.querySelector("p");
para.remove();
newHeading.remove();

// events
/*
let btn1 = document.querySelector("btn1");
btn1.onClick = () => {
    console.log("btn1 was clicked");
    let a = 25;
    a++;
    console.log(a);            //26
};

let events = document.querySelector("events");
events.onmouseover = () => {
    console.log("u r into the div");
}
    */

btn1.addEventListener("click", () => {
    console.log("button1 clicked");
})
btn1.addEventListener("click", () => {
    console.log("button1 clicked - handler1");
})
btn1.addEventListener("click", () => {
    console.log("button1 clicked - handler2");
})
btn1.addEventListener("click", () => {
    console.log("button1 clicked - handler3");
})
btn1.addEventListener("click", () => {
    console.log("button1 clicked - handler4");
})
// remove 3rd eventlistener
const handler3 = () => {
    console.log("button 1 clicked - handler3");
}
btn1.removeEventListener("click", handler3);
// useing event object in event listener
// useing event object in event listener
btn1.addEventListener("click", (evt) => {
    console.log("button1 clicked");
    console.log(evt);
    console.log(evt.type);
})

// 1. Create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again.
let modeBtn = document.querySelector("#mode");
let currMode = "light";
let body = document.querySelector("body");

modeBtn.addEventListener("click", () => {
    console.log("trying to change mode");
    if( mode === "light") {
        currMode = "dark mode";
        // document.querySelector("body").style.backgroundColor = "black";
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        currMode = "light mode";
        // document.querySelector("body").style.backgroundColor = "white";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currMode);
})

// 2. mouseover button
let mouseover = document.querySelector("mouseover");

mouseover.addEventListener("click", () => {
    console.log("mouseover event");
})


//MDN Docs 