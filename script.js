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
                    winnerCheck()
                    game.switchPlayer()
            }});
            container.appendChild(cell)

        }
        )
        //function for winner check
        function winnerCheck(){
            const winnerIndex = [[0,1,2], 
                                [3,4,5],
                                [6,7,8],
                                [0,3,6],
                                [1,4,7],
                                [2,5,8],
                                [0,4,8],
                                [2,4,6]]
            for (i=0; i<winnerIndex.length;i++){
                   if (board[winnerIndex[i][0]]==board[winnerIndex[i][1]] && board[winnerIndex[i][0]] == board[winnerIndex[i][2]] && board[winnerIndex[i][1]]==board[winnerIndex[i][2]]){
                    console.log(`Winner is ${game.currentPlayer.name}!`)
                    }
                }
            }
            
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

    



    return {currentPlayer, switchPlayer}
})();


