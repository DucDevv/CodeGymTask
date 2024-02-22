class Apple {
    weight

    constructor(weight) {
        this.weight = weight;
    }

    isEmpty(){
        if(this.weight <= 0){
            return true
        } else {
            return false;
        }
    }
    decrease(){
        if(this.isEmpty()){
            console.log("Out of apple!");
        }
        else{
            this.weight--;
        }
    }
    getWeight(){
        return this.weight;
    }
    setWeight(weight){
        this.weight = weight;
    }
}

