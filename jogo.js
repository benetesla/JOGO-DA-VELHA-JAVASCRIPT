let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let messagecontainer = document.querySelector("#message");
let MessageText = document.querySelector("#message p");
let SecondPlayer;
//contator para o numero de jogadas
let player1 = 0;
let player2 = 0;
//adicinar clicks
for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", function() {
        let el = checkEl(player1, player2);

        //verificar se o box esta vazio
        if (this.childNodes.length == 0) {
            let cloneel = el.cloneNode(true);

            this.appendChild(cloneel);
            //computador jogar
            if (player1 == player2) {
                player1++;

                if (SecondPlayer == 'IAplayer') {
                    computerPlay();
                    player2++;
                }

            } else {
                player2++;
            }
            //verificar se o jogador ganhou
            CheckWinCondition();

        }
    });
}
//evento para de clicks
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        //verificar se o jogador é o x ou o
        SecondPlayer = this.getAttribute("id");
        for (let j = 0; j < buttons.length; j++) {
            buttons[j].style.display = "none";
        }
        setTimeout(function() {
            let container = document.querySelector("#container");
            container.classList.remove("hide");
        }, 500);
    });
}


function checkEl(player1, player2) {
    let el;
    if (player1 == player2) {
        el = x;
    } else {
        el = o;
    }
    return el;
}
//verificar se o jogador ganhou
function CheckWinCondition() {
    let b1 = document.getElementById("Block-1");
    let b2 = document.getElementById("Block-2");
    let b3 = document.getElementById("Block-3");
    let b4 = document.getElementById("Block-4");
    let b5 = document.getElementById("Block-5");
    let b6 = document.getElementById("Block-6");
    let b7 = document.getElementById("Block-7");
    let b8 = document.getElementById("Block-8");
    let b9 = document.getElementById("Block-9");
    //horizontal
    if (b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {
        let b1Child = b1.childNodes[0].className;
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;

        if (b1Child == 'x' && b2Child == 'x' && b3Child == 'x') {
            declareWinner('x');

        } else if (b1Child == 'o' && b2Child == 'o' && b3Child == 'o') {
            declareWinner('o');
        }
    }

    if (b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {
        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;

        if (b4Child == 'x' && b5Child == 'x' && b6Child == 'x') {
            declareWinner('x');

        } else if (b4Child == 'o' && b5Child == 'o' && b6Child == 'o') {
            declareWinner('o');
        }
    }

    if (b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {
        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if (b7Child == 'x' && b8Child == 'x' && b9Child == 'x') {
            declareWinner('x');


        } else if (b7Child == 'o' && b8Child == 'o' && b9Child == 'o') {
            declareWinner('o');
        }
    }
    if (b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {
        let b1Child = b1.childNodes[0].className;
        let b4Child = b4.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if (b1Child == 'x' && b4Child == 'x' && b7Child == 'x') {
            declareWinner('x');


        } else if (b1Child == 'o' && b4Child == 'o' && b7Child == 'o') {
            declareWinner('o');
        }
    }

    if (b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0) {
        let b2Child = b2.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;

        if (b2Child == 'x' && b5Child == 'x' && b8Child == 'x') {
            declareWinner('x');

        } else if (b2Child == 'o' && b5Child == 'o' && b8Child == 'o') {
            declareWinner('o');
        }
    }
    if (b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0) {
        let b3Child = b3.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if (b3Child == 'x' && b6Child == 'x' && b9Child == 'x') {
            declareWinner('x');

        } else if (b3Child == 'o' && b6Child == 'o' && b9Child == 'o') {
            declareWinner('o');
        }
    }
    //diagonal
    if (b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0) {
        let b1Child = b1.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if (b1Child == 'x' && b5Child == 'x' && b9Child == 'x') {
            declareWinner('x');

        } else if (b1Child == 'o' && b5Child == 'o' && b9Child == 'o') {
            declareWinner('o');
        }
    }
    if (b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0) {
        let b3Child = b3.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if (b3Child == 'x' && b5Child == 'x' && b7Child == 'x') {
            declareWinner('x');

        } else if (b3Child == 'o' && b5Child == 'o' && b7Child == 'o') {
            declareWinner('o');
        }
    }
    //empate
    let count = 0;

    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].childNodes[0] != undefined) {
            count++;
        }
    }
    if (count == 9) {
        declareWinner("Ih rapaz tu e ruim mesmo");
    }
}
//limpar o tabuleiro declara o vencendor e limpa o tabuleiro
function declareWinner(winner) {
    let scoreboardX = document.querySelector("#x-scoreboard-1");
    let scoreboardY = document.querySelector("#o-scoreboard-2");
    let msg = '';
    //verifica o vencedor caso o jogador seja o x
    if (winner == 'x') {
        scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
        msg = "Player 1 ganhou";

    } else if (winner == 'o') {
        scoreboardY.textContent = parseInt(scoreboardY.textContent) + 1;
        msg = "Player 2 ganhou";
    } else {
        msg = "Empate";
    }

    //exibir mensagem de vencedor
    MessageText.innerHTML = msg;
    messagecontainer.classList.remove("hide");
    //remover messeagem de vencedor
    setTimeout(function() {
        messagecontainer.classList.add("hide");
    }, 3000);


    //zera o tabuleiro
    player1 = 0;
    player2 = 0;
    //remove o x e o o do tabuleiro
    let boxesRemove = document.querySelectorAll(".box div");
    for (let i = 0; i < boxesRemove.length; i++) {
        boxesRemove[i].parentNode.removeChild(boxesRemove[i]);
    }

}
//jogo inteligencia com javascript
function computerPlay() {
    let cloneO = o.cloneNode(true);
    count = 0;
    filled = 0;
    for (let i = 0; i < boxes.length; i++) {
        let randomNumber = Math.floor(Math.random() * 5);
        if (boxes[i].childNodes[0] == undefined) {
            if (randomNumber <= 1) {
                boxes[i].appendChild(cloneO);
                count++;
                break
            } else {
                filled++;
            }

        }
    }
    if (count == 0 && filled < 9) {
        computerPlay();
    }

}