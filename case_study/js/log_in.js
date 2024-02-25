const listAccount = [
    {
        username: "duc",
        password: "duc"
    },
    {
        username: "phong",
        password: "phong"
    },
    {
        username: "quan",
        password: "quan"
    }
]

let isLogin = !!localStorage.getItem("token");

function CheckLogin() {
    if (isLogin) {
        let name = localStorage.getItem("token");
        let headerElement = document.getElementById("header");
        headerElement.innerHTML = "Hi " + name;
        document.getElementById("loginLink").style.display = "none";
    }
}

function Login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let checkLogin = listAccount.some(value => value.username === username && value.password === password);
    if (checkLogin) {
        localStorage.setItem("token", username);
        isLogin = true;
        CheckLogin();
        window.location.href = "home.html";
    } else {
        alert("Wrong username or password");
    }
    if (localStorage.getItem(("token"))) {
        CheckLogin();
    }
    window.onload = function() {
        CheckLogin();
    }
}