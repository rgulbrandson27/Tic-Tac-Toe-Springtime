let gameActive = true;
let currentPlayer = "Player X";

let playerXArray = [];
let playerOArray = [];

let cell = $('.cell');
cell.addEventListener("onmouseover", changeColor());

function changeColor(cell) {
   cell.style="background-color=pink";
}






// function hoverEffect() {
//    cell.style="background-color=pink";
   // if (currentPlayer === "Player X") {
   //    cell.style="background-color:blue"
   //     }  else {
   //        cell.style="background-color=pink"
   //     }
    

   // const x = document.createElement("img");
   // x.setAttribute("src", "images/ButterflyXPurple.png");
   // x.setAttribute("id", "light-butterfly");

   // const o = document.createElement('img');
   // o.setAttribute("src", "images/FlowerOPastel.png");
   // o.setAttribute("id", "light-flower");

   // if (currentPlayer === "Player X") {
   //    e.append(x);
   //    } else {
   //    e.append(o);
   //    }
   


      

// function removeChange(e) {
//    if (e.style="background-color: lightblue") {
//       e.style="background-color: yellow";
//    }
// }


// function hoverEffect(e) {
//    const x = document.createElement("img");
//    x.setAttribute("src", "images/ButterflyXPurple.png");
//    x.setAttribute("id", "butterfly");



function updateCellStatus(e) {
  
   const x = document.createElement("img");
   x.setAttribute("src", "images/ButterflyXPurple.png");
   x.setAttribute("id", "butterfly");

   const o = document.createElement('img');
   o.setAttribute("src", "images/FlowerOPastel.png");
   o.setAttribute("id", "flower");

   const whoseTurn = document.getElementById("whoseTurn");

  

   if (currentPlayer === "Player X") {
      e.append(x);
      playerXArray.push(parseInt(e.id.charAt(5)));
      whoseTurn.innerHTML = "O's Turn";
      } else {
      e.append(o);
      playerOArray.push(parseInt(e.id.charAt(5)))
      whoseTurn.innerHTML = "X's Turn";
      }

  

   e.removeAttribute("onclick");
   function changeCursor () {
      e.style.cursor= "not-allowed";
   }
   setTimeout(changeCursor, 2000);
   console.log(`Player X: [${playerXArray}] Player O: [${playerOArray}]`);
   
   currentPlayer = currentPlayer === "Player X" ? "Player O" : "Player X";
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