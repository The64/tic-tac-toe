const playerXContainer = document.querySelector(".player-x");
const playerOContainer = document.querySelector(".player-o");

const turnTextX = document.querySelector(".turn-text-x");
const turnTextO = document.querySelector(".turn-text-o");

const squares = document.querySelectorAll(".squares");

let playerXElections = [];
let playerOElections = [];

let i = 1;

squares.forEach(element => {
    
    element.addEventListener("click", function (e) {
        
        let thing = e.target;
        console.log(thing)


        if(i == 1 & thing.textContent == "") {

            thing.style.color = "royalblue";
            thing.textContent = "X";
            thing.classList.remove("squares-hover")

            i = 0;

            turnTextX.style.color = "transparent";
            turnTextO.style.color = "#0f0";

            playerXContainer.classList.remove("turn");
            playerOContainer.classList.add("turn");

            playerXElections.push(thing.classList[2]);

            win(playerXElections,"X");


        }
        else if (i == 0 & thing.textContent == "") {

            thing.style.color = "rgb(255, 65, 65)";
            thing.textContent = "O";
            thing.classList.remove("squares-hover")

            i = 1;

            turnTextO.style.color = "transparent";
            turnTextX.style.color = "#0f0";

            playerOContainer.classList.remove("turn");
            playerXContainer.classList.add("turn");

            playerOElections.push(thing.classList[2]);

            win(playerOElections,"O");

        }
        
    })

});


function win(array,winner) {

    const h2Winner = document.querySelector(".winner");
    const winPoster = document.querySelector(".win-poster");
    const overlay = document.querySelector(".overlay");

    function finalWinner(winner) {

        h2Winner.textContent = winner;
        if(winner == "X"){
            h2Winner.classList.add("x");
            h2Winner.removeAttribute("hidden");
        }

        else if (winner == "O"){
            h2Winner.classList.add("o");
            h2Winner.removeAttribute("hidden");
        }

        else if (winner == "draw"){
            const winPosterText = document.querySelectorAll(".win-poster-text");
            winPosterText[0].textContent = "THERE IS A";
            winPosterText[1].textContent = "DRAW";
        }
        winPoster.removeAttribute("hidden");
        overlay.removeAttribute("hidden");

    }


    /* VERTICAL */
    if(array.includes("1") & array.includes("2") & array.includes("3") || array.includes("4") & array.includes("5") & array.includes("6") || array.includes("7") & array.includes("8") & array.includes("9")) {
        finalWinner(winner);
    }

    /* HORIZONTAL */
    else if(array.includes("1") & array.includes("4") & array.includes("7") || array.includes("2") & array.includes("5") & array.includes("8") || array.includes("3") & array.includes("6") & array.includes("9")) {
        finalWinner(winner);
    }

    /* DIAGONAL */
    else if(array.includes("1") & array.includes("5") & array.includes("9") || array.includes("3") & array.includes("5") & array.includes("7")) {
        finalWinner(winner);
    }

    /* DRAW */
    else if(array.length == 5){
        finalWinner("draw");
    }

}

const winButton = document.querySelector(".win-button");

winButton.addEventListener("click", function () {
    window.location.reload();
})