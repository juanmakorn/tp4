const ROCK = "piedra";
const PAPER = "papel";
const SCISSORS = "tijera";

const EMPATE = 0;
const GANAS = 1;
const PERDISTE = 2;

let isPlaying = false;


const papelBtn = document.getElementById("papel");
const tijeraBtn = document.getElementById("tijera");
const piedraBtn = document.getElementById("piedra")

piedraBtn.addEventListener("click", () => {
    play(ROCK);
});
papelBtn.addEventListener("click", () => {
    play(PAPER);
});
tijeraBtn.addEventListener("click", () => {
    play(SCISSORS);
});

function play(userOption) {
        const machineOption = calcMachineOption();
        const result = calcResult(userOption, machineOption);

        switch (result) {
            case EMPATE:
                alert ("Elegi:"+ machineOption +  "\n resultado:\n    empatamos =_=");
                break;
            case GANAS:
                alert ("Elegi:"+ machineOption +  "\n resultado:\n    Ganaste :(");
                break;
            case PERDISTE:
                alert ("Elegi:"+ machineOption +  "\n resultado:\n     Perdiste :)");
                break;
        }
         }


function calcMachineOption() {
    const number = Math.floor(Math.random() * 3);
    switch (number) {
        case 0:
            return ROCK;
        case 1:
            return PAPER;
        case 2:
            return SCISSORS;
    }
}

function calcResult(userOption, machineOption) {
    if (userOption === machineOption) {
        return EMPATE;

    } else if (userOption === ROCK) {

        if (machineOption === PAPER) return PERDISTE;
        if (machineOption === SCISSORS) return GANAS;

    } else if (userOption === PAPER) {

        if (machineOption === SCISSORS) return PERDISTE;
        if (machineOption === ROCK) return GANAS;

    } else if (userOption === SCISSORS) {

        if (machineOption === ROCK) return PERDISTE;
        if (machineOption === PAPER) return GANAS;

    }
}