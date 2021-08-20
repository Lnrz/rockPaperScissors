/**
 * 0 corrisponde a "sasso"
 * 1 corrisponde a "carta"
 * 2 corrisponde a "forbici"
 * 0 < 1 MA 0 > 2
 * 1 < 2 MA 1 > 0
 * 2 < 0 MA 2 > 1
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
        default:
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
            return 0;
    }
}

//mettere return negli if
function computerPlay(playerSelection, computerSelection) {
    
    playerSelection = convertIntoNum(playerSelection);

    let risultato;

    if (playerSelection == computerSelection) {
        risultato = "Pareggio! ";

    } else if (playerSelection == (computerSelection - 1) % 3) {
        risultato = "Sconfitta! ";

    } else {
        risultato = "Vittoria! ";
    }
}