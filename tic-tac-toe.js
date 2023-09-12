// MICHAELS NOTE IS HERE

let gameActive = true;
let currentPlayer = "Player X";

let playerXArray = [];
let playerOArray = [];

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
      
      winCombinations.forEach((subWinArray) => {
         let combinedArrays = new Set([...subWinArray, ...playerXArray]);
         return (
            combinedArrays.size === playerXArray.length ? whoseTurn.innerHTML = "X Wins!"
            : console.log("no winner yet")
         )});

      setTimeout(() => $('#whoseTurn').text("O's Turn"), 300);
      } else {
      e.append(o);
      playerOArray.push(parseInt(e.id.charAt(5)))
      winCombinations.forEach((subWinArray) => {
         let combinedArrays = new Set([...subWinArray, ...playerOArray]);
         return (
            combinedArrays.size === playerXArray.length ? whoseTurn.innerHTML = "O Wins!": console.log("no winner yet")
         )});
      setTimeout(() => $('#whoseTurn').text("X's Turn"), 300);
      }
      
    
      e.removeAttribute("onclick");          /* displays not-allowed symbol over cell */
      function changeCursor () {
      e.style.cursor= "not-allowed";
      }
   

      setTimeout(changeCursor, 2000);
      console.log(`Player X: [${playerXArray}]`);
   
      currentPlayer = currentPlayer === "Player X" ? "Player O" : "Player X";
   };


   const winCombinations = [
      [1, 2, 3], [4, 5, 6], [7, 8, 9],     /* horizontal */
      [1, 4, 7], [2, 5, 8], [3, 6, 9],     /* vertical   */
      [1, 5, 9], [3, 5, 7]                 /* diagonal   */
   ];

function resetGame(e) {
   let allCells = $('.cell');
   allCells.empty(e);
   playerXArray = [];
   playerOArray = [];  

   console.log("Start New Game");
   location.reload();
}
console.log(`Player X: [${playerXArray}] Player O: [${playerOArray}]`);
