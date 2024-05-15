
const gameBoard = document.getElementById('game-board');
const startButton = document.getElementById('start-button');
let boxes = [];
let score = 0;
let moleTimer;

// Function to create mole element
function createMole() {
    const mole = document.createElement('div');
    mole.classList.add('box');
    mole.classList.add('mole');
    mole.textContent = '🤖';
    const randomIndex = Math.floor(Math.random() * boxes.length);
    boxes[randomIndex].appendChild(mole);
    mole.addEventListener('click', whackMole);
}

// Function to handle whacking the mole
function whackMole(event) {
    event.target.remove();
    score++;
}

// Function to start the game
function startGame() {
    score = 0;
    updateScore();
    moleTimer = setInterval(createMole, 1000); // Adjust the interval as needed
    startButton.disabled = true;
    setTimeout(endGame, 30000); // Game duration: 30 seconds
}

// Function to end the game
function endGame() {
    clearInterval(moleTimer);
    alert('Game Over! Your score: ' + score);
    startButton.disabled = false;
}

// Function to update score
function updateScore() {
    document.getElementById('score').textContent = 'Score: ' + score;
}

// Initialize the game board
function initGame() {
    for (let i = 0; i < 9; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        gameBoard.appendChild(box);
        boxes.push(box);
    }
}

startButton.addEventListener('click', startGame);
initGame();
