//Needs Player x Computer function
//Needs a Timer
//ReeStyle css to add the timer button

//HTML Elements querySelector
let gameCells = document.querySelectorAll(".game-Cell");
let resetButton = document.querySelector(".reset");
let startButton = document.querySelector(".start");
let playerX = document.querySelector(".playerXplayer");
let playerX1 = document.querySelector(".playerXcomputer");
let statusDiv = document.querySelector(".status");
let playX = document.querySelector(".playX");
let playO = document.querySelector(".playO");

//Variables
let nextPlay = true;
let gameStart = false;
let timer;
let interval = 0;
let playMode = null;
let win = null;
let playerButton;
let oponentButton;
let clockStart;

//Win conditionArray
let winCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

//----------------------------Check win function --------------------------------\\
//needs to check if has a draw
//Function to check each winCondition array has a x or o
function checkWin() {
  winCondition.forEach((combo) => {
    if (document.getElementById(combo[0].toString()).innerHTML !== "") {
      //Line 41 to 46 check each position
      if (
        document.getElementById(combo[0].toString()).innerHTML ===
          document.getElementById(combo[1].toString()).innerHTML &&
        document.getElementById(combo[0].toString()).innerHTML ===
          document.getElementById(combo[2].toString()).innerHTML
      ) {
        if (document.getElementById(combo[2].toString()).innerHTML === "×") {
          win = "x"; // sets the win to X
          if (win === "x") {
            alert("X  Wins!"); // Will display a alert
            nextPlay = null; //This here will prevent the player to not place any value after the game has won
            for (let cellDiv of gameCells) {
              // This here will clear all the cellDivs
              cellDiv.innerText = "";
              cellDiv.innerText = "";
            }
          }
        } else {
          win = "o"; // Sets the win to O
          if (win === "o") {
            alert("O  Wins!"); // Will display a alert
            nextPlay = null; //This here will prevent the player to not place any value after the game has won
            for (let cellDiv of gameCells) {
              //this will clear all the cellDivs
              cellDiv.innerText = "";
              cellDiv.innerText = "";
            }
          }
        }
      }
    } 
  });
}

//------------------------The Game Function----------------------\\
//Still needs to add the  Player vs Computer here.

//event listener---Call this for starting the player x player
function startGame() {
  if (gameStart === true) {
    // Checks gameStart if it is true
    for (let cellDiv of gameCells) {
      //Loop of all the cells
      cellDiv.addEventListener("click", (event) => {
        if (event.target.innerText === "×" || event.target.innerText === "○") {
          //Checks if the div has a x or o and do nothing.
          return;
        }

        if (nextPlay) {
          if (nextPlay === true) {
            event.target.innerText = playerButton;
            if (playerButton === "×") {
              statusDiv.innerHTML = "○ is next";
            } else if (playerButton === "○") {
              statusDiv.innerHTML = "× is next";
            }

            nextPlay = !nextPlay;
          }
        } else {
          if (nextPlay === false) {
            event.target.innerText = oponentButton;
            if (oponentButton === "○") {
              statusDiv.innerHTML = "× is next";
            } else if (oponentButton === "×") {
              statusDiv.innerHTML = "○ is next";
            }

            nextPlay = !nextPlay;
          }
        }
        checkWin();
      });
    }
  } else if (gameStart === false) {
    alert("NOOO Thats IMPOSSIBLEE!!!\nPlease Chose  X or O !");
  }
}

//--------------------------------------- Buttons Events ---------------------------\\
//Start Button to start the game
startButton.addEventListener("click", countDown);
function countDown() {
  startButton.innerText = "Starting in...";
  timer = setInterval(count, 1000);
}

//Event listener of vs Player vs Computer
playerX.addEventListener("click", (evt) => {
  playMode = "player";
  if (playMode === "player") {
    playerX.innerText = " ";
    playerX1.innerText = " ";
  }
});
playerX1.addEventListener("click", () => {
  playMode = "computer";
  if (playMode === "computer") {
    playerX.innerText = "";
    playerX1.innerText = "";
  }
});

// Event Reset Button
resetButton.addEventListener("click", () => {
  for (let cellDiv of gameCells) {
    cellDiv.innerText = "";
    cellDiv.innerText = "";
  }
  nextTurn();

  clock();
});

//Set the player as X and oponent as O
playX.addEventListener("click", () => {
  playerButton = "×";
  oponentButton = "○";
  gameStart = true;
  playX.innerText = "";
  playO.innerText = "";
});

//Set the player as O and oponent as X
playO.addEventListener("click", () => {
  playerButton = "○";
  oponentButton = "×";
  gameStart = true;
  playX.innerText = "";
  playO.innerText = "";
});

//----------------------------------------Utilitys Function-------------------------------\\

//This function is only to start placing x and o again on the game.
function nextTurn() {
  nextPlay = true;
}

//CountDown Function
function count() {
  interval += 1;
  startButton.innerText = interval != 4 ? interval : "GO!";
  if (interval === 4) {
    clearInterval(timer);
    startButton.innerText = "Start";
    clock();
    interval = 0;
    if (playMode === "player") {
      startGame();
    } else if (playMode === "computer") {
      alert("Please Press F5!\n Section work in progress!");
    }
  }
}

//This function is for setting the time count...{Still has a little bug}
function clock() {
  let seconds = 0;
  function displayTime() {
    seconds++;
    let hours = Math.floor(seconds / 3600);
    let mins = Math.floor(seconds / 60) - hours * 60;
    let secs = Math.floor(seconds % 60);

    if (hours < 10) {
      hours = "0" + hours;
    }
    if (mins < 10) {
      mins = "0" + mins;
    }
    if (secs < 10) {
      secs = "0" + secs;
    }

    document.getElementById("hour").innerHTML = hours + " " + ":";
    document.getElementById("minutes").innerHTML = mins + " " + ":";
    document.getElementById("seconds").innerHTML = secs;
  }

  setInterval(displayTime, 1000);
}
