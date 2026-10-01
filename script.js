const loginForm = document.getElementById("loginForm");
const errorMessage = document.getElementById("errorMessage");

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();


    // Check fields
    if (!email || !password) {

        errorMessage.style.display = "block";

        return;
    }


    // Hide error
    errorMessage.style.display = "none";


    // Login data
    console.log("Email:", email);
    console.log("Password:", password);


    // Temporary success message
    alert("Login submitted successfully!");

});