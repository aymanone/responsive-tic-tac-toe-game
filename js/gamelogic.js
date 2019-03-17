let playerTurn=2;
let gameBoard=[];
let lengthOfRow=3;
let playerSymbol=["X","O"];
let playerInfo=["player1 :","player2 :"];
let computerPlay=false;
let gameFinished=false;
function checkRow(row){
     if(row.every((elem)=>{ return elem==="X";})){
            return true;
        }
        else if(row.every((elem)=>{ return elem==="O";})){
            return true;
        }
    return false;
}
function checkHorizontalRows(board){
    // everry array in gameBoard as row
    let len=board.length;
    for(let i=0; i<len;i++){
        if(checkRow(board[i])){return true;}
    }
    return false;
}
function checkVerticallRows(board){
    //row like 0 0 1 0 2 0 3 0
     let len=board.length;
    for(let i =0 ; i<len;i++){
        let temp=[];
        for(let j =0;j<len;j++){
            //look we don't do i j but j i
            temp.push(board[j][i]);
            
        }
        if(checkRow(temp)){return true;}
    }
    return false;
}
function checkCrossRows(board){
    //row like 0 0 1 1 2 2 3 3
    let len=board.length;
    let temp1=[];// for 0 0 1 1 2 2
    let temp2=[];//for 2 0  1 1   0 2
    for(let i=0;i<len;i++){
        temp1.push(board[i][i]);
        temp2.push(board[i][len-1-i]);
        
    }
    if(checkRow(temp1) || checkRow(temp2)){
        return true;
    }
    return false;
    
    
    
}
function isWin(board){
    return checkHorizontalRows(board) || checkVerticallRows(board) || checkCrossRows(board);
}
function isTie(board){
    
    let len=board.length;
    for(let i=0;i<len;i++){
        for(let j=0;j<len;j++){
            if(board[i][j]!=="X" && board[i][j]!=="O"){return false;}
        }
    }
    
    return true;
}
function makeGameBoard(lenOfRow){
    let arr=[];
    for(let i=0;i<lenOfRow;i++){
        arr.push([]);
        for(let j=0;j<lenOfRow;j++){
            arr[i].push(3);
        }
    }
    return arr;
}
function computerTurn(len){
    let freeCells=[];
    for(let i=0;i<len;i++){
        for (let j=0;j<len;j++){
            if (gameBoard[i][j]===3){
                freeCells.push([i,j]);
            }
        }
    }
   return freeCells[Math.floor(Math.random()*freeCells.length)];
    
}
function evalPlayerMove(i,j,cell){
    
     if(gameBoard[i][j]!==3 || gameFinished){
    
         return;
     }
     gameBoard[i][j]=playerSymbol[playerTurn%2];
     cell.querySelector("p").textContent=playerSymbol[playerTurn%2];
    //isplayerwin
    if(isWin(gameBoard)){
        gameFinished=true;
        document.querySelector("#show-game-state").textContent=playerInfo[playerTurn%2]+" win!";
        return;
        
        }
    if(isTie(gameBoard)){
        gameFinished=true;
        document.querySelector("#show-game-state").textContent="tie!!!!!";
        return;
    }
    playerTurn++;//so computer will play if true
    if(computerPlay ){
        
        move=computerTurn(lengthOfRow);
        gameBoard[move[0]][move[1]]=playerSymbol[playerTurn%2];
        let cellId="#\\3"+move[0]+" "+move[1];

        document.querySelector(cellId).querySelector("p").textContent=playerSymbol[playerTurn%2];
        playerTurn++;
    }
    else{
        document.querySelector("#show-game-state").textContent=playerInfo[playerTurn%2]+" turn";
    }
}