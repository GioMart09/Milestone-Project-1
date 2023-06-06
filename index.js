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

beginGame();