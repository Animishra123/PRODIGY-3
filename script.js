// script.js

let gameBoard = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameOver = false;

const cells = document.querySelectorAll('.cell');
const turnDisplay = document.getElementById('turn');
const resetButton = document.getElementById('reset');

cells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        if (gameOver) return;
        if (gameBoard[index] !== '') return;
        gameBoard[index] = currentPlayer;
        cell.textContent = currentPlayer;
        checkForWin();
        switchPlayer();
    });
});

resetButton.addEventListener('click', resetGame);

function checkForWin() {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < winConditions.length; i++) {
        const [a, b, c] = winConditions[i];
        if (gameBoard[a] === gameBoard[b] && gameBoard[b] === gameBoard[c] && gameBoard[a] !== '') {
            gameOver = true;
            turnDisplay.textContent = `Player ${currentPlayer} wins!`;
            return;
        }
    }
    if (!gameBoard.includes('')) {
        gameOver = true;
        turnDisplay.textContent = 'It\'s a tie!';
    }
}

function switchPlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    turnDisplay.textContent = `Player ${currentPlayer}'s turn`;
}

function resetGame() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameOver = false;
    turnDisplay.textContent = `Player ${currentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent = '');
}