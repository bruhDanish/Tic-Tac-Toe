function isWinner(board, symbol) {
    console.log(board, symbol)
    // check rows
    if(board[0] == board[1] && board[1] == board[2] && board[2] == symbol) return symbol;
    if(board[3] == board[4] && board[4] == board[5] && board[5] == symbol) return symbol;
    if(board[6] == board[7] && board[7] == board[8] && board[8] == symbol) return symbol;

    // check columns
    if(board[0] == board[3] && board[3] == board[6] && board[3] == symbol) return symbol;
    if(board[1] == board[4] && board[4] == board[7] && board[4] == symbol) return symbol;
    if(board[2] == board[5] && board[5] == board[8] && board[5] == symbol) return symbol;

    // check diagonals
    if(board[0] == board[4]  && board[4] == board[8]  && board[4] == symbol) return symbol;
    if(board[2] == board[4]  && board[4] == board[6]  && board[4] == symbol) return symbol;

    // check if there is a tie
    if(board.filter((el) => el === "").length === 0) return alert("It's a tie!, Click Reset Game to play again");

    return "";
}

export default isWinner;