class MenuScreen extends Screen {
  constructor() {
    super();
    this.mainMenuBg = Assets.backgroundImg;
    this.wildSlideLogo = Assets.logoImg;
    this.tree1Img = Assets.tree1Img;
    this.tree2Img = Assets.tree2Img;
    this.leavesImg = Assets.leavesImg;
    this.treeOffset = 0;
    this.leafOffset = 0;
    this.treeScale = 0.78;
  }

  onEnter() {
    console.log("Menu is now active");

    this.startBtn = new Button(
      width * 0.5,
      height * 0.45,
      246 * 0.9,
      119 * 0.9,
      Assets.playBtn
    );

    this.settingsBtn = new Button(
      width * 0.5,
      height * 0.6,
      236 * 0.9,
      119 * 0.9,
      Assets.settingsBtn
    );
  }

  draw() {
    imageMode(CORNER);
    image(this.mainMenuBg, 0, 0, width, height);
    this.treeOffset += 0.01;
    this.leafOffset += 0.04;
    let treeWind = Math.sin(this.treeOffset) * 17;
    let leafWind = Math.sin(this.leafOffset) * 10;
    let tree1W = this.tree1Img.width * this.treeScale;
    let tree1H = this.tree1Img.height * this.treeScale;
    let tree2W = this.tree2Img.width * this.treeScale;
    let tree2H = this.tree2Img.height * this.treeScale;
    imageMode(CORNER);
    image(
      this.tree1Img,
      -70 + treeWind,
      height - tree1H * 0.95,
      tree1W,
      tree1H
    );
    image(
      this.tree2Img,
      width - tree2W + 70 + treeWind,
      height - tree2H * 0.95,
      tree2W,
      tree2H
    );
    imageMode(CORNER);
    image(
      this.leavesImg,
      leafWind - 20,
      -10,
      width + 35,
      height + 15
    );
    imageMode(CENTER);
    image(
      this.wildSlideLogo,
      width / 2,
      height * 0.3,
      this.wildSlideLogo.width,
      this.wildSlideLogo.height
    );
    this.startBtn.draw();
    this.settingsBtn.draw();
  }

  keyPressed() {
    if (keyCode === ENTER) {
      manager.switchTo("game1", true);
      SoundManager.playSfx("testing", 0.5);
    }
  }

  mousePressed() {
    if (this.startBtn.isHovered()) {
      manager.switchTo("game1", true);
      SoundManager.playSfx("testing", 0.5);
    }

    if (this.settingsBtn.isHovered()) {
      manager.switchTo("settings", true);
    }
  }
}