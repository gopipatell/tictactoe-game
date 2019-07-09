let playerNames = ["Gopi","Viral"];

$(document).ready(function() {

  showPage("1");

  let playerOne = true;
  let playertwo = false;
  let playerOneCombo = [];
  let playerTwoCombo = [];

  $("td").on("click", function() {
    if (playerOne) {
      $(this).text("X");
      playerOne = false;
      playertwo = true;
      playerOneCombo.push($(this).attr("id"));
      console.log('playerOneCombo', playerOneCombo);
      if (win(playerOneCombo)) {
        showResult(1);
        return;
      }
    } else {
      $(this).text("O");
      playerOne = true;
      playertwo = false;
      playerTwoCombo.push($(this).attr("id"));
      console.log('playerTwoCombo', playerTwoCombo);
      if (win(playerTwoCombo)) {
        showResult(2);
        return;
      }
    }

    if ((playerOneCombo.length + playerTwoCombo.length) === 9) {
      showResult(0);
    }

  });
});
const showPage = function(pgnum) {
  $("#page1").hide();
  $("#page2").hide();
  $("#page3").hide();
  $(`#page${pgnum}`).show();
}

const showResult = function(gameresultnum) {
  $("div.result").show();
  if (gameresultnum === 0) {
    $("h3.result_msg").text("Its a Draw");
  } else {
    $("h3.result_msg").text(`${playerNames[gameresultnum - 1]} Wins`);

    let score = parseInt($(`span.score${gameresultnum}`).text());
    $(`span.score${gameresultnum}`).text(score +1) ;

  }
}
const setPlayerName = function() {
  playerNames[0]= $("input.input-player1").val();
  playerNames[1]= $("input.input-player2").val();
  $("span.player1name").text(playerNames[0]);
  $("span.player2name").text(playerNames[1]);
  showPage(3);
}
