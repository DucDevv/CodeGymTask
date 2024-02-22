class Hero {
    image
    top
    left
    size

    constructor(image, top, left, size, speed) {
        this.image = image;
        this.top = top;
        this.left = left;
        this.size = size;
        this.speed = speed;
    }

    getHeroElement() {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px; position: absolute;" />'
    }

    moveRight() {
        this.left += this.speed;
        console.log('ok: ' + this.left);
    }
    moveLeft() {
        this.left -= this.speed;
        console.log('ok: ' + this.left);
    }
    moveUp() { // Giảm giá trị của thuộc tính top để di chuyển nhân vật lên trên màn hình
        this.top -= this.speed;
        console.log('ok: ' + this.top);
    }
    moveDown() { // Tăng giá trị của thuộc tính top để di chuyển nhân vật xuống dưới màn hình
        this.top += this.speed;
        console.log('ok: ' + this.top);
    }

}

let hero = new Hero('evee.jpg', 20, 30, 200, 100);

function start(){
    if(hero.left < window.innerHeight - hero.size){
        hero.moveRight();
    }
    if(hero.left > window.innerHeight - hero.size){
        hero.moveLeft();
    }
    if(hero.top < window.innerHeight - hero.size){
        hero.moveDown();
    }
    if(hero.top > window.innerHeight - hero.size){
        hero.moveDown();
    }

    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 500);
}

start();