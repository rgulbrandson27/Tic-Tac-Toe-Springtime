const x = document.createElement("img");
  x.setAttribute("src", "images/Ximage.png");

const o = document.createElement('img');
   o.setAttribute("src", "images/daisy.svg");

let gameActive = true;
let currentPlayer = "x";   
let currentPlayerArray = [];
 

function updateCellStatus(e) {
   $(e).appendTo(currentPlayer);
   e.removeAttribute("onclick");
   currentPlayerArray.push((e.id.charAt(5)));
   console.log("Ive been clicked by player " + currentPlayer);
   console.log(currentPlayerArray);
   currentPlayer = currentPlayer === "x" ? "x" : "o";
}

function checkForWinner() 
   if (currentPlayerArray.includes(1)) {
       return true;{
   // console.log({checkForWinner});
  
   // }
       }
}



// function changePlayer () {
//    xPlaysNext = !xPlaysNext;





   // let PlayerXArray = [];
   // let PlayerOArray = [];

   

      // PlayerXArray.push((e.id.charAt(5)));        //
      // console.log("I've been clicked by Player X");

      // PlayerOArray.push((e.id.charAt(5)));        //
      // console.log("I've been clicked by Player O");

      // console.log('Player X: [' + PlayerXArray +  '] & Player O: [ ' + PlayerOArray + ']');
     // checkForWinner();
 






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




//  (1 && 2 && 3) || (4 && 5 && 6) || (7,8,9) || (1,4,7) || (2,5,8) || (3,6,9) || (1,5,9) || (3,5,7) {


   //declare x



   // if containsX = true;
//    //  1,2,3   4,5,6   7,8,9   1,4,7  2,5,8  3,6,9  1,5,9  3,5,7
// // function declare winnerX
// //  or if containsO = true;
//     //call the function/declare winnerO



// //if there is a winner, disenable the clicking on the squares






// adds X to cell
// only if empty
// only if no winner yet
// //only if x's turn
// function playX() {

    


//  //const myButton = document.getElementById('myButton').addEventListener('click', () => {
//    //console.log("This works");
// }




// //once there is a winner, a viny line draws through
// function checkForWinner() {
//     if (containsX = true )
// }










// //or function x wins or function o wins
// //butterfly flaps
// //wreath rotates circle
// function announceWinner(){

// }


// //reset game by emptying all cells
// function startNewGame() 
