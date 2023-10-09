window.onload = loginLoad;

function loginLoad() {
    const loginButton = document.getElementById("myLogin"); // Change the ID to "myLogin"
    loginButton.onsubmit = checkLogin;
}

function checkLogin(event) {
 // Prevent the form from submitting normally
    const form = document.forms["myLogin"];
    const enteredPassword = form["password"].value;
    const storedPassword = localStorage.getItem("password");

    if (enteredPassword === storedPassword) {
        alert("Login successful!");
    } else {
        alert("Password not matched.");
    }
}
