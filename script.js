function gameBoard(){
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
                    board[index]='X';
                    cell.textContent=board[index];
                    winnerCheck()
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
                    console.log(`Winner is ${playerOne.name}!`)
                    }
                }
            }
            
        return {board}
    }



function playerCreate(name, symbol){
    name,
    symbol
    return {name, symbol}
}
const playerOne = playerCreate('Dovydas','X');
const playerTwo = playerCreate('Simona', '0')
const lenta = gameBoard();

function currentPlayer(player1, player2){

}