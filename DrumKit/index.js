let drumButtons = Array.from(document.querySelectorAll('.drum'));

function playAudio(filepath) {
    let audio = new Audio(filepath);
    audio.loop = false;
    audio.play();
}

function playDrumAudio(buttonClass) {
    switch (buttonClass) {
        case "w":
            playAudio("sounds/crash.mp3");
            break;
        case "a":
            playAudio("sounds/kick-bass.mp3");
            break;
        case "s":
            playAudio("sounds/snare.mp3");
            break;
        case "d":
            playAudio("sounds/tom-1.mp3");
            break;
        case "j":
            playAudio("sounds/tom-2.mp3");
            break;
        case "k":
            playAudio("sounds/tom-3.mp3");
            break;
        case "l":
            playAudio("sounds/tom-4.mp3");
            break;
        default: console.log(buttonClass)
    }
}

function buttonAnimation(buttonClass) {
    document.querySelector("." +  buttonClass).classList.add("pressed");
    setTimeout(function() {
        document.querySelector("." +  buttonClass).classList.remove("pressed");
    }, 100);
}


for (let i = 0; i < drumButtons.length; i++) {
    drumButtons[i].addEventListener("click", function() {
        let buttonClass = this.classList[0];
        playDrumAudio(buttonClass);    
        buttonAnimation(buttonClass);
    });
}

document.addEventListener("keydown", function(event) {
    playDrumAudio(event.key);
    buttonAnimation(event.key);    
});