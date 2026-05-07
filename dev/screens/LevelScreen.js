class LevelScreen extends Screen {
	constructor() {
		super();
	}

	onEnter() {
		this.xBtn = new Button(
			40, 40, 252 * 0.3, 225 * 0.3, Assets.xBtn,
			() => manager.switchTo("menu", true)
		);

		// LEVEL 1
		this.level1Btn = new Button(
			430, 170, 125, 125, Assets.level1Btn,
			() => manager.switchTo("game1", true)
		);

		// LEVEL 2
		this.level2Btn = new Button(
			725, 220, 125, 125,
			Levels[1].isLocked ? Assets.lockImg : Assets.level2Btn,
			Levels[1].isLocked ? null : () => manager.switchTo("game2", true)
		);

		// LEVEL 3
		this.level3Btn = new Button(
			1100, 160, 125, 125,
			Levels[2].isLocked ? Assets.lockImg : Assets.level3Btn,
			Levels[2].isLocked ? null : () => manager.switchTo("game3", true)
		);

		// LEVEL 4
		this.level4Btn = new Button(
			1090, 385, 125, 125,
			Levels[3].isLocked ? Assets.lockImg : Assets.level4Btn,
			Levels[3].isLocked ? null : () => manager.switchTo("game4", true)
		);

		// LEVEL 5
		this.level5Btn = new Button(
			805, 410, 125, 125,
			Levels[4].isLocked ? Assets.lockImg : Assets.level5Btn,
			Levels[4].isLocked ? null : () => manager.switchTo("game5", true)
		);

		// LEVEL 6
		this.level6Btn = new Button(
			365, 380, 125, 125,
			Levels[5].isLocked ? Assets.lockImg : Assets.level6Btn,
			Levels[5].isLocked ? null : () => manager.switchTo("game6", true)
		);

		// LEVEL 7
		this.level7Btn = new Button(
			425, 600, 125, 125,
			Levels[6].isLocked ? Assets.lockImg : Assets.level7Btn,
			Levels[6].isLocked ? null : () => manager.switchTo("game7", true)
		);

		// LEVEL 8
		this.level8Btn = new Button(
			725, 610, 125, 125,
			Levels[7].isLocked ? Assets.lockImg : Assets.level8Btn,
			Levels[7].isLocked ? null : () => manager.switchTo("game8", true)
		);

		// LEVEL 9
		this.level9Btn = new Button(
			1080, 660, 125, 125,
			Levels[8].isLocked ? Assets.lockImg : Assets.level9Btn,
			Levels[8].isLocked ? null : () => manager.switchTo("game9", true)
		);

		this.buttons = [
			this.xBtn,
			this.level1Btn, this.level2Btn, this.level3Btn,
			this.level4Btn, this.level5Btn, this.level6Btn,
			this.level7Btn, this.level8Btn, this.level9Btn
		];
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

	keyPressed() {
		if (keyCode === ENTER) {
			Levels.forEach(level => level.isLocked = false);
			console.log("All levels unlocked!");
			manager.switchTo("levels", true);
		}
	}
}