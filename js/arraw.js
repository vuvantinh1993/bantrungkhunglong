class arrow {
    constructor(game) {
        this.game = game;
        this.mousePos = null;
    }

    setMousePos(newMousePos) {
        this.mousePos = newMousePos;
    }

    update() {

    }

    draw() {
        if (this.mousePos == null) {
            return;
        }
        this.game.context.beginPath();
        this.game.context.strokeStype = "#fff"
        this.game.context.moveTo(Bullet_ball_Start_X, Bullet_ball_Start_Y);
        this.game.context.lineTo(this.mousePos.x, this.mousePos.y);
        this.game.context.stroke();
    }
}