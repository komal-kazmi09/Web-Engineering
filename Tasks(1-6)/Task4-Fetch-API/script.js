// Selecting table body

const userTable = document.getElementById("userTable");



// Fetch API function using arrow function

const getUsers = () => {

const users = [

{
id:1,
name:"Komal",
email:"komal@gmail.com",
address:{
city:"Abbottabad"
}
},

{
id:2,
name:"Aown",
email:"aown@gmail.com",
address:{
city:"Islamabad"
}
},

{
id:3,
name:"Ali",
email:"ali@gmail.com",
address:{
city:"Karachi"
}
},

{
id:4,
name:"Sara",
email:"sara@gmail.com",
address:{
city:"Islamabad"
}
},

{
id:5,
name:"Eshal",
email:"eshal@gmail.com",
address:{
city:"Islamabad"
}
},

];


displayUsers(users);

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