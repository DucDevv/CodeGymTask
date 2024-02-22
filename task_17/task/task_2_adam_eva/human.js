class Human {
    name
    gender
    weight

    constructor(name, gender, weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }

    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }
    isMale(){
        if(this.gender.toLowerCase() === 'male'){
            return true;
        } else{
            return false;
        }
    }
    setGender(gender){
        // if(this.isMale()){
        //     return "Male";
        // }
        // else {
        //     return "Female";
        // }
        this.gender = gender;
    }
    getWeight(){
        return this.weight;
    }
    setWeight(weight){
        this.weight = weight;
    }
    checkApple(apple){
        return apple.isEmpty();
    }
    eat(apple){
        if(this.checkApple()){
            console.log("Out of Apple!")
        } else {
            this.weight++;
            apple.decrease();
        }
    }
    say(message){
        message = prompt("What " + this.name + " say?");
        console.log("Message from " + this.name + ": " + message);
    }
}

let adam = new Human('Adam', 'male', 80);
let eva = new Human('Eva', 'Female', 55);
let apple = new Apple(20);

adam.eat(apple);
adam.getWeight();
apple.getWeight();
// adam.say();
// eva.say();
