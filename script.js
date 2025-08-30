// Selecting difficulty level
let levels = document.getElementById("levels");
let selectedLevel = levels.value; // Should contain first value "Rookie" by default
let attempts = 0;

let score = 20;
let highScore = 0;

let randomNumber = Math.trunc(Math.random() * 20) + 1;
console.log(randomNumber);
localStorage.setItem("randomNum", JSON.stringify(randomNumber));

levels.addEventListener("change", function () {
  selectedLevel = levels.value; // Should contain new value once level is changed
});

//displaying Message
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

//Getting User Input
let userInput = document.querySelector(".guess");
let checkBtn = document.querySelector(".check");

checkBtn.addEventListener("click", () => {
  let userNumber = Number(userInput.value); //making sure you have the updated value when user clicks "check"

  if (!userNumber) {
    displayMessage("⛔ No number!");
  } else if (userNumber === randomNumber) {
    displayMessage("🎉 Correct Number!");
    document.querySelector(".number").textContent = randomNumber;
    document.querySelector("body").style.background =
      "url(images/success-screen.png) center/cover no-repeat";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".guess-head").style.color = "#0eee7e";
    userInput.style.color = "#0eee7e";
    userInput.style.borderColor = "#0eee7e";
    checkBtn.style.display = "none";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (userNumber !== randomNumber) {
    if (score > 1) {
      displayMessage(
        userNumber > randomNumber ? "📈 Too high!" : "📉 Too low!"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥 You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

//Generating Random Number
let restartBtn = document.querySelector(".right button:last-of-type");

restartBtn.addEventListener("click", () => {
  //generate new number every time the button is clicked
  randomNumber = Math.floor(Math.random() * 20) + 1; // 1 - 20 default range
  localStorage.setItem("randomNum", JSON.stringify(randomNumber));
  displayMessage("Start guessing...");
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.background =
    "url(images/Screen--Playing-bkg.png) center/cover no-repeat";
  document.querySelector(".number").style.width = "30rem";
  document.querySelector(".guess-head").style.color = "#e7819b";
  userInput.style.color = "#e7819b";
  userInput.style.borderColor = "none";
  checkBtn.style.display = "flex";
  userInput.value = "";
  score = 20;
  document.querySelector(".score").textContent = score;
});
