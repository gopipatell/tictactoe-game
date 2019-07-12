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

//AI logic

const aiMove = function() {
  let move;

  const p1 = function(val) {
    return playerOneCombo.includes(val);
  }

  const p2 = function(val) {
    return playerTwoCombo.includes(val);
  }

  const empty = function(val) {
    return !p1(val) && !p2(val);
  }

  const winMove = function(a, b, c) {
    let move;
    if (p2(a) && p2(b) && empty(c))
      move = c;
    else if (p2(a) && p2(c) && empty(b))
      move = b;
    else if (p2(b) && p2(c) && empty(a))
      move = a;
    else
      move = 0;

    return move;
  }

  const blockMove = function(a, b, c) {
    let move;
    if (p1(a) && p1(b) && empty(c))
      move = c;
    else if (p1(a) && p1(c) && empty(b))
      move = b;
    else if (p1(b) && p1(c) && empty(a))
      move = a;
    else
      move = 0;

    return move;
  }

  // if two in row, then play for win

  let possiblemove;
  if((possiblemove = winMove("c1", "c2", "c3")) && possiblemove !== 0) {
    move = possiblemove;
  }
  else if((possiblemove = winMove("c4", "c5", "c6")) && possiblemove !== 0) {
    move = possiblemove;
  }
  else if((possiblemove = winMove("c7", "c8", "c9")) && possiblemove !== 0) {
    move = possiblemove;
  }
  else if((possiblemove = winMove("c1", "c4", "c7")) && possiblemove !== 0) {
    move = possiblemove;
  }
  else if((possiblemove = winMove("c2", "c5", "c8")) && possiblemove !== 0) {
    move = possiblemove;
  }
  else if((possiblemove = winMove("c3", "c6", "c9")) && possiblemove !== 0) {
    move = possiblemove;
  }
  else if((possiblemove = winMove("c1", "c5", "c9")) && possiblemove !== 0) {
    move = possiblemove;
  }
  else if((possiblemove = winMove("c3", "c5", "c7")) && possiblemove !== 0) {
    move = possiblemove;
  }

  // if two in row of opposite player, then block

  else if((possiblemove = blockMove("c1", "c2", "c3")) && possiblemove !== 0) {
    move = possiblemove;
  }
  else if((possiblemove = blockMove("c4", "c5", "c6")) && possiblemove !== 0) {
    move = possiblemove;
  }
  else if((possiblemove = blockMove("c7", "c8", "c9")) && possiblemove !== 0) {
    move = possiblemove;
  }
  else if((possiblemove = blockMove("c1", "c4", "c7")) && possiblemove !== 0) {
    move = possiblemove;
  }
  else if((possiblemove = blockMove("c2", "c5", "c8")) && possiblemove !== 0) {
    move = possiblemove;
  }
  else if((possiblemove = blockMove("c3", "c6", "c9")) && possiblemove !== 0) {
    move = possiblemove;
  }
  else if((possiblemove = blockMove("c1", "c5", "c9")) && possiblemove !== 0) {
    move = possiblemove;
  }
  else if((possiblemove = blockMove("c3", "c5", "c7")) && possiblemove !== 0) {
    move = possiblemove;
  }


  // if center is available, then occupy
  else if(empty("c5")) {
    move = "c5";
  }

  // if opposite corner is available, then occupy
  else if(p1("c1") && empty("c9")) {
    move = "c9";
  }
  else if(p1("c3") && empty("c7")) {
    move = "c7";
  }
  else if(p1("c7") && empty("c3")) {
    move = "c3";
  }
  else if(p1("c9") && empty("c1")) {
    move = "c1";
  }
  // if corner is avaiable, then occupy
  else if(empty("c1")) {
    move = "c1";
  }
  else if(empty("c3")) {
    move = "c3";
  }
  else if(empty("c7")) {
    move = "c7";
  }
  else if(empty("c9")) {
    move = "c9";
  }
  // if middle square (side) is empty, then occupy
  else if(empty("c2")) {
    move = "c2";
  }
  else if(empty("c4")) {
    move = "c4";
  }
  else if(empty("c6")) {
    move = "c6";
  }
  else if(empty("c8")) {
    move = "c8";
  }

  $(`td#${move}`).click();
};
