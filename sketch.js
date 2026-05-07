function preload() {
  SoundManager.loadSfx("testing", "assets/sfxs/startsound.wav");
  SoundManager.loadSfx("completion", "assets/sfxs/ahh.wav");
  SoundManager.loadMusic("bgmusic", "assets/bgmusic/testingbg.mp3");
  
  loadAssets();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("monospace");

  manager.register("menu", new MenuScreen());
  manager.register("levels", new LevelScreen());
  manager.register("game1", new GameScreen(1));
  manager.register("game2", new GameScreen(2));
  manager.register("game3", new GameScreen(3));
  manager.register("game4", new GameScreen(4));
  manager.register("game5", new GameScreen(5));
  manager.register("game6", new GameScreen(6));
  manager.register("game7", new GameScreen(7));
  manager.register("game8", new GameScreen(8));
  manager.register("game9", new GameScreen(9));

  manager.register("settings", new SettingsScreen());

  manager.fadeColor = 0;
  manager.fadeSpeed = 20;

  manager.switchTo("menu", false);
}

function draw() {
  manager.draw();
}

function keyPressed() {
  manager.keyPressed();
}

function mousePressed() {
  manager.mousePressed();
}
