function LogOut() {
    localStorage.removeItem("token");
    window.location.href = "home.html";
    CheckLogin()
}