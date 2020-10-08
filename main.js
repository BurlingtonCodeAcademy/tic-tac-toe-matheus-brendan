//HTML Elements
let gameCells = document.querySelectorAll(".game-Cell");
let resetButton = document.querySelector(".reset");

//Variables
let nextPlay = true;

//Win condition
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

//event listener---Call this for starting the player x player
for (let cellDiv of gameCells) {
  cellDiv.addEventListener("click", (event) => {
    if (event.target.innerText === "×" || event.target.innerText === "○") {
      return;
    }

    if (nextPlay) {
      event.target.innerText = "×";
      nextPlay = !nextPlay;
    } else {
      event.target.innerText = "○";
      nextPlay = !nextPlay;
    }
  });
}

resetButton.addEventListener("click", () => {
  for(let cellDiv of gameCells){
    cellDiv.innerText = ""
    cellDiv.innerText = ""
  }
});
//Need to set a winner condition
// Check if the
