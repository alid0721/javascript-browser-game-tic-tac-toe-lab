/*-------------------------------- Constants --------------------------------*/
const msgElement= document.querySelector("#message")
const squareElement = document.querySelectorAll(".sqr")
const winningComb=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
/*---------------------------- Variables (state) ----------------------------*/
//let playerChoice
//let computerchoice
//let computerplayed=false
//let board=[]
//let turn="playerturn"
//let winner
//let tie
/*------------------------ Cached Element References ------------------------*/

init()


/*-------------------------------- Functions --------------------------------*/
/*
const play=(event)=>{
    playerChoice=event.target.id 
    const sqrSelected=document.querySelector(`#${playerChoice}`)
    sqrSelected.textContent="X"
    computerchoice=Math.floor(Math.random()*9)
    //console.log(computerchoice)
    //console.log(playerChoice)
    const compSelect=document.querySelector(`#s${computerchoice}`)
    computerplayed=false
    while (computerplayed===false){
        if (compSelect.textContent!==""){
            console.log("square already used")
            computerchoice=Math.floor(Math.random()*9)

        } else{
            compSelect.textContent="o"
            computerplayed=true
        }
    }
}'
*/

let winnerPler
function init(){
    board=[``,``,``,``,``,``,``,``,``]
    turn="X"
    winner=false
    tie=false
    render()
}
function render(){
    updateBoard(board)
   
}

function updateBoard(board){
    squareElement.forEach((square,index)=>{
        square.addEventListener("click",()=>{
            if (turn==="X" && board[index] ==="" && winner!==true &&tie===false){
                board[index]=turn
                square.textContent=board[index]
                checkForWinner()
                checkForTie()
                turn="O"
                updateMessage(msgElement)


            }else if(turn ==="O" && board[index]==="" && winner!==true && tie===false){
                board[index]=turn
                square.textContent=board[index]
                checkForWinner()
                checkForTie()
                turn="X"
                updateMessage(msgElement)

            }
        })
    })
}
function updateMessage(msgElement){
    console.log("in update message")
    if (winner===false && tie===false){
        msgElement.textContent=`It is ${turn}'s turn`
    } else if (winner=== false && tie===true){
        msgElement.textContent="It's a tie"
    }else if (winner===true && tie===false){
        msgElement.textContent=`${winnerPler} has won`
    }
}
/*function handleClick(event){
    const SquareIndex=event.target.id
    if (board[SquareIndex]==="X" || board[SquareIndex]==="O"){
        return
    } else if (winner===true){
        return
    }
}
*/
/*----------------------------- Event Listeners -----------------------------*/
/*squareElement.forEach((square)=>{
    square.addEventListener("click",play)
})
*/
function checkForWinner(){
    board.forEach(()=>{
        if (board!==""){
            if  (board[0]!==""&&board[0]===board[1]&&board[0]===board[2]){
                winner=true
                console.log(winner)
                winnerPler = turn

                return winner
            }else if  (board[3]!==""&&board[3]===board[4]&&board[3]===board[5]){
                winner=true
                console.log(winner)
                winnerPler = turn

                return winner
            }else if  (board[6]!==""&&board[6]===board[7]&&board[6]===board[8]){
                winner=true
                console.log(winner)
                winnerPler = turn

                return winner
            } else if  (board[0]!==""&&board[0]===board[3]&&board[0]===board[6]){
                winner=true
                console.log(winner)
                winnerPler = turn

                return winner
            } else if  (board[1]!==""&&board[1]===board[4]&&board[1]===board[7]){
                winner=true
                console.log(winner)
                winnerPler = turn

                return winner
            }else if  (board[2]!==""&&board[2]===board[5]&&board[2]===board[8]){
                winner=true
                console.log(winner)
                winnerPler = turn

                return winner
            }else if  (board[0]!==""&&board[0]===board[4]&&board[0]===board[8]){
                winner=true
                console.log(winner)
                winnerPler = turn

                return winner
            }else if  (board[2]!==""&&board[2]===board[4]&&board[2]===board[6]){
                winner=true
                console.log(winner)
                winnerPler = turn

                return winner
            }


        }
    })
}
function checkForTie(){
    if (winner==true){
        return
    }else{
        for (let i =0;i<board.length-1;i++){
            if (board[i]===""){
                tie=false
                return
            }
        }
       
    }
    // changeTurns()
    tie=true
    console.log(tie)
    return tie
}
// function changeTurns(){
//     if (turn="X"){
//         turn="O"
//         console.log(turn)
//         return turn
//     }else{
//         turn="X"
//         console.log(turn)
//         return turn
//     }
// }