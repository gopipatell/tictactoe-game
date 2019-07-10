/*
 * return which player won the game
 * inputs:  board array
 * Output: 1 - if player 1 is winner
 *         2 - if player 2 is winner
 */
const win = function(board) {

  if ((board.includes("c1") && board.includes("c2") && board.includes("c3")) && highlight("#c1, #c2, #c3") ||
    (board.includes("c4") && board.includes("c5") && board.includes("c6")) && highlight("#c4, #c5, #c6") ||
    (board.includes("c1") && board.includes("c4") && board.includes("c7")) && highlight("#c1, #c4, #c7") ||
    (board.includes("c2") && board.includes("c5") && board.includes("c8")) && highlight("#c2, #c5, #c8") ||
    (board.includes("c3") && board.includes("c6") && board.includes("c9")) && highlight("#c3, #c6, #c9") ||
    (board.includes("c3") && board.includes("c5") && board.includes("c7")) && highlight("#c3, #c5, #c7") ||
    (board.includes("c1") && board.includes("c5") && board.includes("c9")) && highlight("#c1, #c5, #c9") ||
    (board.includes("c7") && board.includes("c8") && board.includes("c9") && highlight("#c7, #c8, #c9")) ) {
    return true;
  } else {
    return false;
  }
};
  // } else if(board[0] === board[3] === board[6]) {
  //   console.log(2);
  //   return board[0];
  // } else if(board[1] === board[4] === board[7]) {
  //   return board[1];
  // } else if(board[2] === board[5] === board[8]) {
  //   console.log(4);
  //   return board[2];
  // } else if(board[2] === board[4] === board[6]) {
  //   console.log(5);
  //   return board[2];
  // } else if(board[0] === board[4] === board[8]) {
  //   console.log(6);
  //   return board[0];
  // } else if(board[3] === board[4] === board[5]) {
  //   console.log(7);
  //   return board[3];
  // } else if(board[6] === board[7] === board[8]) {
  //   console.log(8);
  //   return board[6];
  // }

//console.log(win([1,2,1,1,2,2,2,1,1]));
