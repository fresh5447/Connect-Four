

X = "black";
O = "red";

var columns = createBoard();

function createBoard() {
	columns = [];
	for (var column = 0; column < 8; column++) {
		columns[column] = [];
	  for (var row = 0; row < 7; row++) {
      columns[column][row] = "-";
	  }
	}
	return columns;
}

// Display Empty Board/ Grid

var getGridText = function(){
	var result = "";
	for (var row = 0; row < 7; row++) {
			for(var column = 0; column < 8; column++){
				result += columns[column][row];
			}
			result += "\n"
		}
		return result;
}

var updateCell = function(column, row){
	var cellId = "" + column + row;
	if (columns[column][row] == 'X') {
		document.getElementById(cellId).setAttribute('style', 'background-color: black');
	} else	{
		document.getElementById(cellId).setAttribute('style', 'background-color: red');
	}
}

// Need To Add Black Piece to Empty Row
var addBlackPiece = function (column) {
  // search for last empty slot
  var index = lastEmptyRow(column);
  columns[column][index] = "X";
  updateCell(column, index);
  checkIfVerticalWinner();
  return getGridText();
}

// Need to Add Red Piece to Empty Row
var addRedPiece = function(column){
	var index = lastEmptyRow(column);
  columns[column][index] = "O";
  updateCell(column, index);
  checkIfVerticalWinner();
	return getGridText();
}

var lastEmptyRow = function(column) {
	// check the value of the rows
	for (var row = 0; row < columns[column].length; row++) {
		if (columns[column][row] != '-') {
			return row - 1;
		}
	}
	return columns[column].length - 1;
}



// Test for Vertical Win
var	checkIfVerticalWinner = function(){
	var winner = "-"
	for (var column = 0; column < columns.length; column++){
		winner = columnWinner(column);
		console.log(winner, columns[column]);
		if(winner != "-"){
			if (winner == "X") {
				alert("Black is the winner")
			}else{
				alert("Red is the winner")
			}
			return winner;
		}
	}
	return winner;
}

var columnWinner = function(column){
	var winner = "-";
	var count = 0;
	for (var row = 0; row < columns[column].length; row++){
		if(winner == columns[column][row]){
			count += 1;
			if(count === 4){
				return winner
			}
		}
		winner = columns[column][row];
	}
	return "-";
}


//----------TESTS----------------//

EMPTY_ROW = "--------\n"

EMPTY_STRING = "";
ONE_BLACK = "";
ANOTHER_BLACK = "";
ONE_RED = "";
for (var i = 0; i < 6; i++) {
	EMPTY_STRING += EMPTY_ROW;
	ONE_BLACK += EMPTY_ROW;
	ANOTHER_BLACK += EMPTY_ROW;
	ONE_RED += EMPTY_ROW;
}
ONE_BLACK += "X-------" + "\n";
ANOTHER_BLACK += "------X-" + "\n"
ONE_RED +=  "O-------" + "\n";
EMPTY_STRING += EMPTY_ROW;
RED_ON_BLACK = "";
for (var i = 0; i < 5; i++) {
	RED_ON_BLACK += EMPTY_ROW;
}
RED_ON_BLACK += "--O-----\n";
RED_ON_BLACK += "--X-----\n";


var assert = function(test, failMessage){

	if (!test){
	 throw failMessage 
	}
};


// createBoard();assert(getGridText() == EMPTY_STRING, "Empty board failed!");
// createBoard();assert(addBlackPiece(0)== ONE_BLACK, "add black piece failed");
// createBoard();assert(addRedPiece(0) == ONE_RED, "add red piece failed");
// createBoard();assert(addBlackPiece(6) == ANOTHER_BLACK, "Aother black piece failed");

// createBoard();
// addBlackPiece(2);
// addRedPiece(2);
// assert(getGridText() == RED_ON_BLACK, "Stacking red on black failed");

// createBoard();
// addBlackPiece(3);
// addBlackPiece(3);
// addBlackPiece(3);
// addBlackPiece(3);
// console.log(getGridText());
// assert(checkIfVerticalWinner() == "X" , "checkIfVerticalWinner failed test");