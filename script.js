//your JS code here. If required.
const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
const audioElements = {};

sounds.forEach(sound => {
    audioElements[sound] = new Audio(`sounds/${sound}.mp3`);
});

const btns = document.querySelectorAll('.btn');
btns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        stopAll();
        audioElements[sounds[idx]].currentTime = 0;
        audioElements[sounds[idx]].play();
    });
});

function stopAll() {
    Object.values(audioElements).forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });
}

document.querySelector('.stop').addEventListener('click', stopAll);
