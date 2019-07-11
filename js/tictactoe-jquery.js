
let playerOne = true;
let playertwo = false;
let playerOneCombo = [];
let playerTwoCombo = [];
let playingAgainstAI = false;
let playerNames = ["Gopi", "comp"];
let symbols = ["X", "O"];

$(document).ready(function() {

  //to show each page

  const showPage = function(pgnum) {
    $("#page1").hide();
    $("#page2").hide();
    $("#page4").hide();
    $("#page3").hide();
    $(`#page${pgnum}`).fadeIn(800);
  };


  const setDefaultSymbol = function(symbol) {
    symbols[0] = symbol;
    if(symbol === "X") {
      symbols[1] = "O";
    } else {
      symbols[1] = "X";
    }
  }

  // sets the player name in two player game

  const setPlayerName = function() {
    playerNames[0] = $("input.input-player1").val();
    playerNames[1] = $("input.input-player2").val();
    $("span.player1name").text(playerNames[0]);
    $("span.player2name").text(playerNames[1]);
    setDefaultSymbol("X");
    showPage(4);
  };


  // sets the player name in one player game

  const setPlayer = function() {
    playerNames[0] = $("input.input-player").val();
    playerNames[1] = "AI";
    $("span.player1name").text(playerNames[0]);
    $("span.player2name").text(playerNames[1]);
    setDefaultSymbol($("input[name='symbol']:checked"). val());
    showPage(4);
  };



//show result when the game is finished

  const showResult = function(gameresultnum) {
    $("div.result").show();
    if (gameresultnum === 0) {
      $("h3.result_msg").text("It's a Draw");

    } else {
      $("h3.result_msg").text(`${playerNames[gameresultnum - 1]} Wins`);

      let score = parseInt($(`span.score${gameresultnum}`).text());
      $(`span.score${gameresultnum}`).text(score + 1);
    }
    $('td').off("click");
  };

// reset button function
//reset game state, grid and players turn

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
  };

//reset the game, clear the score, clear the player's names and go to page1

  const exit = function() {
    reset();
    $("span.score1").text(0);
    $("span.score2").text(0);
    $("input.input-player1").val("Player 1");
    $("input.input-player2").val("Player 2");
    showPage(1);
  };

  //play the game when we click on the grid and also switch the player's turn.

  const playGame = function() {
    if (playerOne) {
      $(this).text(symbols[0]);
      playerOne = false;
      playertwo = true;
      playerOneCombo.push($(this).attr("id"));
      $(this).off("click");
      console.log('playerOneCombo', playerOneCombo);

      $("span.player1turn").css("visibility", "hidden");
      $("span.player2turn").css("visibility", "visible");

      if (win(playerOneCombo)) {
        showResult(1);
        return;
      }

      if(playingAgainstAI) {
        setTimeout(aiMove, 400); 
      }
    } else {
      $(this).text(symbols[1]);
      $("span.player1turn").css("visibility", "visible");
      $("span.player2turn").css("visibility", "hidden");
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

    // if the game is draw

    if ((playerOneCombo.length + playerTwoCombo.length) === 9) {
      showResult(0);
    }
  };

  //when we click two player game

  $("#twoplayers").on("click", function() {
    playingAgainstAI = false;
    showPage(2);
  });

//when we click one player game

  $("#oneplayer").on("click", function() {
    playingAgainstAI = true;
    showPage(3);
  });

  $("#play").on("click", setPlayerName);
  $("#play1").on("click", setPlayer);

  $("#exit").on("click", exit);

  $(".goback").on("click", function() {
    showPage(1);
  });

  $("td").on("click", playGame);

  $("#reset").on("click", reset);

  showPage(1);

});



function highlight(selector) {
  $(selector).css("color", "#8c8080");
  return true;
};
