class SettingsScreen extends Screen {
    constructor() {
        super();

        this.volume = window.gameVolume ?? 1;
        this.numbersMode = window.numbersMode ?? false;

        this.button = null;
        this.draggingVolume = false;
    }

    onEnter() {
        console.log("settings screen active");

        this.button = createButton("Exit");
        this.button.mousePressed(() => {
            manager.switchTo("menu", true);
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
        image(Assets.backgroundImg, 0, 0, width, height);

        fill(0, 150);
        rect(0, 0, width, height);

        fill(209, 246, 168);
        let popupX = width / 2 - 150;
        let popupY = height / 2 - 180;
        rect(popupX, popupY, 300, 400, 10);

        fill(0);
        textAlign(CENTER, CENTER);
        textSize(32);
        textFont('Courier New');
        text("Settings", width / 2, height / 2 - 120);

        textSize(20);
        text("Music Volume", width / 2, height / 2 - 40);

        let sliderX = width / 2 - 120;
        let sliderY = height / 2;
        let sliderW = 240;

        if (this.draggingVolume && mouseIsPressed) {
            this.volume = (mouseX - sliderX) / sliderW;
            this.volume = constrain(this.volume, 0, 1);
            window.gameVolume = this.volume;
            SoundManager.setMusicVolume(this.volume);
        }

        if (this.draggingVolume && !mouseIsPressed) {
            this.draggingVolume = false;
        }

        fill(120);
        rect(sliderX, sliderY, sliderW, 10, 5);

        fill(0);
        let knobX = sliderX + this.volume * sliderW;
        rect(knobX - 8, sliderY - 8, 16, 26, 5);

        fill(0);
        text("Numbers Mode", width / 2, height / 2 + 80);

        fill(this.numbersMode ? "lightgreen" : "red");
        rect(width / 2 - 50, height / 2 + 110, 100, 40, 5);

        fill(0);
        textSize(20);
        text(this.numbersMode ? "ON" : "OFF", width / 2, height / 2 + 130);

        if (this.button) {
            this.button.position(width / 2 - 20, height / 2 + 160);
        }
    }

    mousePressed() {
        let sliderX = width / 2 - 120;
        let sliderY = height / 2;
        let sliderW = 240;

        let knobX = sliderX + this.volume * sliderW;

        if (
            mouseX > knobX - 12 &&
            mouseX < knobX + 12 &&
            mouseY > sliderY - 20 &&
            mouseY < sliderY + 30
        ) {
            this.draggingVolume = true;
        }

        if (
            mouseX > sliderX &&
            mouseX < sliderX + sliderW &&
            mouseY > sliderY - 20 &&
            mouseY < sliderY + 40
        ) {
            this.volume = (mouseX - sliderX) / sliderW;
            this.volume = constrain(this.volume, 0, 1);
            window.gameVolume = this.volume;
            SoundManager.setMusicVolume(this.volume);

            this.draggingVolume = true;
        }

        if (
            mouseX > width / 2 - 50 &&
            mouseX < width / 2 + 50 &&
            mouseY > height / 2 + 110 &&
            mouseY < height / 2 + 150
        ) {
            this.numbersMode = !this.numbersMode;
            window.numbersMode = this.numbersMode;
        }
    }
}
