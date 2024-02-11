const boxes = document.querySelectorAll('.box');
const gameInfo = document.querySelector('.game-info');
const resetBtn = document.querySelector('#reset-btn');

let currentPlayer;
let gameGrid;

const winningPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function initGame() {
    currentPlayer = 'X';
    gameGrid = ['', '', '', '', '', '', '', '', ''];

    boxes.forEach((box, index) => {
        box.innerHTML = '';
        boxes[index].style.pointerEvents = "all";
        boxes[index].classList.remove('win')
    })
    resetBtn.style.display = 'none';
    gameInfo.innerHTML = `Current Player: ${currentPlayer}`;
}
initGame();

function checkGameOver() {
    let answer = '';
    winningPositions.forEach(position => {
        // all three boxes should be non-empty and exactly same value
        if ((gameGrid[position[0]] !== '' || gameGrid[position[1]] !== '' || gameGrid[position[2]] !== '')
            && (gameGrid[position[0]] === gameGrid[position[1]]) && (gameGrid[position[1]] === gameGrid[position[2]])) {

                // check if winner is X
                if(gameGrid[position[0]] === 'X'){
                    answer = 'X';
                } else {
                    answer = 'O';
                }

                boxes.forEach(box => {
                    box.style.pointerEvents = 'none';
                })

                // now we know X/O is winner
                boxes[position[0]].classList.add('win');
                boxes[position[1]].classList.add('win');
                boxes[position[2]].classList.add('win');
        }
    })
    // we have a winner 
    if(answer !== ''){
        resetBtn.style.display = 'block';
        gameInfo.innerHTML = `Winner Player - ${answer}`;
    }

    let fillCount = 0;
    gameGrid.forEach(box =>{
        if(box !== ""){
            fillCount++;
        }
    })

    if(fillCount === 9){
        gameInfo.innerHTML = "Game Tied!";
        resetBtn.style.display = "block";
    }
}

function swapTurn() {
    if (currentPlayer === 'X') {
        currentPlayer = 'O';
    } else {
        currentPlayer = 'X';
    }
    gameInfo.innerHTML = `Current Player: ${currentPlayer}`;
}

function handleClick(index) {
    if (gameGrid[index] === '') {
        boxes[index].innerHTML = currentPlayer;
        gameGrid[index] = currentPlayer;
        boxes[index].style.pointerEvents = "none";
        // swap turn 
        swapTurn();
        // check is any one win or not 
        checkGameOver();
    }
}

boxes.forEach((box, index) => {
    box.addEventListener('click', function () {
        handleClick(index);
    })
})

resetBtn.addEventListener('click', initGame)