// x là chỉ số truy cập tới các phần tử trong mảng
let x = 0;
// Tạo mảng array để lưu các giá trị được nhập vào
let array = Array();

// Tạo hàm addElementToArray()
function addElementToArray() {
    array[x] = document.getElementById("txtValue").value;
    alert("Element: " + array[x] + " Added to Array " + x);
    x++;
    document.getElementById("txtValue").value = "";
}

// Tạo hàm displayArray()
function displayArray() {
    let t = "<hr/>";
    for (let i = 0; i < array.length; i++) {
        t += "Element " + i + " = " + array[i] + "<br/>";
    }
    document.getElementById("result").innerHTML = t;
}

// Tạo hàm clearArray()
