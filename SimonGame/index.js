let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern;
let userPattern;
let score;
let inGame = false;

//keyboard if not in game starts game
$('body').on("keydown", function() {
    if (!inGame) {
        $('body').removeClass("game-over");
        gamePattern = [];
        userPattern = [];
        score = 0;
        $('h1').html("Score: " + score);
        gameMove();
        inGame = true;
        }
    });

//click if in game process user move   
$('.btn').on("click", function () {
    if (inGame) {
        userMove($(this).attr('id'));
        }
    });

function userMove(userButtonColour) {
    //stores in user array, animate and ckecks move
    userPattern.push(userButtonColour);
    animatePlaySound(userButtonColour);
    checkUserMove();
}

function gameMove() {
    //generate move, stores in game array and change score
    let gameButtonColour = buttonColours[Math.floor(Math.random() * 4)];
    gamePattern.push(gameButtonColour);
    animatePlaySound(gameButtonColour);
}
      
function checkUserMove() {

    //user current move is in game pattern
    if (userPattern[userPattern.length - 1] === gamePattern[userPattern.length - 1]) {
        //user current move is the last in game pattern
        if (userPattern.length === gamePattern.length) {
            //reset user moves and get a new game move
            userPattern = [];
            score += 1;
            $('h1').html("Score: " + score);
            setTimeout(gameMove, 500);
        }

    //user current move not in game pattern end game
    } else {
        //background animation
        $('body').addClass("game-over");

        //play audio wrong
        let audio = new Audio("sounds/endgame.mp3");
        audio.play();
        console.log( );
        $('h1').html("Score: " + score + "!<br>Press Any Key to Restart");

        inGame = false;
    }
}

function animatePlaySound(buttonColour) {
    $("#" + buttonColour).fadeIn(100).fadeOut(100).fadeIn(100);
    let audio = new Audio("sounds/" + buttonColour + ".mp3");
    audio.play();
}
