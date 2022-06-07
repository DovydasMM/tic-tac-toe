let array1 = [null,null,null];
let array2 = [null,null,null];
let array3 = [null,null,null];
let array4 = [null,null,null];
let array5 = [null,null,null];
let array6 = [null,null,null];
let array7 = [null,null,null];
let array8 = [null,null,null];
let gameBoard = [array1,array2,array3,array4,array5,array6,array7,array8];
let cell;


function showGameboard(){
}

function input1cell(input){
    array1[0] = input
    array4[0] = input
    array7[0] = input
    updateBoard()
    winnerCheck()
}

function input2cell(input){
    array1[1] = input
    array5[0] = input
    updateBoard()
    winnerCheck()
}

function input3cell(input){
    array1[2] = input
    array6[0] = input
    array8[0] = input
    updateBoard()
    winnerCheck()
}

function input4cell(input){
    array2[0] = input
    array4[1] = input
    updateBoard()
    winnerCheck()
}

function input5cell(input){
    array2[1] = input
    array5[1] = input
    array7[1] = input
    array8[1] = input
    updateBoard()
    winnerCheck()
}

function input6cell(input){
    array2[2] = input
    array6[1] = input
    updateBoard()
    winnerCheck()
}

function input7cell(input){
    array3[0] = input
    array4[2] = input
    array8[2] = input
    updateBoard()
    winnerCheck()
}

function input8cell(input){
    array3[1] = input
    array5[2] = input
    updateBoard()
    winnerCheck()
}

function input9cell(input){
    array3[2] = input
    array6[2] = input
    array7[2] = input
    updateBoard()
    winnerCheck()
}

let container = document.querySelector('.container')


function createBoard(){
    let cellIndex=1
    for (let i=0; i<3; i++){
        for (let j=0; j<gameBoard[i].length;j++){
            cell = document.createElement('div');
            cell.classList.add('cell');
            cell.textContent=gameBoard[i][j];
            cell.dataset.set=Number(cellIndex);
            cellIndex+=1
            console.log(cell.dataset.set)
            container.appendChild(cell)
            cell.addEventListener('click', function (e) {
                gameBoard[i][j]='x'
                updateBoard();
                winnerCheck();
                console.log(cell.dataset.set)
            });   
        }
}
}
createBoard();

function updateBoard(){
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    createBoard()
}

function winnerCheck(){
    for (let i=0; i<gameBoard.length; i++){
        if (gameBoard[i][0]==gameBoard[i][1] && gameBoard[i][0]==gameBoard[i][2] && gameBoard[i][1]==gameBoard[i][2] &&
            gameBoard[i][0]!=null && gameBoard[i][1]!=null && gameBoard[i][2]!=null)
        console.log('Winner')
    }
}


//console.log(winnerCheck())


