let gameActive = true;
let currentPlayer = "Player X";

let playerXArray = [];
let playerOArray = [];

function updateCellStatus(e) {
   if (gameActive === true) {
   const x = document.createElement("img");
   x.setAttribute("src", "images/ButterflyX.png");
   x.setAttribute("id", "butterfly");

   const o = document.createElement('img');
   o.setAttribute("src", "images/FlowerOPastel.png");
   o.setAttribute("id", "flower");

   if (currentPlayer === "Player X") {
      e.append(x);
      playerXArray.push(parseInt(e.id.charAt(5)));
      $('#whoseTurn').text("O's Turn").css("color", "black");

      } else {
      e.append(o);
      playerOArray.push(parseInt(e.id.charAt(5)))
      $('#whoseTurn').text("X's Turn").css("color", "pink");
      }
   
   console.log(`Player X: [${playerXArray}] Player O: [${playerOArray}]`);
   checkForWin();
   
   e.removeAttribute("onclick");          /* displays not-allowed symbol over cell */
   function changeCursor () {
   e.style.cursor= "not-allowed";
   }
   
      setTimeout(changeCursor, 1000);
      currentPlayer = currentPlayer === "Player X" ? "Player O" : "Player X";
      }
}

function checkForWin() {
   let winCombinations = [
      [1, 2, 3], [4, 5, 6], [7, 8, 9],     /* horizontal */
      [1, 4, 7], [2, 5, 8], [3, 6, 9],     /* vertical   */
      [1, 5, 9], [3, 5, 7]                 /* diagonal   */
   ];

   if (currentPlayer === "Player X") {
      winCombinations.forEach((subWinArray) => {
         let combinedArrays = new Set([...subWinArray, ...playerXArray]);
    
         if (combinedArrays.size === playerXArray.length) {
            whoseTurn.innerHTML = "X Wins!";
            gameActive = false;
            document.body.style.cursor="not-allowed";
         }
      
      })
         }  else {
      winCombinations.forEach((subWinArray) => {
         let combinedArrays = new Set([...subWinArray, ...playerOArray]);

         if (combinedArrays.size === playerXArray.length) {
            whoseTurn.innerHTML = "O Wins!";    
            gameActive = false;
            document.body.style.cursor="not-allowed";
               }
           })
      
      }
   }
  

function resetGame(e) {
   let allCells = $('.cell');
   allCells.empty(e);
   playerXArray = [];
   playerOArray = [];  
   location.reload();
}