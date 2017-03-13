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
var winner = false;

  


//Create a board
var board =          ' ' + move.topLeft + ' | ' + move.topMid + ' | ' + move.topRight + 
    '  \n-----------\n ' + move.midLeft + ' | ' + move.midMid + ' | ' + move.midRight + 
    '  \n-----------\n ' + move.botLeft + ' | ' + move.botMid + ' | ' + move.botRight + '\n\n'

console.log("It's player " + players[turn] + "'s turn ("+ mark[turn] +")\n")
console.log(board)

//Create a move function
function makeAMove(position) {

  //Take input from the current player
  switch(position) {
    case 'top left': 
      move.topLeft === ' ' ? move.topLeft = mark[turn] : players[turn] === 1 ? turn = 1 : turn = 0;
      break;
    case 'top mid': 
      move.topMid === ' ' ? move.topMid = mark[turn] : players[turn] === 1 ? turn = 1 : turn = 0;
      break;
    case 'top right': 
      move.topRight === ' ' ? move.topRight = mark[turn] : players[turn] === 1 ? turn = 1 : turn = 0;
      break;
    case 'mid left': 
      move.midLeft === ' ' ? move.midLeft = mark[turn] : players[turn] === 1 ? turn = 1 : turn = 0;
      break;
    case 'mid mid': 
      move.midMid === ' ' ? move.midMid = mark[turn] : players[turn] === 1 ? turn = 1 : turn = 0;
      break;
    case 'mid right': 
      move.midRight === ' ' ? move.midRight = mark[turn] : players[turn] === 1 ? turn = 1 : turn = 0;
      break;
    case 'bot left': 
      move.botLeft === ' ' ? move.botLeft = mark[turn] : players[turn] === 1 ? turn = 1 : turn = 0;
      break;
    case 'bot mid': 
      move.botMid === ' ' ? move.botMid = mark[turn] : players[turn] === 1 ? turn = 1 : turn = 0;
      break;
    case 'bot right': 
      move.botRight === ' ' ? move.botRight = mark[turn] : players[turn] === 1 ? turn = 1 : turn = 0;
      break;
    default:
      console.log("That's not a valid move, please refer to the instructions")
      players[turn] === 1 ? turn = 1 : turn = 0;
  }

  //Update the board to include the players move
  board =          ' ' + move.topLeft + ' | ' + move.topMid + ' | ' + move.topRight + 
  '  \n-----------\n ' + move.midLeft + ' | ' + move.midMid + ' | ' + move.midRight + 
  '  \n-----------\n ' + move.botLeft + ' | ' + move.botMid + ' | ' + move.botRight + '\n\n'



  //Once a player has 3 in a row, declare that player the winner
  function didAnyoneWin(mark) {
    var winConditions = [
      [move.topLeft, move.topMid, move.topRight],
      [move.midLeft, move.midMid, move.midRight],
      [move.botLeft, move.botMid, move.botRight],
      [move.topLeft, move.midLeft, move.botLeft],
      [move.topMid, move.midMid, move.botMid],
      [move.topRight, move.midRight, move.botRight],
      [move.topRight, move.midMid, move.botLeft],
      [move.topLeft, move.midMid, move.botRight]
    ]

    for (var i = 0; i < winConditions.length; i++) {
      var total = 0
      for (var j = 0; j < winConditions[i].length; j++) {
        winConditions[i][j] === mark ? winConditions[i][j] = 1 : winConditions[i][j] = 0
        total += winConditions[i][j]
      }
      if (total === 3) {
        winner = true;
        console.log('Player ' + players[turn] + ' wins!\nRefresh the page to start a new game')
      }
    }
  }
  didAnyoneWin(mark[turn])

  //Indicate who's turn is next
  if (!winner) {
    players[turn] === 1 ? turn = 1 : turn = 0;
    console.log("It's player " + players[turn] + "'s turn ("+ mark[turn] +")\n")
  }

  //Print the board
  console.log('\n' + board)
}



