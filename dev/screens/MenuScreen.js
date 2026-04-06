class MenuScreen extends Screen {
  constructor() {
    super();
    this.wildSlideLogo = loadImage("devassets/wild_slide.png");
    this.playButton = loadImage("devassets/playbtn.png");

    this.buttons = new ButtonManager();
  }

  onEnter() {
    console.log("Menu is now active");

    // Create buttons when entering the screen

  }

  draw() {
    background(103, 127, 81);

    imageMode(CENTER);
    image(this.wildSlideLogo, width / 2, height * 0.2, this.wildSlideLogo.width * 0.7, this.wildSlideLogo.height * 0.7);
    image(this.playButton, width / 2, height * 0.45, 199, 109)
  }

<<<<<<< Updated upstream
=======
  /*
  draw() {
    background(30);
    
    imageMode(CENTER);
    image(this.wildSlideLogo, width / 2, height * 0.3);

    textAlign(CENTER, CENTER);
    textSize(32);
    fill(255);
    text("Press ENTER to Play", width / 2, height / 2);
  } 
  */

>>>>>>> Stashed changes
  keyPressed() {
    if (keyCode === ENTER) {
      manager.switchTo("game");
      SoundManager.playSfx("testing", 0.1);
    }
  }
}