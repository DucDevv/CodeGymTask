function Change(){
    let Amount = document.getElementById('Amount').value;
    let From = document.getElementById('From').value;
    let To = document.getElementById('To').value;
    let Result;

    if(From == "USD" && To == "VND") {
        Result = "Result: " + (Amount * 23000) + " VND";
    }
    else if (From == "VND" && To == "USD") {
        Result = "Result: " + (Amount / 23000) + " USD";
    }
    else if (From == "VND") {
        Result = "Result: " + Amount + " VND";
    }
    else {
        Result = "Result: " + Amount + " USD";
    }
    document.getElementById("Result").innerHTML = Result;
}