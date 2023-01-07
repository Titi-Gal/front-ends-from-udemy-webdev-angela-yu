function diceRoll(sides) {
    return Math.floor(Math.random() * sides + 1)
}

let dice1roll = diceRoll(6);
let dice2roll = diceRoll(6);

document.querySelector('.img1').setAttribute('src', 'images/dice' + dice1roll  + '.png');
document.querySelector('.img2').setAttribute('src', 'images/dice' + dice2roll  + '.png');

if ( dice1roll > dice2roll) {
    document.querySelector('h1').innerHTML = "Player 1 Wins!";
}
else if ( dice1roll < dice2roll) {
    document.querySelector('h1').innerHTML = "Player 2 Wins!";
}
else {
    document.querySelector('h1').innerHTML = "Draw!";
}
 