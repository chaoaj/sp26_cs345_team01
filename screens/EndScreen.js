class EndScreen extends Screen {
    constructor() {
        super();
    }

    onEnter() {
        this.xBtn = new Button(
			40, 40, 252 * 0.3, 225 * 0.3, Assets.xBtn,
			() => manager.switchTo("levels", true)
		);
    }

    draw() {
        imageMode(CORNER);
		image(Assets.endBg, 0, 0, width, height);

        this.xBtn.update();
    }

    mousePressed() {
		this.xBtn.mousePressed();
	}
}