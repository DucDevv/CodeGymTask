class Account {
    name
    email
    phone
    password

    constructor(name, email, phone, password) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.password = password;
    }


    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getEmail() {
        return this.email;
    }

    setEmail(email) {
        this.email = email;
    }

    getPhone() {
        return this.phone;
    }

    setPhone(phone) {
        this.phone = phone;
    }

    getPassword() {
        return this.password;
    }

    setPassword(password) {
        this.password = password;
    }


}