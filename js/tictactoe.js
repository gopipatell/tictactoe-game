/*
 * return which player won the game
 * inputs:  board array
 * Output: 1 - if player 1 is winner
 *         2 - if player 2 is winner
 */
const win = function(board) {

  if ((board.includes("one") && board.includes("two") && board.includes("three")) ||
    (board.includes("four") && board.includes("five") && board.includes("six")) ||
    (board.includes("one") && board.includes("four") && board.includes("seven")) ||
    (board.includes("two") && board.includes("five") && board.includes("eight")) ||
    (board.includes("three") && board.includes("six") && board.includes("nine")) ||
    (board.includes("three") && board.includes("five") && board.includes("seven")) ||
    (board.includes("one") && board.includes("five") && board.includes("nine")) ||
    (board.includes("seven") && board.includes("eight") && board.includes("nine"))) {
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
