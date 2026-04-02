let screenManager;

function preload() {
  SoundManager.loadSfx("testing", "../assets/ahh.wav");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("monospace");

  // handle screens

  screenManager = new ScreenManager();
  createDemoScreens(screenManager);
  screenManager.setScreen("home");
}

function draw() {
  screenManager.update(deltaTime / 1000);
  screenManager.render();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  if (screenManager) {
    screenManager.resize(width, height);
  }
}

function mousePressed() {
  if (screenManager) {
    screenManager.mousePressed();
  }
}

function keyPressed() {
  if (screenManager) {
    screenManager.keyPressed();
  }
}
