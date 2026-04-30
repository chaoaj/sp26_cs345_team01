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
  }

  onPuzzleSolved() {
    manager.register("win", new WinScreen(this.timer, this.levelId + 1));
    manager.switchTo("win", true);
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
  }

  keyPressed() {
    if (keyCode === SHIFT && key === "Shift") {
      manager.switchTo("menu", true);
      return;
    }

    if (keyCode === ENTER) {
      manager.register("win", new WinScreen(this.timer, this.levelId + 1));
      manager.switchTo("win", true);
      return;
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
  }
}
