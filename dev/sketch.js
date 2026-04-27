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
  manager.register("game1", new GameScreen(1));
  manager.register("game2", new GameScreen(2));
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
