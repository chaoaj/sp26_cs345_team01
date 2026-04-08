const Assets = {
  playBtn: null,
  exitBtn: null,
  settingsBtn: null,
  logoImg: null,
  backgroundImg: null
};

function loadAssets() {
  Assets.playBtn = loadImage('devassets/playbtn.png');
  Assets.exitBtn = loadImage('devassets/exitbtn.png');
  Assets.settingsBtn = loadImage('devassets/settingsbtn.png');
  Assets.logoImg = loadImage('devassets/wild_slide.png');
  Assets.backgroundImg = loadImage('devassets/background.png');
}