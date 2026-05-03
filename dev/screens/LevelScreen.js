class LevelScreen extends Screen {
	constructor() {
		super();

		//this.levelBtn1 = Assets.levelBtn1;
  }
	
	onEnter() {
		this.xBtn = new Button(
			40, 40, 252 * 0.3, 225 * 0.3, Assets.xBtn,
			() => manager.switchTo("menu", true)
		);
	
		this.level1Btn = new Button(
			430, 170, 125, 125, Assets.level1Btn,
			() => manager.switchTo("game1", true)
		);

		this.level2Btn = new Button(
			725, 220, 125, 125, Assets.level2Btn,
			() => manager.switchTo("game2", true)
		);

		// this.level3Btn = new Button(
		// 	1100, 160, 125, 125, Assets.level3Btn,
		// 	() => manager.switchTo("game3", true)
		// );

		this.buttons = [this.xBtn, this.level1Btn, this.level2Btn];
	}

	draw() {
	imageMode(CORNER);
  image(Assets.levelsBg, 0, 0, width, height);

		for (let btn of this.buttons) {
			btn.update();
		}
	}

	mousePressed() {
		for (let btn of this.buttons) {
      btn.mousePressed();
    }
	}
}