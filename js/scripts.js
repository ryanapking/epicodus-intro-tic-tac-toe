// business logic
function GameBoard() {
  this.lines = [["1", "1", "1"],["1", "1", "1"],["1", "1", "1"]];
  this.currentPlayer = "X";
  this.winner = "none";
  this.winCount = new WinCount();
  // this.cellClassArray = [];
  // this.createCellClassArray();
};

// GameBoard.prototype.createCellClassArray = function() {
//   this.winConditions.push(["top-left","top-middle","top-right"]);
//   this.winConditions.push(["middle-left", "middle-middle","middle-right"]);
//   this.winConditions.push(["bottom-left","bottom-middle","bottom-right"]);
//   this.winConditions.push(["top-left","middle-left","bottom-left"]);
//   this.winConditions.push(["top-middle","middle-middle","bottom-middle"]);
//   this.winConditions.push(["top-right","middle-right","bottom-right"]);
//   this.winConditions.push(["top-left","middle-middle","bottom-right"]);
//   this.winConditions.push(["top-right","middle-middle","bottom-left"]);
// }

GameBoard.prototype.checkWinConditions = function() {
  var winConditions = [];
  winConditions.push(this.lines[0][0] + this.lines[0][1] + this.lines[0][2]);
  winConditions.push(this.lines[1][0] + this.lines[1][1] + this.lines[1][2]);
  winConditions.push(this.lines[2][0] + this.lines[2][1] + this.lines[2][2]);
  winConditions.push(this.lines[0][0] + this.lines[1][0] + this.lines[2][0]);
  winConditions.push(this.lines[0][1] + this.lines[1][1] + this.lines[2][1]);
  winConditions.push(this.lines[0][2] + this.lines[1][2] + this.lines[2][2]);
  winConditions.push(this.lines[0][0] + this.lines[1][1] + this.lines[2][2]);
  winConditions.push(this.lines[0][2] + this.lines[1][1] + this.lines[2][0]);
  var X = winConditions.indexOf("XXX");
  var O = winConditions.indexOf("OOO");
  if (X !== -1) {
    //do stuff because X wins
    this.winner = "X";
    this.winCount.winner("X");
  } else if (O !== -1) {
    // do stuff because O wins
    this.winner = "O";
    this.winCount.winner("O");
  } else return;
};

GameBoard.prototype.declareWinner = function() {
  $("#displayWinner").text(this.winner + " wins!");
  for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      if (this.lines[i][j] === "1") {
        this.lines[i][j] = "";
      }
    }
  }
  this.winCount.displayWinner();
};

GameBoard.prototype.switchPlayer = function() {
  if (this.currentPlayer === "X") {
    this.currentPlayer = "O";
  } else {
    this.currentPlayer = "X";
  }
};

GameBoard.prototype.markSpace = function(index1, index2) {
  if (this.lines[index1][index2] === "1") {
    this.lines[index1][index2] = this.currentPlayer;
    this.switchPlayer();
    this.checkWinConditions();
  }
};

GameBoard.prototype.newGame = function() {
  this.lines = [["1", "1", "1"],["1", "1", "1"],["1", "1", "1"]];
  this.currentPlayer = "X";
  this.winner = "none";
};

function WinCount () {
  this.xWins=0;
  this.oWins=0;
};

WinCount.prototype.winner = function(whoWon) {
  if (whoWon === "O") {
    this.oWins += 1;
  } else if (whoWon === "X") {
    this.xWins += 1;
  }
}
// user interface logic

WinCount.prototype.displayWinner = function() {
  $("#xWins").text(board.winCount.xWins);
  $("#oWins").text(board.winCount.oWins);
};

var board = new GameBoard();
$(document).ready(function() {


  board.winCount.displayWinner();
  $("#top-left").click(function(){
    board.markSpace(0,0);
    $("#top-left").children("span").text(board.lines[0][0]);
    if (board.winner !== "none") {
      board.declareWinner();
    }
  });
  $("#top-middle").click(function(){
    board.markSpace(0,1);
    $("#top-middle").children("span").text(board.lines[0][1]);
    if (board.winner !== "none") {
      board.declareWinner();
    }
  });
  $("#top-right").click(function(){
    board.markSpace(0,2);
    $("#top-right").children("span").text(board.lines[0][2]);
    if (board.winner !== "none") {
      board.declareWinner();
    }
  });
  $("#middle-left").click(function(){
    board.markSpace(1,0);
    $("#middle-left").children("span").text(board.lines[1][0]);
    if (board.winner !== "none") {
      board.declareWinner();
    }
  });
  $("#middle-middle").click(function(){
    board.markSpace(1,1);
    $("#middle-middle").children("span").text(board.lines[1][1]);
    if (board.winner !== "none") {
      board.declareWinner();
    }
  });
  $("#middle-right").click(function(){
    board.markSpace(1,2);
    $("#middle-right").children("span").text(board.lines[1][2]);
    if (board.winner !== "none") {
      board.declareWinner();
    }
  });
  $("#bottom-left").click(function(){
    board.markSpace(2,0);
    $("#bottom-left").children("span").text(board.lines[2][0]);
    if (board.winner !== "none") {
      board.declareWinner();
    }
  });
  $("#bottom-middle").click(function(){
    board.markSpace(2,1);
    $("#bottom-middle").children("span").text(board.lines[2][1]);
    if (board.winner !== "none") {
      board.declareWinner();
    }
  });
  $("#bottom-right").click(function(){
    board.markSpace(2,2);
    $("#bottom-right").children("span").text(board.lines[2][2]);
    if (board.winner !== "none") {
      board.declareWinner();

    }
  });


  $("#playAgainBtn").click(function() {
    board.newGame();
    $(".cell").children("span").text("");
    $("#displayWinner").text("");
  });
});
