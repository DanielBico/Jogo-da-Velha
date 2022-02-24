
document.addEventListener('DOMContentLoaded', () => {


  let squares = document. querySelectorAll(".square");

  squares.forEach((square) => {
    square.addEventListener('click', handleClick);

  })

})

function handleClick(event) {

  let square = event.target;
  let position = square.id;

  if (handleMove(position)) {

    setTimeout(() => {
      alert(" O Jogo Acabou - O Vencedor foi Player " + playerTime);

    }, 10);

  };
  updateSquare(position);

}

function updateSquare(position) {
  let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`;
}



// restart

function resetGame() {
  let squares = document.getElementById(restart);

  squares.forEach((squares) =>{
    let board = '';
    let symbol = board[position];

    if (symbol != '') {
      squares.innerHTML = `<div class= '${symbol}'></div>`;
    }

  })
}



// function restart() {
//   game.board();
//   resetGame();
//   let gameOverLayer = document.getElementById("gameOver");
//   gameOverLayer.style.display = 'none';
// };


