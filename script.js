// ==============================
// var, let, const
// ==============================

// var
var city = "Lahore";
var city = "Karachi";
console.log("var:", city);

// let
let age = 20;
age = 21;
console.log("let:", age);

// const
const university = "ABC University";
console.log("const:", university);

// ==============================
// Arrow Function
// ==============================

const square = (number) => number * number;

console.log("Square of 5:", square(5));

// ==============================
// Student Class
// ==============================

class Student {

    constructor(name, marks){
        this.name = name;
        this.marks = marks;
    }

    display(){

        console.log(`Name: ${this.name}`);
        console.log(`Marks: ${this.marks}`);

    }

}

const student1 = new Student("Komal",90);

student1.display();

// ==============================
// map()
// ==============================

const numbers = [1,2,3,4,5];

const squares = numbers.map(num => num * num);

console.log("Squares:", squares);

// ==============================
// filter()
// ==============================

const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log("Even Numbers:", evenNumbers);