
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

    // Set a timeout to remove the mole if not clicked
    const timeoutId = setTimeout(function() {
        mole.style.display = 'none'; // Hide the mole box after 1 second
        setTimeout(function() {
            mole.remove(); // Remove the mole from the DOM after hiding
        }, 0); // Delay removal to ensure it's hidden before removing
    }, 1000); // Adjust the timeout duration (in milliseconds) as needed

    // Add click event listener to remove the mole when clicked
    mole.addEventListener('click', function() {
        whackMole(); // Call whackMole function when mole is clicked
        mole.remove(); // Remove mole when clicked
        clearTimeout(timeoutId); // Clear the timeout
    });
}
// Function to handle whacking the mole
function whackMole() {
    console.log("Mole whacked!"); // Log a message when mole is clicked

    event.target.remove();
    score++;
    updateScore()
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
