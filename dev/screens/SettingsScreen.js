class SettingsScreen extends Screen {
    constructor() {
        super();
    }

    onEnter() {
        console.log("settings screen active");

        this.button = createButton("Exit");
        this.button.mousePressed(() => {
            manager.switchTo("menu", true); // slayr - Love Blur
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

        fill(209, 246, 168);

        let popupX = width / 2 - 150;
        let popupY = height / 2 - 180;
        rect(popupX, popupY, 300, 400, 10);

        // text
        fill(0);
        textAlign(CENTER, CENTER);

        textSize(32);
        textFont('Courier New');
        text("Settings", width / 2, height / 2 - 120);

        textSize(20);
        text("tile number option", width / 2, height / 2 + 40);
        text("mute setting here", width / 2, height / 2 + 80);

        if (this.button) {
            this.button.position(width / 2 - 20, height / 2 + 160);
        }
    }
}