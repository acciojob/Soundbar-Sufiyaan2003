const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

function stopAll() {
    sounds.forEach(sound => {
        const audio = document.getElementById(`audio-${sound}`);
        if(audio) {
            audio.pause();
            audio.currentTime = 0;
        }
    });
}

document.querySelectorAll(".btn").forEach((button, idx) => {
    button.addEventListener("click", () => {
        stopAll();
        const audio = document.getElementById(`audio-${sounds[idx]}`);
        if (audio) {
            audio.currentTime = 0;
            audio.play();
        }
    });
});

document.querySelector(".stop").addEventListener("click", () => {
    stopAll();
});
