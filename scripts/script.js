/**
 * 0 corrisponde a "sasso"
 * 1 corrisponde a "carta"
 * 2 corrisponde a "forbici"
*/

function computerSelection() {
    return Math.floor(Math.random() * 3);
}

function convertIntoString(n) {

    switch (n) {

        case 0:
            return "Sasso";
        case 1:
            return "Carta";
        case 2:
            return "Forbici";
    }
}

function convertIntoNum(playerSelection) {

    playerSelection = playerSelection.toLowerCase().trim();

    switch (playerSelection) {

        case "sasso":
            return 0;
        case "carta":
            return 1;
        case "forbici":
            return 2;
        default:
            return -1;
    }
}

function computerPlay(playerSelection, computerSelection) {
    
    if (playerSelection == computerSelection) {
        return `Pareggio!`;

    } else if (playerSelection == (computerSelection - 1) % 3) {
        return `Sconfitta! ${convertIntoString(computerSelection)} vince su ${convertIntoString(playerSelection)}`;

    } else {
        return `Vittoria! ${convertIntoString(playerSelection)} vince su ${convertIntoString(computerSelection)}`;
    }
}

/*
function game() {

    let playerSelection = -1;
    let playerWins = 0;
    let computerWins = 0;
    let result;

    for (let i = 0; i < 5; i++, playerSelection = -1) {

        while (playerSelection < 0) {
            
            playerSelection = prompt("Sasso, carta o forbici?");

            playerSelection = convertIntoNum(playerSelection);

            if(playerSelection == -1) console.log(`Inserire un valore valido`);
        }

        result = computerPlay(playerSelection, computerSelection());

        console.log(result);

        result = result.charAt(0);

        if (result == `V`) {
            playerWins++;
        } else if (result == `S`) {
            computerWins++;
        }
    }

    if (playerWins > computerWins) {
        console.log(`Hai vinto con ${playerWins} punti!`);
    } else if (playerWins < computerWins) {
        console.log(`Ha vinto il computer con ${computerWins} punti!`);
    } else {
        console.log(`Pareggio con ${playerWins} punti a testa!`);
    }
}
*/