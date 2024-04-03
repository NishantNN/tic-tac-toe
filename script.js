// all variables of the game
let boxes = document.querySelectorAll(".box")
let reset = document.querySelector("#reset")
let winnerWindow = document.querySelector(".winner-window")
let winnerText = document.querySelector(".winner-text")
let newGame = document.querySelector(".new-game")
let turnPrint = document.querySelector(".game-text")
let turn0 = true;

// 2d array of all winning patterns 
const winningPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

// prints either x or o based on the turn
boxes.forEach((val) => {
    val.addEventListener("click", () => {
        if (turn0 === true) {
            val.innerText = "O"
            val.style.color = "blue"
            turn0 = false;
        }
        else {
            val.innerText = "X"
            val.style.color = "red"
            turn0 = true;
        }
        val.disabled = true;
        let pos = val.innerText;
        turnPrinter(pos);
        checkWinner();
    })
})

// print turn
const turnPrinter = (pos) => {
    if (pos === `X`) {
        pos = "O"
    }
    else {
        pos = "X"
    }
    turnPrint.innerText = `${pos}'s Turn`
}

// winner checking main logic
const checkWinner = () => {
    for (let pattern of winningPatterns) {
        pos1Val = boxes[pattern[0]].innerText;
        pos2Val = boxes[pattern[1]].innerText;
        pos3Val = boxes[pattern[2]].innerText;
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                winnerShow();
            }
        }
    }
}

// display winner
const winnerShow = () => {
    winnerWindow.classList.remove("hide")
    winnerText.innerText = `Congratulations, ${pos1Val} is the winner`
    newGame.addEventListener("click", resetGame)
}

// new game button
const resetGame = () => {
    winnerWindow.classList.add("hide")
    for (let box of boxes) {
        box.innerText = ""
        box.disabled = false
    }

}

// reset buton - the function of reset and new game button is same so same function is called
reset.addEventListener("click", resetGame)
