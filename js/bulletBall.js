class bulletBall {
    constructor(game) {
        this.game = game;
        this.image = null;
        this.isimageLoad = false;
        this.createStartPropeties();
        this.loadimage();
    }

    createStartPropeties() {
        this.speed = Ball_sreed;
        this.speedX = 0;
        this.speedY = 0;
        this.isMoving = false;

        this.x = Bullet_ball_Start_X;
        this.y = Bullet_ball_Start_Y;
        this.color = this.getrandomColor();
    }

    loadimage() {
        this.image = new Image;
        this.image.onload = () => {
            this.isimageLoad = true;
        }
        this.image.src = 'img/ball-' + this.color + '.png'
    }

    getrandomColor() {
        let colors = ['red', 'blue', 'yellow'];
        let r = Math.round(Math.random() * 2);
        return colors[r];
    }

    fire(mousePos) {
        if (this.isMoving) {
            return;
        }
        let deg = Math.atan2(mousePos.y - this.y, mousePos.x - this.x);
        this.speedX = this.speed * Math.cos(deg);
        this.speedY = this.speed * Math.sin(deg);

        this.isMoving = true;
    }

    update() {
        if (this.x - Ball_Radius <= 0 || Game_width - this.x <= Ball_Radius) {
            this.speedX = -this.speedX
        }
        this.x += this.speedX;
        this.y += this.speedY;

        //check over top
        if (this.y + Ball_Radius <= 0) {
            this.createStartPropeties();
        }
    }

    draw() {
        if (!this.isimageLoad) {
            return;
        }
        this.game.context.drawImage(
            this.image,
            this.x - Ball_Radius,
            this.y - Ball_Radius
        )
    }
}