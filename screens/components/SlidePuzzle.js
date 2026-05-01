class SlidePuzzle {
  constructor(gridSize, img, tileSize = 150, onSolved = null, rotateTiles = false, rotateCount = 0) {
    this.gridSize = gridSize;
    this.img = img;
    this.tileSize = tileSize;
    this.onSolved = onSolved;

    this.rotateTiles = rotateTiles;
    this.rotateCount = rotateCount;

    this.sliceW = this.img.width / this.gridSize;
    this.sliceH = this.img.height / this.gridSize;

    this.tiles = [];
    this.blank = { x: gridSize - 1, y: gridSize - 1 };

    this.createTiles();

    if (this.rotateTiles && this.rotateCount > 0) {
      this.applyRandomRotations();
    }

    this.shuffle(200);
  }

  createTiles() {
    this.tiles = [];

    for (let y = 0; y < this.gridSize; y++) {
      for (let x = 0; x < this.gridSize; x++) {
        if (x === this.gridSize - 1 && y === this.gridSize - 1) continue;

        this.tiles.push({
          x,
          y,
          displayX: x,
          displayY: y,
          correctX: x,
          correctY: y,
          rotation: 0,
          targetRotation: 0
        });
      }
    }
  }

  applyRandomRotations() {
    let indices = [...Array(this.tiles.length).keys()];
    indices.sort(() => Math.random() - 0.5);

    for (let i = 0; i < this.rotateCount; i++) {
      let tile = this.tiles[indices[i]];
      tile.rotation = 180;
      tile.targetRotation = 180;
    }
  }

  shuffle(times) {
    for (let i = 0; i < times; i++) {
      const moves = this.getValidMoves();
      const move = random(moves);
      this.moveTile(move.x, move.y);
    }
  }

  getValidMoves() {
    const moves = [];
    const { x, y } = this.blank;

    if (x > 0) moves.push({ x: x - 1, y });
    if (x < this.gridSize - 1) moves.push({ x: x + 1, y });
    if (y > 0) moves.push({ x, y: y - 1 });
    if (y < this.gridSize - 1) moves.push({ x, y: y + 1 });

    return moves;
  }

  moveTile(x, y) {
    const tile = this.tiles.find(t => t.x === x && t.y === y);
    if (!tile) return;

    const oldBlank = { ...this.blank };

    this.blank.x = tile.x;
    this.blank.y = tile.y;

    tile.x = oldBlank.x;
    tile.y = oldBlank.y;
  }

  handleInput(key) {
    let target = null;

    if (key === 'ArrowDown' || key === 's') target = { x: this.blank.x, y: this.blank.y - 1 };
    if (key === 'ArrowUp' || key === 'w') target = { x: this.blank.x, y: this.blank.y + 1 };
    if (key === 'ArrowRight' || key === 'd') target = { x: this.blank.x - 1, y: this.blank.y };
    if (key === 'ArrowLeft' || key === 'a') target = { x: this.blank.x + 1, y: this.blank.y };

    if (!target) return;

    this.moveTile(target.x, target.y);

    if (this.isSolved()) {
      SoundManager.playSfx("testing", 0.7);
      if (this.onSolved) this.onSolved();
    }
  }

  mousePressed(mx, my) {
    const gx = floor(mx / this.tileSize);
    const gy = floor(my / this.tileSize);

    const tile = this.tiles.find(t => t.x === gx && t.y === gy);
    if (!tile) return;

    tile.targetRotation = tile.targetRotation === 0 ? 180 : 0;
  }

  isSolved() {
    return this.tiles.every(t =>
      t.x === t.correctX &&
      t.y === t.correctY &&
      Math.abs(t.rotation) < 1
    );
  }

  draw() {
    imageMode(CORNER);

    this.tiles.forEach(tile => {
      tile.displayX = lerp(tile.displayX, tile.x, 0.35);
      tile.displayY = lerp(tile.displayY, tile.y, 0.35);

      tile.rotation = lerp(tile.rotation, tile.targetRotation, 0.25);

      const sx = tile.correctX * this.sliceW;
      const sy = tile.correctY * this.sliceH;

      const dx = tile.displayX * this.tileSize;
      const dy = tile.displayY * this.tileSize;

      push();
      translate(dx + this.tileSize / 2, dy + this.tileSize / 2);
      rotate(radians(tile.rotation));

      image(
        this.img,
        -this.tileSize / 2, -this.tileSize / 2,
        this.tileSize, this.tileSize,
        sx, sy, this.sliceW, this.sliceH
      );

      if (window.numbersMode && !(tile.x === this.blank.x && tile.y === this.blank.y)) {
        fill(0);
        textSize(28);
        textAlign(RIGHT, TOP);

        let tileNumber = tile.correctY * this.gridSize + tile.correctX + 1;

        text(
          tileNumber,
          this.tileSize / 2 - 6,
          -this.tileSize / 2 + 4
        );
      }

      pop();
    });

    noFill();
    noStroke();
    rect(
      this.blank.x * this.tileSize,
      this.blank.y * this.tileSize,
      this.tileSize,
      this.tileSize
    );
  }
}
