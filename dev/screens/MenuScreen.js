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
    this.treeScale = 0.57;
  }

  onEnter() {
    console.log("Menu is now active");

    this.startBtn = new Button(width * 0.5, height * 0.45, 199, 109, Assets.playBtn);
    this.settingsBtn = new Button(width * 0.5, height * 0.6, 199, 109, Assets.settingsBtn);
    this.exitBtn = new Button(width * 0.5, height * 0.75, 201, 109, Assets.exitBtn);
  }

  draw() {
    imageMode(CENTER);
    image(
      this.mainMenuBg,
      width / 2,
      height / 2,
      this.mainMenuBg.width * 0.8,
      this.mainMenuBg.height * 0.8
    );
    this.treeOffset += 0.01;
    this.leafOffset += 0.04;
    let treeWind = Math.sin(this.treeOffset) * 2;
    let leafWind = Math.sin(this.leafOffset) * 3;
    let tree1W = this.tree1Img.width * this.treeScale;
    let tree1H = this.tree1Img.height * this.treeScale;
    let tree2W = this.tree2Img.width * this.treeScale;
    let tree2H = this.tree2Img.height * this.treeScale;
    image(
      this.tree1Img,
      -70 + treeWind,
      height - tree1H,
      tree1W,
      tree1H
    );
    image(
      this.tree2Img,
      width - tree2W + 70 + treeWind,
      height - tree2H,
      tree2W,
      tree2H
    );
    image(
      this.leavesImg,
      leafWind,
      0,
      width,
      height
    );
    image(this.mainMenuBg, width / 2, height / 2, this.mainMenuBg.width * 0.8, this.mainMenuBg.height * 0.8)

    imageMode(CENTER);
    image(this.wildSlideLogo, width / 2, height * 0.2, this.wildSlideLogo.width * 0.7, this.wildSlideLogo.height * 0.7);

    this.startBtn.draw();
    this.settingsBtn.draw();
    this.exitBtn.draw();
  }

  keyPressed() {
    if (keyCode === ENTER) {
      manager.switchTo("game", true);
      SoundManager.playSfx("testing", 0.5);
    }
  }

  mousePressed() {
    if (this.startBtn.isHovered()) {
      manager.switchTo("game", true);
      SoundManager.playSfx("testing", 0.5);
    }
  }
}