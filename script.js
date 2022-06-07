function gameBoard(){
        let board = [];
        for (i=0; i<9; i++){
            board.push('');
        }

        //drawing cell elements
        let container = document.querySelector('.container');
        board.forEach((element,index) =>{
            const cell = document.createElement('div');
            cell.className='cell';
            cell.addEventListener('click', () => {
                if (board[index]==''){
                    board[index]='x';
                    cell.textContent=board[index];
                    console.log(board);
            }});
            container.appendChild(cell)

        }
        )
        return {board}
    }
const lenta = gameBoard();

