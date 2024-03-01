document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    // Fetch username and password from input fields
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;
    // Here you can add logic to validate credentials and perform login
    console.log("Login submitted with username: " + username + " and password: " + password);
});

document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    // Fetch username, email, and password from input fields
    var username = document.getElementById("registerUsername").value;
    var email = document.getElementById("registerEmail").value;
    var password = document.getElementById("registerPassword").value;
    // Here you can add logic to register the user
    console.log("Registration submitted with username: " + username + ", email: " + email + " and password: " + password);
});
