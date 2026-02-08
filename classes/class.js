/*
const student = {
    fullName: "sandhya bharti",
    email: "sandhya@gmail.com",
    contact: 9876543210,
    marks: 94.5,
    printMarks: function () {
        console.log("marks = ", this.marks);
    },
};

const employee = {
    calcTax() {
        console.log("tax rate is 10%");
    },
}
*/ 

/*
class Car {
    constructor(){
        console.lof("creating new object");
    }
    start() {
        console.log("start");
    }
    stop() {
        console.log("stop");
    }

    setBrand(brand) {
        this.brandName = brand;
    }
}

let fortuner = new Car();
fortuner.setBrand("fortuner");
let lexus = new Car();
lexus.setBrand("lexus");
*/

/*
// Inheritance 
class Parent {
    hello() {
        console.log("Hello");
    }
}
class Child extends Parent {
}
let obj = new Child();

class Person {
    constructor(name) {
        this.species = "homo sapiens";
        this.name = name;
    }
    eat() {
        console.log("Eat");
    }
    sleep() {
        console.log("sleep");
    }
}

class Engineer extends Person {
    constructor(name) {
        super(name);    // to invoke parent class constructor
    }
    work () {
        console.log("Solve problems, build something");
    }
}
let engObj = new Engineer("Sandhya");

class Doctor extends Person {
    work () {
        console.log("treat patients");
    }
}
let doctObj = new Doctor();
*/

/* 1. You are creating a website for your college. Create a class USer with 2 properties, name & email.
It also has a method called viewData() that allows user to view website data.*/
/* 2. Create a new class called Admin which inherits from User. Add a new method called editData to Admin 
that allows it to edit website data. */
/*
let DATA = "secret information";
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("website data", DATA);
    }
}

class Admin extends User {
    constructor(name, email) {
        super(name, email);
    }
    editData() {
        DATA = "some new value";
    }
}


let student1 = new User("sandhya", "sand@gmail.com");
let student2 = new User("sandy", "sandy@gmail.com");

let teacher1 = new User("abc", "abc@gmail.com");

let admin1 = new Admin("sandhu","sandhu@clg.com");
*/

// Error handling 







