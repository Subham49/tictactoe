
let turn = "X";
let isGameOver = false;

const changeTurn = () =>{
    return turn === "X"?"0":"X";
}

const chechWin = () =>{
    let boxtext = document.getElementsByClassName('boxtext');
    let win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    win.forEach( e => 
    {
        let x = boxtext[e[0]].innerText;
        let y = boxtext[e[1]].innerText;
        let z = boxtext[e[2]].innerText;
        if(x !== '' && x === y && y === z)
        {
            document.querySelector('.info').innerText = x + " won";
            isGameOver = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
        }
    })
}

let boxes = document.getElementsByClassName("box");

for(let i=0; i<boxes.length; i++)
{
    let boxtext = boxes[i].querySelector('.boxtext');
    boxes[i].addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            chechWin();
            if(!isGameOver)
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
        }
    })
}

reset.addEventListener('click', () =>{
    let boxtext = document.querySelectorAll('.boxtext');
    for(let i=0; i<boxtext.length; i++)
    {
        boxtext[i].innerText = "";
    }
    turn = "X";
    isGameOver = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
})