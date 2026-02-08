// // provide brain to our webpage
// // js is a dynamitcally typed language
// console.log("Hello JS");
// // alert("helloo!!")

// // variables: it is like a container that has some values, u can change the value
// // var => has global scope, let => block scope, const=>block scope

// var a = 5;
// let b = true;
// let s;
// console.log(s) // undefined
// const pi = 3.14;
// var a = "hello"
// console.log(a)
// // let b = "hii"   // can't create same variable with same name 

// {
//     var a = 10;

//     var x = 50;
//     let y = 60;
// }
// console.log(x);   // can access inner variable outside 
// console.log(y);   //can't access inner scope to outer scope


// let num = 40;
// {
//     console.log(num);   // output: 40
// } // can access outer scope into inner scope but can't access inner scope to outer scope

// {
//     let n = 50;
// }
// console/log(n); // error: not defined 

// TDZ => Temporal Dead Zone : Cannot access 'variable' before initialization
// let num = 60;
// {
//     console.log(num);
//     let num = 60;
// }

// const q = 1;   // const : can't be redeclare, reassign
// q = 2;  // not allowed - reinitialization

// Object, array, => non-primitive

//Primitive 
// let str = "String";
// let number = 1;
// `` // back tick 
// let bool = true;
// let und = undefined;
// let nul = null;
// console.log(typeof null);     // object

// // non-primitive: regex expression 
// let obj = { name : "sandhya", 
//     getName: function () {},
//     emails : ["s@a.com", "b@h.com"], 
//     address : {city : "Phagwara"},
//     "work address" : "Jalandhar";
// };
// let arr = [1,2,3,4,5, "hello", 6,7,8, true, function() {}, undefined, null, []];
// console.log(arr[2]);    // 3
// arr[2] = "world";
// console.log(arr[2]);   // world

// function func() {
// }

//read
// console.log(obj.getName);
// console.log(obj.name);
// console.log(obj["work address"]);
//update
// obj.name = "Sandhya";
// console.log(obj.name);
//create
// obj.mobile = 9129151607;
//delete
// delete obj.emails;



// string
// let greet = "It's";
// console.log(greet);
// console.log(greet.length);            // to find the length 
// console.log(greet[0]);
// console.log(greet.slice(0,2));

// let name = "Sandhya";
// const full = greet + name;
// console.log(full);

// const person = "Sandhya";
// const greeting = `Hello ${person}`;
// console.log(greeting);
// console.log(typeof person);
// // `` => creating multi lines string 

// const multi = `hhssjkszadjhsvj
// jyajhbsAShdnd
// hsjsdbjdbhaSnjsjd`
// console.log(multi);

// https://github.com/exewhyz/js-lpu =>github for javascript

// 24th jan 
// arr[10] = 3;
// console.log(arr);
// console.log(arr[8]);
// console.log(arr[100]);
// arr.push(10) // add in last
// arr.pop()  // remove from last
// arr.unshift()  // add at first
// arr.shift()  // remove from first

// arr.fill(vale, start, ending)     // ex: arr.fill(9,0,2) => (9, 9)
// arr.reverse()    // to reverse the array
// console.log(arr)

//Function: 2 types of function => 1. regular function
// function test() {}

// calling of the function, can call the function anywhere but within the scope 
// test()

// 2. Arrow function ->ES6
// () => {}             //anonymous arrow function 
// func1()              // can't call before creating the function 
// const func1 = () => {}
// func1()          // calling the function 

//Parameters: the data we accept while creating the function
//Argument: the data we pass in the function at time of calling the function
// function test(name, age) {
//     if (!name && !age) {
//         return
//         // alert("Please provide name and age");
//     } else {
//         console.log(`hello ${name}, Age: ${age}`);
//     }
// }
// test("Sandhya", 22);
// test();         // print hello undefined, Age undefined, we must pass the data (argument) 

/*
function test(name = "Sandhu", age = 22) {
    if (!name && !age) {
        return
        // alert("Please provide name and age");
    } else {
        console.log(`hello ${name}, Age: ${age}`);
    }
}
test()
*/


//Loops
// if(condition) {
//     // logic
// } else {

// }

// short hand of if-else => ternary operator
// condition ? statement1 : statement2;

/*
if(true) {
//logic
console.log("True");
} else {
console.log("False");
}
*/

// true ? console.log("True") : console.log("false");

/*
if(condtiton1) {
    console.log("True")
} else if {
    console.log("False");
}
    */

/*
const num1 = 1;
const strNum = "1";
console.log(num1 == strNum);    // checks value only ---> true
console.log(num1 === strNum);   // checks value as well as type  --- > false
*/


//logical operator
// !, ||, &&
// TRUTHY Values => 1,true,[],"h"," "

// !! ---> add in front to check truthy or falsy value

//FALSY Values => 0,false,"",null,undefined,!1
/*
console.log(true && false);          // Output: false        // concept of short circuiting, can use for if-else
console.log(true && true);             // Output: true          // concept of short circuiting, can use for if-else
console.log(true && ![] && true);    // Output: false  
console.log(true && !![] && true);     // Output: true  
console.log(undefined && ![] && true);     // Output: undefined  
console.log("" && ![] && true);     // Output: nothing will print, a blank space created
console.log(" " && ![] && true);     // Output: false   

console.log([] || false)       // Output: []
console.log({} || false)       // Output: {}
console.log(false || {} || false)   // Output: {}
console.log(false && {} || [])   // Output: []
*/


// Loops=> 3 types of loop 
// 1. for loop 
// for(let i = 0; i < 5; i++) {
//     console.log(i);

// }
/*
const n = 2;
++n;    // first it will increment then it will use
console.log(n);
n++;    // first it will use then it will increment
console.log(n);
*/

//  2. While loop => all statements are separated in while loop
// let j = 0;
// while(j < 3) {
//     console.log(j);
//     j++;
// }

// 3. do-while loop
// let k = 0;
// do {
//     console.log(k);
//     k++;
// }
// while(k < 4) {
// }

/*
//Array
const students = [{
    name:"Sandhya",
    email:"sandhya@gmail.com",
},
{
    name:"Sandhu",
    email:"sandhu@gmail.com",
},
];
for(let i = 0; i < students.length; i++) {
    // console.log(students[i]);
    console.log(students[i].name);    // print all the names only
}

// will work on array, object and 
const ob = {
    a: "1",
    b: "2"
}
for(let key in ob) {
    console.log(key)
    console.log(ob[key])    //  for values
}

// for of loop -> for on array and string, will not work on object
for(let value of students) {
    console.log(value);
    console.log(value.name);
    console.log(value.email);
}
*/

// callback function
// const parent = (callBackFn) => {
//     callBackFn();
//     const value = callBackFn();
//     console.log(value);
//     console.log(value + 1);
// }

// const inner = () => {
//     return 2 + 3;
//     console.log("Hello! Ms. Sandhya from inner function");
// }
//calling the parent function, we have to pass inner function as an argument
// parent(inner);



// const HOF = (callBackFn) => {
//     callBackFn();
//     const value = callBackFn();
//     console.log(value);
// }

// const inner2 = () => {
//     return 2 + 3;
//     console.log("Hello! Ms. Sandhya from inner2 function");
// }
//calling the parent function, we have to pass inner function as an argument
// HOF(inner2);

/*
//forEach loop: no need to return 
const ages = [10, 20, 30, 40];
// ages.forEach((value, index) => {
//     ages[index] = value * 2;
//     // console.log(value);
//     // console.log(index);
// });
// console.log(ages);

// map method: neeed to be return 
const doubled = ages.map((value, index) => {
    return value * 2;
})
console.log("OG",ages);
console.log("UD",doubled);

const tripled = ages.map((value, index) => {
    return value * 3;
})
console.log("Tripled", tripled);

//filter method
const filtered = ages.filter((value, index) => {
    return value > 15;
})
console.log(filtered);

const filltered = ages.filter((value, index) => {
    return value % 3 === 0;
})
console.log(filltered);

//reduce method: it will return a single value or single element.     // search reducer method and array prototype on google
const sum = ages.reduce((prev, curr) => {                             // prev as accumulator
    return prev + curr;
}, 0);
console.log(sum);

// some, every, find, findIndex
const sm = ages.some((value) => {
    return value < 25;
})
console.log(sm)

const evry = ages.every((value) => {
    return value < 21;
})
console.log(evry);

const ele = ages.find((value) => {
    return value <= 10
})
console.log(ele);
// immediate return 
const elem = ages.find(value => value <= 10);
console.log(elem);           //output: 10

const fndIndx = ages.findIndex((value) => {
    return value === 30;
})
console.log("Index:", fndIndx);              // output: Index: 2
*/

// closure
// function count() {                          //parent function, scope of parent function known as lexical environment
//     let c = 0;
//     return function inner() {                    //child function, every child function will remember the variable of the parent function
//         c++;
//         console.log(c);
//     }
// }

// const counter = count();
// counter();   // output: 1
// counter();   // output: 2


// Browser side JavaScript: DOM(Document Object Model), BOM(Browser Object Model), Asynchronous JavaScript


// 27th jan 2026 => Asynchronous JavaScript 
// difference between 
// synchronous js: step by step(line by line) 1st will execute 1st task, then 2nd task and soon -> 
// console.log(1);
// console.log(2);
// console.log(3);

//  and asynchronous js: all the task run parallerly, all the task will start at the same time => it will take less time than synchoronous js
/*
const timeOutId = setTimeout(() => {                     //setTimeout->is a function 
    console.log("Hello");
}, 2 * 1000);

const intervalId = setInterval(() => {
    console.log("Inside Interval");
}, 3 * 1000);

setTimeout(() => clearInterval(intervalId), 8 * 1000)

// clearTimeout(timeOutId);

console.log(2);
console.log(3);
*/


// Promise in JavaSCript => JSON 
const url = "https://jsonplaceholder.typicode.com/todos";
// const url = "https://jsonplaceholder.typicode.com/todos/1";
// const url = "https://jsonplaceholder.typicode.com/todos/2";

// fetch(url).then((res) => {
//     return res.json();
// }).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// })


// async function => it will return a promise
// async function getTodos() {
//     // to handle the errors wrap the whole in try{} and catch{} block of code 
//     try {
//         const res = await fetch(url);
//         const data = await res.json();
//         console.log(data);
//     }
//     catch(err) {
//         console.log(err);
//     }
// }
// getTodos()

// //in arrow function 
// const getTodos = async () => {}


// to create an object from class we have to use "new" keyword
// const ourPromise = new Promise((resolve, reject) => {
//     let success = true;             // change it to false to see the reject case
//     if(success) {
//         resolve("Hello I am resolved successfully");
//     } else {
//         reject("I am rejected");
//     }
// });
// ourPromise.then((data) => console.log(data))
// .catch((err) => console.log(err));

//will add steTimeout to simulate the asynchronous behavior
/*
setTimeout(() => {
    const p = { name: "sandhya" };
    if (p) {
        resolve(p);
    } else {
        reject("Error: No data found");
    }
}, 2 * 1000);

ourPromise.then((data) => console.log(data))
    .catch((err) => console.log(err));
new Promise().resolve("hello").then((data) => console.log(data));
*/

/*
//destructuring of array and object 
const [user1, user2] = [
    {
        name: "Sandhya",
        age: 22,
        email: "sa@g.com"
    },
    {
        name: "Sandhu",
        age: 23,
        email: "su@g.com"
    },
];
console.log(user2);
console.log(user1.name);
console.log(user1.email);
console.log(user1.age);

const { name, email, age } = user1;
console.log(name);
console.log(email);
console.log(age);
*/

// spread operator => ... =>  is used to expand the elements of an array or object
// const nums = [1,2,3,4,5];
// const dubNums = [...nums]; // copying the elements of nums to dubNums
// console.log(dubNums);
/*
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined);

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combinedObj = { ...obj1, ...obj2 };
console.log(combinedObj);
*/

// rest operator => ... => is used to collect multiple elements into an array
// const letters = ['a', 'b', 'c', 'd', 'e'];
// const [a,b,...rest] = ["a", "b", "c", "d", "e"];
// console.log(a); // Output: 'a'
// console.log(b); // Output: 'b'
// console.log(rest); // Output: ['c', 'd', 'e']

/*
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // Output: 15
*/

// const x = {a: "hello"};
// const p = '{a: "hello"}';
// console.log(typeof x);
// const y = JSON.stringify(x);
// console.log(typeof y);

// const z = JSON.parse(JSON.stringify(x));

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(`Original Companies: ${companies}`);
// a. remove the first company from the array
companies.shift(); // remove first company
console.log(`Companies after removing first: ${companies}`);
// b. remove uber & add Ola in its place
companies.splice(2, 1, "Ola"); // remove Uber and add Ola
console.log(`Companies after replacing uber with ola: ${companies}`);
// c. add amazon at the end
companies.push("Amazon"); // add Amazon at the end
console.log(`Companies after adding amazon at the end: ${companies}`);


