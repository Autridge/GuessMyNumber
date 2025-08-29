// Selecting difficulty level
let levels = document.getElementById("levels");
let selectedLevel = levels.value; // Should contain first value "Rookie" by default
let attempts = 0;

levels.addEventListener("change", function(){
    selectedLevel = levels.value; // Should contain new value once level is changed
})

//Getting User Input 
let userInput = document.querySelector(".guess"); 
let userNumber = userInput.value; //get the input when page loads (likely to be "")
let checkBtn = document.querySelector(".check");

checkBtn.addEventListener("click", ()=>{ 
    userNumber = userInput.value; //making sure you have the updated value when user clicks "check"
})

//Generating Random Number
let restartBtn = document.querySelector(".right button:last-of-type");

restartBtn.addEventListener("click", ()=>{  //generate new number every time the button is clicked
    let randomNumber = Math.floor(Math.random() * (50)) + 1; // 1 - 50 default range 
    localStorage.setItem("randomNum", JSON.stringify(randomNumber));
})











