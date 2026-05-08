class WinScreen extends Screen {
  constructor(playTime, nextLevel) {
    super();
    this.winTitles = ["Nice!", "Fantastic!", "Awesome!"];
    this.winTitle = random(this.winTitles);
    this.playTime = playTime;
    this.nextLevel = int(nextLevel);

    this.sparkles = [];
    for (let i = 0; i < 35; i++) {
      this.sparkles.push({
        x: random(width),
        y: random(height),
        size: random(4, 12),
        speed: random(0.3, 1),
        alpha: random(100, 255)
      });
    }
  }

  onEnter() {
    console.log("win screen active");

    this.button = createButton("Continue");
    this.button.mousePressed(() => {
      manager.register("game", new GameScreen(this.nextLevel));
      manager.switchTo("levels", true);
    });
  }

  onExit() {
    if (this.button) {
      this.button.remove();
      this.button = null;
    }
  }

  draw() {
    imageMode(CORNER);
    image(Assets.winBg, 0, 0, width, height);

    fill(0, 150);
    rect(0, 0, width, height);

    this.drawSparkles();

    fill(209, 246, 168);
    rect(width / 2 - 150, height / 2 - 180, 300, 400, 10);

    fill(0);
    textAlign(CENTER, CENTER);

    textSize(32);
    textFont('Courier New');
    text(this.winTitle, width / 2, height / 2 - 80);

    textSize(20);
    text("Time: " + this.playTime + "s", width / 2, height / 2 + 80);

    this.drawStars();

    if (this.button) {
      this.button.position(width / 2 - 40, height / 2 + 160);
    }
  }

  drawSparkles() {
    noStroke();

    for (let sparkle of this.sparkles) {
      fill(255, 255, 180, sparkle.alpha);
      ellipse(sparkle.x, sparkle.y, sparkle.size);

      stroke(255, 255, 180, sparkle.alpha);
      line(sparkle.x - sparkle.size, sparkle.y, sparkle.x + sparkle.size, sparkle.y);
      line(sparkle.x, sparkle.y - sparkle.size, sparkle.x, sparkle.y + sparkle.size);
      noStroke();

      sparkle.y -= sparkle.speed;
      sparkle.alpha -= 1.5;

      if (sparkle.alpha <= 0 || sparkle.y < 0) {
        sparkle.x = random(width);
        sparkle.y = random(height);
        sparkle.size = random(4, 12);
        sparkle.speed = random(0.3, 1);
        sparkle.alpha = 255;
      }
    }
  }

  drawStars() {
    imageMode(CENTER);

    let starsW = Assets.stars3.width;
    let starsH = Assets.stars3.height;

    if (this.playTime <= 300) {
      image(Assets.stars3, width / 2, height / 2, starsW * 0.3, starsH * 0.3);
    } else if (this.playTime <= 600) {
      image(Assets.stars2, width / 2, height / 2, starsW * 0.3, starsH * 0.3);
    } else {
      image(Assets.stars1, width / 2, height / 2, starsW * 0.3, starsH * 0.3);
    }
  }
}