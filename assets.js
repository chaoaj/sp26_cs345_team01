const Assets = {
  playBtn: null,
  exitBtn: null,
  settingsBtn: null,
  logoImg: null,
  backgroundImg: null
};

function loadAssets() {
  Assets.playBtn = loadImage('assets/playbtn.png');
  Assets.exitBtn = loadImage('assets/exitbtn.png');
  Assets.settingsBtn = loadImage('assets/settingsbtn.png');
  Assets.logoImg = loadImage('assets/wild_slide.png');
  Assets.backgroundImg = loadImage('assets/background.png');
}