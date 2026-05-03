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

		this.level3Btn = new Button(
			1100, 160, 125, 125, Assets.level3Btn,
			() => manager.switchTo("game3", true)
		);

		this.level4Btn = new Button(
			1090, 385, 125, 125, Assets.level4Btn,
			() => manager.switchTo("game4", true)
		);

		this.level5Btn = new Button(
			805, 410, 125, 125, Assets.level5Btn,
			() => manager.switchTo("game5", true)
		);

		this.level6Btn = new Button(
			365, 380, 125, 125, Assets.level6Btn,
			() => manager.switchTo("game6", true)
		);

		this.level7Btn = new Button(
			425, 600, 125, 125, Assets.level7Btn,
			() => manager.switchTo("game7", true)
		);

		this.level8Btn = new Button(
			725, 610, 125, 125, Assets.level8Btn,
			() => manager.switchTo("game8", true)
		);

		this.level9Btn = new Button(
			1080, 660, 125, 125, Assets.level9Btn,
			() => manager.switchTo("game9", true)
		);

		this.buttons = [this.xBtn, 
										this.level1Btn, this.level2Btn, this.level3Btn, 
										this.level4Btn, this.level5Btn, this.level6Btn,
										this.level7Btn, this.level8Btn, this.level9Btn];
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