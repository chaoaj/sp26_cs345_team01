const SoundManager = (() => {
    const music = new Map();
    const sfx = new Map();

    let currentMusic = null;
    let currentMusicName = null;

    // NEW: persistent global volume
    let musicVolume = window.gameVolume ?? 1;

    function resolveSound(collection, nameOrSound) {
        if (typeof nameOrSound === "string") {
            return collection.get(nameOrSound) || null;
        }
        return nameOrSound || null;
    }

    function loadMusic(name, path, onSuccess, onError, onProgress) {
        const sound = loadSound(path, onSuccess, onError, onProgress);
        music.set(name, sound);
        return sound;
    }

    function setMusic(name, soundFile) {
        music.set(name, soundFile);
        return soundFile;
    }

    // UPDATED: uses persistent musicVolume
    function playMusic(nameOrSound, volume = musicVolume) {
        const nextMusic = resolveSound(music, nameOrSound);

        if (!nextMusic) {
            console.warn("SoundManager: music not found", nameOrSound);
            return null;
        }

        if (currentMusic && currentMusic !== nextMusic) {
            currentMusic.stop();
        }

        currentMusic = nextMusic;
        currentMusicName = typeof nameOrSound === "string" ? nameOrSound : null;

        currentMusic.setLoop(true);
        currentMusic.setVolume(volume);

        if (!currentMusic.isPlaying()) {
            currentMusic.play();
        }

        return currentMusic;
    }

    function stopMusic() {
        if (currentMusic) currentMusic.stop();
    }

    function pauseMusic() {
        if (currentMusic && currentMusic.isPlaying()) currentMusic.pause();
    }

    function resumeMusic() {
        if (currentMusic && !currentMusic.isPlaying()) currentMusic.play();
    }

    // UPDATED: saves volume + applies it
    function setMusicVolume(volume) {
        musicVolume = volume;
        window.gameVolume = volume; // persist globally

        if (currentMusic) {
            currentMusic.setVolume(volume);
        }
    }

    function getCurrentMusicName() {
        return currentMusicName;
    }

    function loadSfx(name, path, onSuccess, onError, onProgress) {
        const sound = loadSound(path, onSuccess, onError, onProgress);
        sfx.set(name, sound);
        return sound;
    }

    function setSfx(name, soundFile) {
        sfx.set(name, soundFile);
        return soundFile;
    }

    function playSfx(nameOrSound, volume = 1, rate = 1) {
        const sound = resolveSound(sfx, nameOrSound);

        if (!sound) {
            console.warn("SoundManager: sfx not found", nameOrSound);
            return null;
        }

        sound.setLoop(false);
        sound.rate(rate);
        sound.play(0, rate, volume);
        return sound;
    }

    function stopAllSfx() {
        sfx.forEach(sound => sound.stop());
    }

    return {
        loadMusic,
        setMusic,
        playMusic,
        stopMusic,
        pauseMusic,
        resumeMusic,
        setMusicVolume,
        getCurrentMusicName,
        loadSfx,
        setSfx,
        playSfx,
        stopAllSfx,
    };
})();
