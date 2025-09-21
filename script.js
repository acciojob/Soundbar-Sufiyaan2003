window.onload = () => {
    // Scroll the first button into view to avoid Cypress visibility error
    const firstBtn = document.querySelector('.btn');
    if (firstBtn) {
        firstBtn.scrollIntoView({ behavior: 'auto', block: 'center' });
    }
};

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
