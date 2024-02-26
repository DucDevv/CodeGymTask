function LogOut() {
    localStorage.removeItem("token");

    CheckLogin()
}