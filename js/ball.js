class ball {
    constructor(game, row, col) {
        this.game = game;
        this.x = 0;
        this.y = 0;
        this.row = row;
        this.col = col;
        this.image = null;
        this.isImageLoaded = false;
        this.color = this.getrandomColor();
        this.loadImage();
        this.calculatePos();
    }

    calculatePos() {
        this.x = Ball_Radius + Ball_Diameter * this.col;
        this.y = this.game.grid.y - Row_height * this.row;
    }

    getrandomColor() {
        let colors = ['red', 'blue', 'yellow'];
        let r = Math.round(Math.random() * 2);
        return colors[r];
    }

    loadImage() {
        this.image = new Image;
        this.image.onload = () => {
            this.isimageLoad = true;
        }
        this.image.src = 'img/ball-' + this.color + '.png'
    }

    update() {

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