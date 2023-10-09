window.onload = pageLoad;

function pageLoad() {
    var register = document.getElementById("myForm");
    register.onsubmit = validateForm;
}

function validateForm() {
    var form = document.forms["myForm"];
    var errormsg = document.getElementById("errormsg");

    var password1 = form["password"].value;
    var password2 = form["password2"].value;

    if (password1 !== password2) {
        errormsg.innerText = "Password not matched";
        return false;
    }
    else
    {
        localStorage.setItem("password", password1);
        alert("Password stored in localStorage: " + password1);
        return true;
    }
}
