console.log("welcome to leo's Tic Tac Toe")
let audio = new Audio("ting.mp3")

let turn = "X"
let gameover = false;

//function to change turn
const changeturn = () =>{
    return turn === "X"?  "O": "X"
}

//function to check for win
const checkwin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e =>{
         if (boxtext[e[0]].innerText === boxtext[e[1]].innerText && boxtext[e[2]].innerText === boxtext[e[1]].innerText && boxtext[e[0]].innerText !== "" ) {
            document.querySelector('.display').innerText = boxtext[e[0]].innerText + " won"
            gameover = true
         }
    })
}

//game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeturn();
            audio.play();
            checkwin();
            if (!gameover) {
                document.getElementsByClassName("display")[0].innerText = "player "+turn+"'s turn";
            }
        }
    })
})


// reset
reset.addEventListener('click',()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText = ""
    });
    turn = "X";
    gameover = false
    document.getElementsByClassName("display")[0].innerText = "player "+turn+"'s turn";
})