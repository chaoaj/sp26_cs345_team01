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
  Assets.playBtn = loadImage('assets/ui-assets/playbtn.png');
  Assets.exitBtn = loadImage('assets/ui-assets/exitbtn.png');
  Assets.settingsBtn = loadImage('assets/ui-assets/settingsbtn.png');

  Assets.logoImg = loadImage('assets/decoratives/wildslidelogo2.png'); // LEFT OFF HERE
  Assets.backgroundImg = loadImage('assets/decoratives/background.png');
  Assets.tree1Img = loadImage('assets/decoratives/tree1.png');
  Assets.tree2Img = loadImage('assets/decoratives/tree2.png');
  Assets.leavesImg = loadImage('assets/decoratives/leaves.png');
  Assets.stars3 = loadImage('assets/decoratives/stars3.png');
  Assets.stars2 = loadImage('assets/decoratives/stars2.png');
  Assets.stars1 = loadImage('assets/decoratives/stars1.png');

  Levels.forEach(level => {
    Assets.levelImages[level.id] = loadImage(level.image);
  });
}
