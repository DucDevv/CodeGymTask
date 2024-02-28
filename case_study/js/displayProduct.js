let products = [
    { id: 1, img: "img/product/shoe1.png", name: "Air Jordan 1 Low Brown", category: "Men", price: "$150" },
    { id: 2, img: "img/product/shoe6.jpg", name: "Air Jordan 1 Low Grey", category: "Women", price: "$200" },
    { id: 3, img: "img/product/shoe7.jpg",name: "Air Jordan 1 Low Red", category: "Men", price: "$600" },
    { id: 4, img: "img/product/shoe8.jpg", name: "Air Jordan Legacy 312 Green", category: "Women", price: "$500" },
    { id: 5, img: "img/product/shoe9.png", name: "Air Jordan XXXVIII", category: "Men", price: "$1500" },
    { id: 6, img: "img/product/shoe10.jpg", name: "Air Jordan Legacy 312 Blue", category: "Women", price: "$2500" },
    { id: 7, img: "img/product/shoe12.jpg", name: "Air Jordan 1 Low Bred", category: "Men", price: "$6600" },
    { id: 8, img: "img/product/shoe13.jpg", name: "Zion 3 White", category: "Women", price: "$3500" },
    { id: 9, img: "img/product/shoe14.jpg", name: "Jordan Stadium", category: "Men", price: "$3500" },
    { id: 10, img: "img/product/shoe15.jpg", name: "Jordan Spike Low", category: "Women", price: "$3500" },
    { id: 11, img: "img/product/shoe16.png", name: "Zion 3 Pink", category: "Men", price: "$600" },
    { id: 12, img: "img/product/shoe17.png", name: "Jordan One Take", category: "Women", price: "$700" },
];

function displayProducts(products){
    let productContainer = document.querySelector(".product-container");
    let str = "";
    for(let i = 0 ;i < products.length; i++){
        str += `
            <div class="product" id="pro1" onclick="window.location.href = 'single_product.html'">
                <img src="${products[i].img}" >
                <div class="description">
                    <h5>${products[i].name}</h5>
                    <h3>${products[i].category}</h3>
                    <h4>${products[i].price}</h4>
                </div>
            </div>
        `
    }
    productContainer.innerHTML = str;

}
displayProducts(products);

function searchProduct() {
    let searchInput = document.getElementById("search-text").value;
    let searchResults = products.filter(function (product) {
        return product.name.toLowerCase().includes(searchInput.toLowerCase());
    });
    displayProducts(searchResults);
}












