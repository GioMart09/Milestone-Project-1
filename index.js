//Elements
let playerLetter = document.getElementById('playerLetter');
let resetBtn = document.getElementById('resetBtn');
let squares = Array.from(document.getElementsByClassName('square'));

const lETTER_O = 'O';
const LETTER_X = 'X';
let nextLetter = LETTER_X;
let empty = Array(9).fill(null);

const beginGame = () => {
    squares.forEach(square => square.addEventListener('click', squareClicked))
};

function squareClicked(e) {
    const id = e.target.id

    if(!empty[id]){
        empty[id] = nextLetter
        e.target.innerText = nextLetter

        nextLetter = nextLetter == LETTER_X ? lETTER_O: LETTER_X
    }
};

resetBtn.addEventListener('click', reset);

function reset() {
    empty.fill(null)

    squares.forEach( square => {
        square.innerText = ''
    })

    nextLetter = LETTER_X
};

const winCondition = [
    [0,1,2]
    [3,4,5]
    [6,7,8]
    [0,4,8]
    [2,4,6]
    [0,3,6]
    [1,4,7]
    [2,5,8]
]

function winConditionMet() {
    
}




beginGame();
