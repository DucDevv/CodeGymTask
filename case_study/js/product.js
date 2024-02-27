class Product {
    id
    img
    name
    category
    price

    constructor(id, img, name, category, price) {
        this.id = id;
        this.img = img;
        this.name = name;
        this.category = category;
        this.price = price;
    }

    getId() {
        return this.id;
    }

    setId(id) {
        this.name = id;
    }
    getImg() {
        return this.img;
    }

    setImg(img) {
        this.name = img;
    }
    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getCategory() {
        return this.category;
    }

    setCategory(category) {
        this.category = category;
    }

    getPrice() {
        return this.price;
    }

    setPrice(price) {
        this.price = price;
    }
}
