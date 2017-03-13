//Define positions on the board (rows / columns)
var move = {
  topLeft:  ' ',
  topMid :  ' ',
  topRight: ' ', 
  midLeft:  ' ',
  midMid :  ' ',
  midRight: ' ', 
  botLeft:  ' ',
  botMid :  ' ',
  botRight: ' ' 
}

var players = [1, 2]
var turn = 1;
var mark = ['X', 'O']
//Repeat these
function makeAMove(position) {
  //Create a board
  var board =      ' ' + move.topLeft + ' | ' + move.topMid + ' | ' + move.topRight + 
  '  \n-----------\n ' + move.midLeft + ' | ' + move.midMid + ' | ' + move.midRight + 
  '  \n-----------\n ' + move.botLeft + ' | ' + move.botMid + ' | ' + move.botRight 

  console.log(board)

  //Indicate who's turn it is
  players[turn] === 2 ? turn = 0 : turn = 1;
  console.log("\nIt's player " + players[turn] + "'s turn ("+ mark[turn] +")")

  //Take input from the current player
  
  //Update the board to include the players move
}

//Once a player has 3 in a row, declare that player the winner

