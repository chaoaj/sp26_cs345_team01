class GameScreen extends Screen {
 constructor(levelId = 1) {
   super();
   this.levelId = levelId;
   this.showPopup = false;
   this.timer = 0;


   this.windOffset = 0;
   this.leafOffset = 0;
   this.monkeyOffset = 0;
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


 drawAnimatedBackground() {
   this.windOffset += 0.01;
   this.leafOffset += 0.03;
   this.monkeyOffset += 0.02;


   let treeWind = Math.sin(this.windOffset) * 12;
   let floorWind = Math.sin(this.windOffset) * 6;
   let leafWind = Math.sin(this.leafOffset) * 10;


   let monkeySwingX = Math.sin(this.monkeyOffset) * 15;
   let monkeySwingY = Math.cos(this.monkeyOffset) * 8;


   imageMode(CORNER);


   image(Assets.levelBackground, 0, 0, width, height);


   let treeScale = 0.82;
   let treeW = Assets.tree.width * treeScale;
   let treeH = Assets.tree.height * treeScale;


   image(
     Assets.tree,
     width - treeW + 120 + treeWind,
     height - treeH * 0.95,
     treeW,
     treeH
   );


   let floorScale = 0.77;


   let floorW = Assets.floor.width * floorScale;
   let floorH = Assets.floor.height * floorScale;


   image(
     Assets.floor,
     -(floorW - width) / 2 + floorWind, // centers image horizontally
     height - floorH,              // vertical position
     floorW,
     floorH
   );


   image(
     Assets.leaves2,
     leafWind - 20,
     -10,
     width + 35,
     height + 15
   );


   if (Assets.monkey) {
     imageMode(CENTER);


     let monkeyScale = 0.54;
     let monkeyW = Assets.monkey.width * monkeyScale;
     let monkeyH = Assets.monkey.height * monkeyScale;


     image(
       Assets.monkey,
       width * 0.62 + monkeySwingX,
       height * 0.35 + monkeySwingY,
       monkeyW,
       monkeyH
     );
   }
 }


 draw() {
   this.drawAnimatedBackground();


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

