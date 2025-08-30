// Selecting difficulty level
let levels = document.getElementById("levels");
let selectedLevel = levels.value; // Should contain first value "Rookie" by default
let attempts = 0;
let scorePoints = 0;

let currentScore = document.querySelector(".label-score .score");
currentScore.textContent = 0;
let highScore = document.querySelector(".label-highscore .highscore");

//Storing the highscore to localStorage
function keepHighscore(){
    const currentHighscore = parseInt(highScore.textContent);
    localStorage.setItem("highscore", currentHighscore);
}

const levelData = {
    "rookie" : {attempts: 20, scorePoints: 3},
    "world-class": {attempts: 10, scorePoints: 5},
    "Legendary": {attempts: 5, scorePoints: 7},
}

// function to update attempts basing on level
function updateAttempts(level){
    attempts = levelData[level].attempts;
    localStorage.setItem("attempts", attempts);
    return attempts;
}

//function to update score points basing on level
function handlePoints(level){
    scorePoints = levelData[level].scorePoints;
    localStorage.setItem("points", scorePoints);
    return scorePoints;
    
}

//function to update the level label below the level selector
let levelLabel = document.getElementById("level-label");
function levelDescription(currentAttempts, maxAttempts){
    levelLabel.textContent = `${currentAttempts} / ${maxAttempts} attempts left`;
}

function UpdatedLevel(level){
    let updatedAttempts = updateAttempts(level);
    let maxAttempts = levelData[level].attempts;
    handlePoints(level);
    levelDescription(updatedAttempts, maxAttempts);
}


// Making sure to have the latest highscore on page load
document.addEventListener("DOMContentLoaded", ()=>{
    let storedHighscore = parseInt(localStorage.getItem("highscore"));

    if(!isNaN(storedHighscore)){
        highScore.textContent = storedHighscore;
    }else{
        highScore.textContent = 0;
    }

    UpdatedLevel(selectedLevel);

    

})



levels.addEventListener("change", function () {
  selectedLevel = levels.value; // Should contain new value once level is changed
  UpdatedLevel(selectedLevel);
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
    if (attempts > 1) {
      displayMessage(
        userNumber > randomNumber ? "📈 Too high!" : "📉 Too low!"
      );
      attempts--;
      

      levelDescription(attempts, levelData[selectedLevel].attempts);
    //   document.querySelector(".score").textContent = score;
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
