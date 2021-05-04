canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car_width = 100;
car_height = 90;

car_x = 10;
car_y = 10;

background_image = "background.jpeg";
car_image = "ncar.png";

function add() {
    background_img_tag = new Image();
    background_img_tag.onload = uploadBackground;
    background_img_tag.src = background_image;

    car_img_tag = new Image();
    car_img_tag.onload = uploadCar;
    car_img_tag.src = car_image;
}

function uploadBackground() {
    ctx.drawImage(background_img_tag, 0, 0, canvas.width, canvas.height);
}

function uploadCar() {
    ctx.drawImage(car_img_tag, car_x, car_y, car_width, car_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        up()
        console.log("up");
    }

    if (keyPressed == '40') {
        down();
        console.log("down");
    }

    if (keyPressed == '37') {
        left();
        console.log("left");
    }

    if (keyPressed == '39') {
        right();
        console.log("right");
    }
}

function down() {
    if (car_y <= 600) {
        car_y = car_y + 10
        console.log("when down arrow is pressed=" + car_x + " " + car_y);
        uploadBackground();
        uploadCar()
    }
}

function up() {
    if (car_y >= 0) {
        car_y = car_y - 10
        console.log("when up arrow is pressed=" + car_x + " " + car_y);
        uploadBackground();
        uploadCar()
    }
}

function right() {
    if (car_x <= 770) {
        car_x = car_x + 10
        console.log("when right arrow is pressed=" + car_x + " " + car_y);
        uploadBackground();
        uploadCar()
    }
}

function left() {
    if (car_x >= 0) {
        car_x = car_x - 10
        console.log("when left arrow is pressed=" + car_x + " " + car_y);
        uploadBackground();
        uploadCar()
    }
}