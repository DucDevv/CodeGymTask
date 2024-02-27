
let listAccount = JSON.parse(localStorage.getItem("account"));
function CheckLogin() {
    if (localStorage.getItem("token") !== null) {
        let name = localStorage.getItem("token");
        document.getElementById("header_signup").style.display = "none";
        document.getElementById("header_login").style.display = "none";
        document.getElementById("header_logout").style.display = "block";
        let headerUsername = document.getElementById("header_username");
        headerUsername.style.display ="block";
        headerUsername.innerHTML = "Hi " + name;
    } else if (localStorage.getItem("token") === null) {
        document.getElementById("header_signup").style.display = "block";
        document.getElementById("header_login").style.display = "block";
        document.getElementById("header_logout").style.display = "none";
        document.getElementById("header_username").style.display = "none";
    }
}

function Login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let checkLogin = listAccount.some(value => value.username === username && value.password === password);
    if (checkLogin) {
        localStorage.setItem("token", username);
    } else {
        alert("Wrong username or password");
    }
}

function signUp() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;

    if (listAccount !== null) {
        let existingAccount = listAccount.find(account => account.username === name);
        if (existingAccount) {
            alert("Username already exists. Please choose a different username.");
            return;
        }
    } else {
        listAccount = [];
    }

    let newAccount = {
        username: name,
        email: email,
        phone: phone,
        password: password
    };

    listAccount.push(newAccount);
    alert("Sign up successful!");
    localStorage.setItem("account", JSON.stringify(listAccount));
}