function Change() {
    let Amount = document.getElementById('Amount').value;
    let From = document.getElementById('From').value;
    let To = document.getElementById('To').value;
    let Result;

    if (From === "USD" && To === "VND") {
        Result = "Result: " + (Amount * 23000) + " VND";
    } else if (From === "VND" && To === "USD") {
        Result = "Result: " + (Amount / 23000) + " USD";
    } else {
        Result = "Result: " + Amount;
    }

    // Cách khác: dùng biến và tỷ giá iền tệ
    // Mở rộng chuyển đổi thêm các tỉ giá tiền khác
    // Amount * To / From

    document.getElementById("Result").innerHTML = Result;
}