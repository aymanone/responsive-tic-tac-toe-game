
function drawGameBoard(lenOfRow,board){
    // to draw the board in the html page
    if(lenOfRow==3){
        board.className+=" game-three-cells";
    }
    else{
        board.className+=" game-four-cells";
    }
    for (let i=0;i<lenOfRow;i++){
        for(let j=0;j<lenOfRow;j++){
    board.innerHTML+=`<div class="game-cell" id="${i}${j}" onclick="evalPlayerMove(${i},${j},this)"><p>&nbsp;</P></div>`;
        }
    }

    
}


function startGame(){
    // when start game from game interface so draw the board etc
    let numberOfPlayer=document.querySelector('input[name="players-number"]:checked').value;
    computerPlay=numberOfPlayer==="1";
     lengthOfRow=parseInt(document.querySelector('input[name="num-of-cells"]:checked').value);
    gameBoard=makeGameBoard(lengthOfRow);
    
  let board=document.querySelector(".game-board");
    drawGameBoard(lengthOfRow,board);
let gameBar=document.querySelector(".game-bar");
    
  let interface=document.querySelector(".game-interface");
  interface.style.display="none";
 board.style.display="grid";
gameBar.style.display="flex";
}
function newGame(){
    playerTurn=2;
    gameBoard=[];
    computerPlay=false;
    gameFinished=false;
let board=document.querySelector(".game-board");
board.innerHTML="";
let gameBar=document.querySelector(".game-bar");
    
let interface=document.querySelector(".game-interface");
  board.style.display="none";
gameBar.style.display="none";
interface.style.display="flex";
}