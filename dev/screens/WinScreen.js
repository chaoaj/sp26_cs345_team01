class WinScreen extends Screen {
  constructor(playTime, nextLevel) {
    super();
    this.winTitles = ["Nice!", "Fantastic!", "Awesome!"];
    this.winTitle = random(this.winTitles);
    this.playTime = playTime;
    this.nextLevel = str(nextLevel)
  }

  onEnter() {
    console.log("win screen active");

    this.button = createButton("Continue");
    this.button.mousePressed(() => {
      //manager.switchTo("game2", true);
      manager.switchTo("game" + this.nextLevel, true);
    });
  }

  onExit() {
    if (this.button) {
      this.button.remove();
      this.button = null;
    }
  }

  draw() {
    // background
    imageMode(CORNER);
    image(Assets.backgroundImg, 0, 0, width, height);

    fill(0, 150);
    rect(0, 0, width, height);

    fill(209, 246, 168); //#D1F6A8
    rect(width / 2 - 150, height / 2 - 180, 300, 400, 10);

    // text
    fill(0);
    textAlign(CENTER, CENTER);

    textSize(32);
    textFont('Courier New');
    text(this.winTitle, width / 2, height / 2 - 80);

    textSize(20);
    text("Time: " + this.playTime, width / 2, height / 2 + 80);

    this.drawStars();

    if (this.button) {
      this.button.position(width / 2 - 40, height / 2 + 160);
    }
  }

  drawStars() {
    imageMode(CENTER);
    let starsW = Assets.stars3.width;
    let starsH = Assets.stars3.height;
    if (this.playTime <= 300) {
      image(Assets.stars3, width / 2, height / 2, starsW * 0.3, starsH * 0.3);
    }
    else if (this.playTime <= 600) {
      image(Assets.stars2, width / 2, height / 2, starsW * 0.3, starsH * 0.3);
    }
    else {
      image(Assets.stars1, width / 2, height / 2, starsW * 0.3, starsH * 0.3);
    }
  }
}