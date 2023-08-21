let gameActive = true;
let currentPlayer = "Player X";
// let whoseTurn = $('h1');
const whoseTurn = document.getElementById("whoseTurn");
let playerXArray = [];
let playerOArray = [];

// let cell = $('.cell');
whoseTurn.innerHTML = "X's Turn";
// cell.addEventListener("mouseover", changeColor());

// function changeColor () {
//    if (currentPlayer === "Player X") {
//       e.style="background-color:blue"
//    }  else {
//       e.style="background-color=pink"
//    }
// }

function updateCellStatus(e) {

   const x = document.createElement("img");
   x.setAttribute("src", "images/ButterflyXPurple.png");
   x.setAttribute("id", "butterfly");

   const o = document.createElement('img');
   o.setAttribute("src", "images/FlowerOPastel.png");
   o.setAttribute("id", "flower");

   let whoseTurn = $('h1');

   if (currentPlayer === "Player X") {
      e.append(x);
      playerXArray.push(parseInt(e.id.charAt(5)));
      whoseTurn.innerText = "Y's Turn";
      } else {
      e.append(o);
      playerOArray.push(parseInt(e.id.charAt(5)))
      whoseTurn.innerHTML = "O's Turn";
      }

   e.removeAttribute("onclick");
   
   console.log(`Player X: [${playerXArray}] Player O: [${playerOArray}]`);
   
   currentPlayer = currentPlayer === "Player X" ? "Player O" : "Player X";

   // whoseTurn.innerHTML = "O's Turn";

   // if (currentPlayer === "Player O") {
   //    $(#whoseTurn).innerHTML = "O's Turn";
   // }  else {
   //   $(#whoseTurn).innerHTML = "X's Turn";
   // }


   }
   
   let winCombinations =  (4, 5, 6);

   
   //('4', '5', '6') || ('1', '2', '3');


 //  let winners = [a, b, c];


   // winners.some(hasAWinningLetter);
   // function hasAWinningLetter(letter) {
   //    return letter.includes
   // }
   
   //= winner.includes()
   // winCombinations.some(checkForWinner)

   // function checkForWinner(playerOArray) {
   //    playerOArray
  // }= winCombination.some();

//function checkForWinner(playerOArray) = playerOArray.includes(winCombination);

      // ('4', '5', '6')   |
      // ('1', '2', '3')
   ;
   
      // (1,2,3) || 
// (4 && 5 && 6) || 
// (7,8,9) || 
// (1,4,7) || 
// (2,5,8) || 
// (3,6,9) || 
// (1,5,9) || 
// (3,5,7)

//console.log(playerOArray in winCombination);

  console.log(playerOArray.includes(winCombinations));
   //checkForWinner();
 

function resetGame(e) {
   let allCells = $('.cell');
   allCells.empty(e);
   playerXArray = [];
   playerOArray = [];  
 
   console.log("Start New Game");
   location.reload();
}
console.log(`Player X: [${playerXArray}] Player O: [${playerOArray}]`);

//function checkForWinner() {
   // if (playerXArray.includes('1') === true) {
   //    console.log("X Wins") 
   // }  else if 
      //console.log(playerOArray.includes('3'))
   //     {
   //    console.log("O Wins")
   // }  else {
   //    console.log("No winner yet")
   // }



// function checkForWinner() {
//    if (playXarray.includes(winningCombination) {
//          $(h1).innerHTML="X has Won the Game!" 
//       }  else if {
//       (playOArray.includes(winningCombination) {
//          $(h1).innerHTML="O has Won the Game!" 
//         }
//       }
//    }
//       || PlayerOArray).includes(winningCombination)


 //if (playerXArray.includes(('5')) && (playerArrayX.includes('3'))) {
   //  console.log('yes');
   //  }  else {
   //      console.log('no');
 //playerArrayX.includes(1)) {
        //console.log(playerArrayX.includes('1'));

// // function declare winnerX
// //  or if containsO = true;
//     //call the function/declare winnerO

// //if there is a winner, disenable the clicking on the squares


// //once there is a winner, a viny line draws through
// function checkForWinner() {
//     if (containsX = true )
// }