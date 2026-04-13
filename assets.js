const Assets = {
  playBtn: null,
  exitBtn: null,
  settingsBtn: null,
  logoImg: null,
  backgroundImg: null,
  tree1Img: null,
  tree2Img: null,
  leavesImg: null,
  levelImages: {}
};

function loadAssets() {
  Assets.playBtn = loadImage('assets/playbtn.png');
  Assets.exitBtn = loadImage('assets/exitbtn.png');
  Assets.settingsBtn = loadImage('assets/settingsbtn.png');
  Assets.logoImg = loadImage('assets/wild_slide.png');
  Assets.backgroundImg = loadImage('assets/background.png');
  Assets.tree1Img = loadImage('assets/tree1.png');
  Assets.tree2Img = loadImage('assets/tree2.png');
  Assets.leavesImg = loadImage('assets/leaves.png');

  Levels.forEach(level => {
    Assets.levelImages[level.id] = loadImage(level.image);
  });
}