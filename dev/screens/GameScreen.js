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
      () => this.onPuzzleSolved(),
      level.rotateTiles ?? false,
      level.rotateCount ?? 0
    );

    this.xBtn = new Button(
      40,
      40,
      252 * 0.3,
      225 * 0.3,
      Assets.xBtn
    );
  }

  onPuzzleSolved() {
    if (this.levelId + 1 > 9) {
      manager.register("endScreen", new EndScreen());
      manager.switchTo("endScreen", true);
    }
    manager.register("win", new WinScreen(this.timer, this.levelId + 1));
    manager.switchTo("win", true);
    Levels[this.levelId].isLocked = false;
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

    if (frameCount % 60 === 0) {
      this.timer++;
    }

    this.xBtn.update();
  }

  keyPressed() {
    if (keyCode === ENTER) {
      if (this.levelId + 1 > 9) {
        manager.register("endScreen", new EndScreen());
        manager.switchTo("endScreen", true);
      }
      Levels[this.levelId].isLocked = false;
      manager.register("win", new WinScreen(this.timer, this.levelId + 1));
      manager.switchTo("win", true);
    }
    this.puzzle.handleInput(key);
  }

  mousePressed() {
    const offsetX = width / 2 - (this.puzzle.gridSize * this.puzzle.tileSize) / 2;
    const offsetY = height / 2 - (this.puzzle.gridSize * this.puzzle.tileSize) / 2;

    const mx = mouseX - offsetX;
    const my = mouseY - offsetY;

    if (
      mx >= 0 && my >= 0 &&
      mx < this.puzzle.gridSize * this.puzzle.tileSize &&
      my < this.puzzle.gridSize * this.puzzle.tileSize
    ) {
      this.puzzle.mousePressed(mx, my);
    }

    if (this.xBtn.isHovered()) {
      manager.switchTo("levels", true);
    }
  }
}
