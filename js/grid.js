class grid {
    constructor(game) {
        this.game = game;
        this.y = -Row_height;
        this.balls = [];
    }

    numRows() {
        return this.balls.length;
    }

    havetoCreateNewRow() {
        return (this.y > ((this.numRows()) * Row_height))
    }

    createNewRow() {
        let row = this.balls.length;
        let rowballs = [];
        for (let col = 0; col < 10; col++) {
            let newBall = new ball(this.game, row, col);
            rowballs.push(newBall);
        }
        this.balls.push(rowballs);
    }

    update() {
        this.y += 1;

        if (this.havetoCreateNewRow()) {
            this.createNewRow();
        }

        this.balls.forEach((line) => {
            line.forEach((ball) => {
                ball.update();
            });
        })
    }

    draw() {
        this.game.context.beginPath();
        this.game.context.strokeStype = "#fff"
        this.game.context.moveTo(0, this.y);
        this.game.context.lineTo(Game_width, this.y);
        this.game.context.stroke();

        this.balls.forEach((line) => {
            line.forEach((ball) => {
                ball.draw();
            })
        })
    }
}