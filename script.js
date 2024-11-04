var randomNumber = Math.floor(Math.random() * 10) + 1;

var guess;

while (true) {
    guess = prompt("Guess a number between 1 and 10");
    guess = Number(guess);


if (guess === randomNumber) {
    alert("Congratulations! you guessed the right number:" + randomNumber);
    break;
} else if(guess > randomNumber) {
    alert("Too high! Try again.");
} else if(guess < randomNumber) {
    alert("Too Low! Try again.");
}

}