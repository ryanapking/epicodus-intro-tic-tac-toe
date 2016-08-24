function GameBoard() {
  this.lines = [["1", "1", "1"],["1", "1", "1"],["1", "1", "1"]];
  this.currentPlayer = "X";
};

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
    return "X";
  } else if (O !== -1) {
    // do stuff because O wins
    return "O";
  } else return;
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
  }
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


$(document).ready(function() {
  var board = new GameBoard();
  var wins = new WinCount();
  var winner = board.checkWinConditions();
  wins.winner();


});
