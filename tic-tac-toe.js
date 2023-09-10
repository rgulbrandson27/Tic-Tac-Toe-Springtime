let gameActive = true;
let currentPlayer = "Player X";

let playerXArray = [];
let playerOArray = [];

// let cell =  $('.cell');


// $(.cell).forEach( (cell, index) => {
//    $(.cell).addEventListener('click', () = )
// })

// cell.on('mouseover', () => {
//    cell:style.backgroundColor = "blue";  
//    // style="background-color=pink";
// });



// tiles.forEach( (tile, index) => {
//    tile.addEventListener('click', () => userAction(tile, index));
// });



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
// $('.cell').onclick(

// cell.addEventListener('onclick', updateCellStatus);


function updateCellStatus(e) {
  
   const x = document.createElement("img");
   x.setAttribute("src", "images/ButterflyX.png");
   x.setAttribute("id", "butterfly");

   const o = document.createElement('img');
   o.setAttribute("src", "images/FlowerOPastel.png");
   o.setAttribute("id", "flower");

   if (currentPlayer === "Player X") {
      e.append(x);
      playerXArray.push(parseInt(e.id.charAt(5)));
      // console.log(playerXArray);

      let i = [1,5,9]; 

      let combinedArray = new Set([...i, ...playerXArray]);
      console.log(combinedArray);
      console.log(combinedArray.size);


      combinedArray.size === playerXArray.length ? console.log("X Wins") : console.log("no winner yet");
   

   // playerXArray.forEach(checkForWin);

   // let checkForWin = (playerXArray, i) => {
   //    return i.every((el) => {
   //       return playerXArray.includes(el)
   //    })
   // }
   // console.log(checkForWin((playerXArray, i)));
      
   
   
      // winCombinations.forEach(winCombination => {
         // let combined = new Set([...winCombination, ...playerXArray]);
         // console.log(combined);
         // playerXArray.includes(winCombinations) ? console.log('yes') : console.log('no');
         
      // playerXArray.find(winCombinations);
      // console.log()

      // const containsWin = playerXArray.find((winCombination) => {
         
      // })

      // winCombinations.forEach(winCombination => {
      //    playerXArray.includes(winCombination) ? console.log('e') : console.log('no');
      // const includesWin = playerXArray.includes(winCombination)
      // console.log(includesWin);
      
     
      $('#whoseTurn').text("O's Turn")
      // whoseTurn.innerHTML = "O's Turn";
      } else {
      e.append(o);
      playerOArray.push(parseInt(e.id.charAt(5)))
      $('#whoseTurn').text("X's Turn");
      // whoseTurn.innerHTML = "X's Turn";
      }

   // function checkforXWin() {
   
      
      

   e.removeAttribute("onclick");          /* additional feature */
   function changeCursor () {
      e.style.cursor= "not-allowed";
   }
   setTimeout(changeCursor, 2000);
   console.log(`Player X: [${playerXArray}]`);
   
   // Player O: [${playerOArray}

   currentPlayer = currentPlayer === "Player X" ? "Player O" : "Player X";
   };


   const winCombinations = [
      [1, 2, 3], [4, 5, 6], [7, 8, 9],     /* horizontal */
      [1, 4, 7], [2, 5, 8], [3, 6, 9],     /* vertical   */
      [1, 5, 9], [3, 5, 7]                 /* diagonal   */
   ];

//keep in case I want to play around with something different
   // const winCombination = 
   //    [1, 2, 3] || [4, 5, 6] || [7, 8, 9] ||      /* horizontal */
   //    [1, 4, 7] || [2, 5, 8] ||  [3, 6, 9] ||     /* vertical   */
   //    [1, 5, 9] || [3, 5, 7];                     /* diagonal   */


//function checkForWinner(playerOArray) = playerOArray.includes(winCombination);

  console.log(playerOArray.includes(winCombinations));

 

function resetGame(e) {
   let allCells = $('.cell');
   allCells.empty(e);
   playerXArray = [];
   playerOArray = [];  
 
   console.log("Start New Game");
   location.reload();
}
console.log(`Player X: [${playerXArray}] Player O: [${playerOArray}]`);





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

