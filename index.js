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

//Define players, turns, and marks
var players = [1, 2]
var turn = 0;
var mark = ['X', 'O']

//Create a board
var board =          ' ' + move.topLeft + ' | ' + move.topMid + ' | ' + move.topRight + 
    '  \n-----------\n ' + move.midLeft + ' | ' + move.midMid + ' | ' + move.midRight + 
    '  \n-----------\n ' + move.botLeft + ' | ' + move.botMid + ' | ' + move.botRight + '\n\n'

console.log("INSTRUCTIONS: type makeAMove('row col') in order to place your mark where you have\nrows: top, mid, bot\ncols: left, mid, right\n\nIt's player " + players[turn] + "'s turn ("+ mark[turn] +")\n")
console.log(board)

//Create a move function
function makeAMove(position) {

  //Take input from the current player
  switch(position) {
    case 'top left': 
      move.topLeft = mark[turn];
      break;
    case 'top mid': 
      move.topMid = mark[turn];
      break;
    case 'top right': 
      move.topRight = mark[turn];
      break;
    case 'mid left': 
      move.midLeft = mark[turn];
      break;
    case 'mid mid': 
      move.midMid = mark[turn];
      break;
    case 'mid right': 
      move.midRight = mark[turn];
      break;
    case 'bot left': 
      move.botLeft = mark[turn];
      break;
    case 'bot mid': 
      move.botMid = mark[turn];
      break;
    case 'bot right': 
      move.botRight = mark[turn];
      break;
    default:
      console.log("That's not a valid move, please refer to the instructions")
      players[turn] === 1 ? turn = 1 : turn = 0;
  }

  //Update the board to include the players move
  board =          ' ' + move.topLeft + ' | ' + move.topMid + ' | ' + move.topRight + 
  '  \n-----------\n ' + move.midLeft + ' | ' + move.midMid + ' | ' + move.midRight + 
  '  \n-----------\n ' + move.botLeft + ' | ' + move.botMid + ' | ' + move.botRight + '\n\n'


  //Indicate who's turn is next
  players[turn] === 1 ? turn = 1 : turn = 0;
  console.log("It's player " + players[turn] + "'s turn ("+ mark[turn] +")\n")

  console.log('\n' + board)
}

//Once a player has 3 in a row, declare that player the winner


