// Selecting HTML elements

const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");


// Task Class

class Task {

    constructor(id, text, completed = false) {

        this.id = id;
        this.text = text;
        this.completed = completed;

    }

}



// Task Manager Class

class TaskManager {


    constructor() {

        this.tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    }



    // Add task

    addTask(task) {

        this.tasks.push(task);

        this.saveTasks();

    }



    // Delete task using filter()

    deleteTask(id) {

        this.tasks = this.tasks.filter(task => task.id !== id);

        this.saveTasks();

    }



    // Complete task using map()

    toggleTask(id) {

        this.tasks = this.tasks.map(task => {

            if(task.id === id){

                task.completed = !task.completed;

            }

            return task;

        });


        this.saveTasks();

    }



    // Save tasks in Local Storage

    saveTasks(){

        localStorage.setItem(
            "tasks",
            JSON.stringify(this.tasks)
        );

    }


}



// Creating Task Manager object

const manager = new TaskManager();




// Display all tasks

const displayTasks = () => {


    taskList.innerHTML = "";



    const taskHTML = manager.tasks.map(task => {


        return `

        <li class="${task.completed ? "completed" : ""}">


        <span onclick="completeTask(${task.id})">

        ${task.text}

        </span>


        <button 
        class="delete"
        onclick="deleteTask(${task.id})">

        Delete

        </button>


        </li>

        `;


    });



    taskList.innerHTML = taskHTML.join("");

};




// Add task button

addTaskButton.addEventListener("click",()=>{


    const text = taskInput.value.trim();



    if(text !== ""){


        const task = new Task(

            Date.now(),

            text

        );



        manager.addTask(task);



        taskInput.value="";


        displayTasks();


    }


});




// Complete task

window.completeTask = (id)=>{


    manager.toggleTask(id);


    displayTasks();


};




// Delete task

window.deleteTask = (id)=>{


    manager.deleteTask(id);


    displayTasks();


};




// Load saved tasks when page opens

displayTasks();