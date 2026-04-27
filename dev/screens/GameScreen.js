class GameScreen extends Screen {
  constructor(levelId = 1) {
    super();
    this.levelId = levelId;
    this.showPopup = false;
    this.timer = 0;
  }

  onEnter() {
    SoundManager.playMusic("bgmusic", window.gameVolume ?? 1);

    const level = Levels.find(l => l.id === this.levelId);

    this.puzzle = new SlidePuzzle(
      level.grid,
      Assets.levelImages[level.id],
      150,
      () => this.onPuzzleSolved()
    );
  }

  onPuzzleSolved() {
    manager.register("win", new WinScreen(this.timer, this.levelId + 1));
    manager.switchTo("win", true);
  }

  draw() {
    imageMode(CORNER);
    image(Assets.gamebackgroundImg, 0, 0, width, height);

    push();
    translate(
      width / 2 - (this.puzzle.gridSize * this.puzzle.tileSize) / 2,
      height / 2 - (this.puzzle.gridSize * this.puzzle.tileSize) / 2
    );
    this.puzzle.draw();
    pop();

    if (frameCount % 60 === 0) {
      this.timer++;
    }
  }

  keyPressed() {
    // RIGHT SHIFT → return to menu
    if (keyCode === SHIFT && key === "Shift") {
      manager.switchTo("menu", true);
      return;
    }

    // ENTER → skip level
    if (keyCode === ENTER) {
      manager.register("win", new WinScreen(this.timer, this.levelId + 1));
      manager.switchTo("win", true);
      return;
    }

    // Normal puzzle controls
    this.puzzle.handleInput(key);
  }
}
