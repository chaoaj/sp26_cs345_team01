class MenuScreen extends Screen {
  constructor() {
    super();
    this.wildSlideLogo = loadImage("devassets/wild_slide.png");
    this. startButton = loadImage();
  }
  onEnter() {
    console.log("Menu is now active");
  }

  draw() {
    console.log("rendering menu");
    background(103, 127, 81);
    
    imageMode(CENTER);
    image(this.wildSlideLogo, width/2, height * 0.2, this.wildSlideLogo.width/2, this.wildSlideLogo.height/2);
  }

  /*
  draw() {
    background(30);
    
    imageMode(CENTER);
    image(this.wildSlideLogo, width / 2, height * 0.3);

    textAlign(CENTER, CENTER);
    textSize(32);
    fill(255);
    text("Press ENTER to Play", width / 2, height / 2);
  } */

  keyPressed() {
    if (keyCode === ENTER) {
      manager.switchTo("game");
      SoundManager.playSfx("testing", 0.1);
    }
  }
}