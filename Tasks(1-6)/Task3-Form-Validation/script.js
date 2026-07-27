// Selecting HTML elements

const form = document.getElementById("registrationForm");

const message = document.getElementById("message");



// Form submit event using arrow function

form.addEventListener("submit",(event)=>{


// Prevent page refresh

event.preventDefault();



// Getting values

const name = document.getElementById("name").value;

const email = document.getElementById("email").value;

const password = document.getElementById("password").value;



// Email pattern

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



// Validation


if(name === "" || email === "" || password === ""){


message.innerHTML = 
`
<p class="error">
All fields are required!
</p>
`;


}



else if(!emailPattern.test(email)){


message.innerHTML =
`
<p class="error">
Please enter a valid email address.
</p>
`;


}



else if(password.length < 8){


message.innerHTML =
`
<p class="error">
Password must contain at least 8 characters.
</p>
`;


}



else{


message.innerHTML =
`
<p class="success">
Registration Successful!
</p>
`;


}


});