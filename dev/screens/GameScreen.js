class GameScreen extends Screen {
  constructor(levelId = 1) {
    super();
    this.levelId = levelId;
    this.showPopup = false;
    this.timer = 0;
  }

  onEnter() {
    SoundManager.playMusic("bgmusic", 0.5);

    const level = Levels.find(l => l.id === this.levelId);

    this.puzzle = new SlidePuzzle(
      level.grid,
      Assets.levelImages[level.id],
      150,
      () => this.onPuzzleSolved()
    );

    this.xBtn = new Button(40, 40, 252 * 0.3, 229 * 0.3, Assets.xBtn);
  }

  onPuzzleSolved() {
    if (this.levelId === 1) {
      //manager.switchTo("game2", true);
      manager.register("win", new WinScreen(this.timer, this.levelId + 1));
      manager.switchTo("win", true);
    } else {
      console.log("No more levels!");
    }
  }  

  draw() {
    imageMode(CORNER);
    image(Assets.gameBgImg, 0, 0, width, height);

    push();
    translate(
      width / 2 - (this.puzzle.gridSize * this.puzzle.tileSize) / 2,
      height / 2 - (this.puzzle.gridSize * this.puzzle.tileSize) / 2
    );
    this.puzzle.draw();
    pop();

    this.xBtn.update();

    // add to timer
    if(frameCount % 60 == 0) {
      this.timer++;
    }
  }

  keyPressed() {
    if (keyCode === ENTER) {
      manager.register("win", new WinScreen(this.timer, this.levelId + 1));
      manager.switchTo("win", true);
    }
    this.puzzle.handleInput(key);
  }

  mousePressed() {
    if (this.xBtn.isHovered()) {
      SoundManager.playSfx();
      manager.switchTo("menu", true);
    }
  }
}
