const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const board = [" ", " ", " ", " ", " ", " ", " ", " ", " ",]
let CurrentPlayer = "X";
let GameActive = true;
let moveCount=0;

const PrintBoard = () => {
        console.log(` ${board[0]} | ${board[1]} | ${board[2]} `)
        console.log("---|---|---")
        console.log(` ${board[3]} | ${board[4]} | ${board[5]} `)
        console.log("---|---|---")
        console.log(` ${board[6]} | ${board[7]} | ${board[8]} `)
}

function checkWinner(){
    const winPatterns = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
  ];
   
  for(let pattern of winPatterns){
    const[a,b,c]=pattern;

    if(
        board[a]=== CurrentPlayer &&
        board[b]=== CurrentPlayer &&
        board[c]=== CurrentPlayer
    ){
        console.log(` player ${CurrentPlayer} wins !`)
        GameActive=false;
        rl.close();
        return;
    }
  }

} 

function checkDraw(){
        if(moveCount>=9 && GameActive){
            console.log("Its a Draw !!!")
            GameActive=false;
            rl.close()
        }
}



function UserInput() {
    rl.question(`Player ${CurrentPlayer} , Enter Position (1-9) : `, function (num) {
        const index = parseInt(num) - 1;
        if (index > 8 || index < 0 || isNaN(index)) {
            console.log("invalid input")
            return UserInput();
        }

        if (board[index] !== " ") {
            console.log("Already taken");
            return UserInput();
        }
        board[index] = CurrentPlayer;
        moveCount++;
        PrintBoard();
        checkWinner();
        checkDraw();

       if(GameActive){
         CurrentPlayer = CurrentPlayer === "X" ? "O" : "X";
        UserInput();
       }
    })
}


console.log("Tik Tak Toe")
PrintBoard()
UserInput()
