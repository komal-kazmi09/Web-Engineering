// Selecting table body

const userTable = document.getElementById("userTable");



// Fetch API function using arrow function

const getUsers = () => {


fetch("https://jsonplaceholder.typicode.com/users")


.then(response => response.json())


.then(users => {


    displayUsers(users);


});


};




// Display users function

const displayUsers = (users) => {


const rows = users.map(({id, name, email, address}) => {


return `

<tr>

<td>${id}</td>

<td>${name}</td>

<td>${email}</td>

<td>${address.city}</td>

</tr>

`;


});



userTable.innerHTML = rows.join("");



};



// Calling function

getUsers();