function playerCreate(name, symbol){
    name,
    symbol
    return {name, symbol}
}



const gameBoard = (()=>{
        //create gameboard
        let board = [];
        for (i=0; i<9; i++){
            board.push(i);
        }

        //drawing cell elements
        let container = document.querySelector('.container');
        board.forEach((element,index) =>{
            const cell = document.createElement('div');
            cell.className='cell';
            cell.addEventListener('click', () => {
                if (board[index]!=null){
                    board[index]=game.currentPlayer.symbol;
                    cell.textContent=board[index];
                    game.winnerCheck(board)
                    game.switchPlayer()
                    turnNotification.textContent = `It's ${game.currentPlayer.name} turn`
                    cell.style.pointerEvents='none'
            }
            if (resultScreen.textContent != 'Battle is going!'){
                let allCells = document.querySelectorAll('.cell')
                allCells.forEach(el => el.style.pointerEvents='none')
            }
        });
            container.appendChild(cell)

        }
        )
        let resultScreen = document.createElement('div')
        resultScreen.className = 'results'
        resultScreen.textContent = 'Battle is going!'

        let turnNotification = document.createElement('div')
        turnNotification.className = 'playerTurn'
        let body = document.querySelector('body')
    
        body.appendChild(resultScreen)
        body.appendChild(turnNotification)

            
        return {board}
    })();

const game = (()=>{

    //player creation
    const playerOne = playerCreate('Dovydas','X');
    const playerTwo = playerCreate('Simona', 'O')


    let currentPlayer = playerOne;



    function switchPlayer(){
        this.currentPlayer === playerOne ? this.currentPlayer = playerTwo : this.currentPlayer = playerOne;
    }

    let roundCount = 9;
    let roundWinner = false;
    function winnerCheck(board){
        const winnerIndex = [[0,1,2], 
                            [3,4,5],
                            [6,7,8],
                            [0,3,6],
                            [1,4,7],
                            [2,5,8],
                            [0,4,8],
                            [2,4,6]]
        let resultScreen = document.querySelector('.results')                 
        for (i=0; i<winnerIndex.length;i++){
               if (board[winnerIndex[i][0]]==board[winnerIndex[i][1]] && board[winnerIndex[i][0]] == board[winnerIndex[i][2]] && board[winnerIndex[i][1]]==board[winnerIndex[i][2]]){
                console.log(`Winner is ${game.currentPlayer.name}!`)
                roundWinner = true;
                resultScreen.textContent=`Winner is ${game.currentPlayer.name}!`

            }
            }   
            roundCount -= 1
            if (roundCount==0 && roundWinner==false){
                resultScreen.textContent="It's a draw!"

            }
        }
    

        function getName(){
            playerOne.name = playerOneName.value
            playerTwo.name = playerTwoName.value
        }

        

    return {currentPlayer, switchPlayer, winnerCheck, getName}
})();


