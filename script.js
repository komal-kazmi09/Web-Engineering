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
// ==============================
// Task 3 - Fetch API
// ==============================

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {

        const firstFivePosts = data.slice(0, 5);

        console.log("First Five Posts:");

        firstFivePosts.forEach(post => {
            console.log(post.title);
        });

    })
    .catch(error => {
        console.log("Error:", error);
    });
    // ==============================
// Task 4 - Async Programming & Error Handling
// ==============================

// Successful Request
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        if (!response.ok) {
            throw new Error("Request Failed");
        }
        return response.json();
    })
    .then(users => {
        console.log("Users:");

        users.forEach(user => {
            console.log(`${user.name} - ${user.email}`);
        });
    })
    .catch(error => {
        console.log("Error:", error.message);
    });


// Failed Request
fetch("https://jsonplaceholder.typicode.com/invalid-url")
    .then(response => {
        if (!response.ok) {
            throw new Error("Request Failed");
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log("Failed Request:", error.message);
    });