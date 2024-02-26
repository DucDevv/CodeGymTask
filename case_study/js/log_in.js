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