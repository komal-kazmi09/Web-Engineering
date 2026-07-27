// const variable
const output = document.getElementById("output");

// Class
class Student {

    constructor(name, age, marks){

        this.name = name;
        this.age = age;
        this.marks = marks;

    }

}

// let variable
let students = [

new Student("Ali",20,88),
new Student("Sara",22,92),
new Student("Ahmed",19,65),
new Student("Fatima",21,95),
new Student("Bilal",20,70)

];

// Arrow function + filter()

const passedStudents = students.filter(student => student.marks >= 80);

// Arrow function + map()

const studentCards = passedStudents.map(student => {

return `
<div class="card">
<h3>${student.name}</h3>
<p>Age : ${student.age}</p>
<p>Marks : ${student.marks}</p>
</div>
`;

});

// Event Listener

document.getElementById("showData").addEventListener("click",()=>{

output.innerHTML = studentCards.join("");

});