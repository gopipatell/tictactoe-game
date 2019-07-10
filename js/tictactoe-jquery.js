$(document).ready(function() {


let playerOne = true;
let playertwo = false;
let playerOneCombo = [];
let playerTwoCombo = [];

let playerNames = ["Gopi","Viral"];

const showPage = function(pgnum) {
  $("#page1").hide();
  $("#page2").hide();
  $("#page3").hide();
  $(`#page${pgnum}`).show();
};

const setPlayerName = function() {
  playerNames[0]= $("input.input-player1").val();
  playerNames[1]= $("input.input-player2").val();
  $("span.player1name").text(playerNames[0]);
  $("span.player2name").text(playerNames[1]);
  showPage(3);
};

const showResult = function(gameresultnum) {
  $("div.result").show();
  if (gameresultnum === 0) {
    $("h3.result_msg").text("It's a Draw");

  } else {
    $("h3.result_msg").text(`${playerNames[gameresultnum - 1]} Wins`);

    let score = parseInt($(`span.score${gameresultnum}`).text());
    $(`span.score${gameresultnum}`).text(score +1) ;
  }
  $('td').off("click");

};


const reset = function() {
  $('td')
    .html("&nbsp;")
    .css("color", "black");
  $("div.result").hide();
  $("td").on("click", playGame);
  playerOne = true;
  playertwo = false;
  $("span.player1turn").css("visibility", "visible");
  $("span.player2turn").css("visibility", "hidden");

  playerOneCombo = [];
  playerTwoCombo = [];

}

const exit = function() {
  reset();
  $("span.score1").text(0) ;
  $("span.score2").text(0) ;
  $("input.input-player1").val("Player 1");
  $("input.input-player2").val("Player 2");
  showPage(1);
}

const playGame = function () {
  if (playerOne) {
    $(this).text("X");
    playerOne = false;
    playertwo = true;
    playerOneCombo.push($(this).attr("id"));
    $(this).off("click");
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
    $(this).off("click");
    console.log('playerTwoCombo', playerTwoCombo);
    if (win(playerTwoCombo)) {
      showResult(2);
      return;
    }
  }

  if(playerOne === true) {
    $("span.player1turn").css("visibility", "visible");
    $("span.player2turn").css("visibility", "hidden");
  } else {
    $("span.player1turn").css("visibility", "hidden");
    $("span.player2turn").css("visibility", "visible");
  }

  if ((playerOneCombo.length + playerTwoCombo.length) === 9) {
    showResult(0);
  }
};

$("#twoplayers").on("click", function () {
  showPage(2);
});

$("#play").on("click", setPlayerName);

$("#exit").on("click", exit);

// $("#goback").on("click", showPage(2));

 $("td").on("click", playGame);

 $("#reset").on("click", reset);

 showPage(1);

});



function highlight(selector) {
  $(selector).css("color", "#8c8080");
  return true;
};
