class game {
    constructor() {
        this.canvas = null;
        this.context = null;
        this.init();
        this.loop();
    }

    init() {
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');
        this.canvas.width = Game_width;
        this.canvas.height = Game_height;
        document.body.appendChild(this.canvas);

        //create ball
        this.bulletball = new bulletBall(this);

        //create arrow
        this.arrow = new arrow(this);

        // listen mouse event
        this.listMouseEvent();
    }

    getMousePosition(event) {
        var rect = this.canvas.getBoundingClientRect();
        return {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top
        };
    }

    listMouseEvent() {
        this.canvas.addEventListener('mousemove', (event) => {
            let mousePos = this.getMousePosition(event);
            this.arrow.setMousePos(mousePos);
        });

        this.canvas.addEventListener('click', (event) => {
            let mousePos = this.getMousePosition(event);
            this.bulletball.fire(mousePos);
        })
    }

    loop() {
        this.update();
        this.draw();
        setTimeout(() => this.loop(), 20)
    }

    update() {
        this.bulletball.update();
    }

    draw() {
        this.context.clearRect(0, 0, Game_width, Game_height)
        this.arrow.draw();
        this.bulletball.draw();
    }
}

var a = new game();

