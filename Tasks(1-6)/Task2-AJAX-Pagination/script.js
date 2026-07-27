const dataContainer = document.getElementById("dataContainer");

const prevBtn = document.getElementById("prevBtn");

const nextBtn = document.getElementById("nextBtn");


// Store API data

let users = [];


// Current page

let currentPage = 1;


// Items per page

const itemsPerPage = 5;



// Fetch API Data using AJAX

const fetchData = () => {


fetch("https://jsonplaceholder.typicode.com/users")

.then(response => response.json())

.then(data => {

    users = data;

    displayData();

});


};



// Display data with pagination

const displayData = () => {


dataContainer.innerHTML = "";


// Calculate start and end

const start = (currentPage - 1) * itemsPerPage;

const end = start + itemsPerPage;


// Get current page data

const pageUsers = users.slice(start,end);



// map() creates HTML

const userCards = pageUsers.map(user => {


return `

<div class="card">

<h3>${user.name}</h3>

<p>Email: ${user.email}</p>

<p>City: ${user.address.city}</p>

</div>

`;

});


// Show data

dataContainer.innerHTML = userCards.join("");



};




// Next button

nextBtn.addEventListener("click",()=>{


if(currentPage < Math.ceil(users.length/itemsPerPage)){

    currentPage++;

    displayData();

}


});




// Previous button

prevBtn.addEventListener("click",()=>{


if(currentPage > 1){

    currentPage--;

    displayData();

}


});



// Start program

fetchData();