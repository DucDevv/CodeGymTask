let products = [
    { id: 1, img: "img/product/shoe1.png", name: "Jordan", category: "men", price: 100 },
    { id: 2, img: "img/product/shoe6.png", name: "Nike", category: "women", price: 200 },
    { id: 3, img: "img/product/shoe7.png", name: "Adidas", category: "men", price: 600 },
    { id: 4, img: "img/product/shoe8.png", name: "Vans", category: "women", price: 500 },
];

function displayProductInfo(product) {
    let productInfo = `
    <div>
                <img src="${product.img}" alt="">
                <div>
                    <h5>${product.name}</h5>
                    <h3>${product.category}</h3>
                    <h4>${product.price}</h4>
                </div>
            </div>
  `;

    let productContainer = document.getElementById("pro");
    productContainer.innerHTML = productInfo;
}
    let product = products.find((product) => product.id === 1);
displayProductInfo(product);
