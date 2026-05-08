const Assets = {
  playBtn: null,
  exitBtn: null,
  settingsBtn: null,
  logoImg: null,
  backgroundImg: null,
  tree1Img: null,
  tree2Img: null,
  leavesImg: null,
  animalsImg: null,
  levelImages: {}
};

function loadAssets() {
  Assets.playBtn = loadImage('assets/ui-assets/playbtn.png');
  Assets.settingsBtn = loadImage('assets/ui-assets/settingsbtn.png');
  Assets.xBtn = loadImage('assets/ui-assets/xBtn.png');
  Assets.level1Btn = loadImage('assets/ui-assets/level1Btn.png');
  Assets.level2Btn = loadImage('assets/ui-assets/level2Btn.png');
  Assets.level3Btn = loadImage('assets/ui-assets/level3Btn.png');
  Assets.level4Btn = loadImage('assets/ui-assets/level4Btn.png');
  Assets.level5Btn = loadImage('assets/ui-assets/level5Btn.png');
  Assets.level6Btn = loadImage('assets/ui-assets/level6Btn.png');
  Assets.level7Btn = loadImage('assets/ui-assets/level7Btn.png');
  Assets.level8Btn = loadImage('assets/ui-assets/level8Btn.png');
  Assets.level9Btn = loadImage('assets/ui-assets/level9Btn.png');
  Assets.lockImg = loadImage('assets/ui-assets/lockImg.png');


  Assets.logoImg = loadImage('assets/decoratives/wildslidelogo2.png'); // LEFT OFF HERE
  Assets.backgroundImg = loadImage('assets/decoratives/background.png');
  Assets.gameBgImg = loadImage('assets/decoratives/gamebackground.png');
  Assets.levelsBg = loadImage('assets/decoratives/levelsBg.png');
  Assets.endBg = loadImage('assets/decoratives/endBg.png');
  Assets.tree1Img = loadImage('assets/decoratives/tree1.png');
  Assets.tree2Img = loadImage('assets/decoratives/tree2.png');
  Assets.leavesImg = loadImage('assets/decoratives/leaves.png');
  Assets.animalsImg = loadImage('assets/decoratives/animals.png');
  Assets.stars3 = loadImage('assets/decoratives/stars3.png');
  Assets.stars2 = loadImage('assets/decoratives/stars2.png');
  Assets.stars1 = loadImage('assets/decoratives/stars1.png');
  Assets.floor = loadImage('assets/decoratives/floor.png');
  Assets.leaves2 = loadImage('assets/decoratives/leaves2.png');
  Assets.levelBackground = loadImage('assets/decoratives/levelbackground.png');
  Assets.monkey = loadImage('assets/decoratives/monkey.png');
  Assets.tree = loadImage('assets/decoratives/tree.png');
  Assets.winBg = loadImage('assets/decoratives/winBg.png');

  Levels.forEach(level => {
    Assets.levelImages[level.id] = loadImage(level.image);
  });
}
