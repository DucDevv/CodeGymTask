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
    if (localStorage.getItem("token") !== undefined) {
        let name = localStorage.getItem("token");
        let headerSignUp = document.getElementById("header_signup");
        let headerLogIn = document.getElementById("header_login");
        headerLogIn.innerHTML = "Hi " + name;
        headerLogIn.style.fontStyle.bold();
        document.getElementById("header_signup").style.display = "none";
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