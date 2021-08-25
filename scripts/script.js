/**
 * 0 corrisponde a "sasso"
 * 1 corrisponde a "carta"
 * 2 corrisponde a "forbici"
*/

function computerSelection() {
    return Math.floor(Math.random() * 3);
}
/*
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
*/
function convertIntoNum(playerSelection) {

    switch (playerSelection) {

        case "rock":
            return 0;
        case "paper":
            return 1;
        case "scissors":
            return 2;
    }
}

function isPlayerVictory(computerSelection, playerSelection) {
    
    if (playerSelection == computerSelection) {
        return 0;

    } else if (playerSelection == (computerSelection - 1) % 3) {
        return -1;

    } else {
        return 1;
    }
}

const imagesList = [...document.querySelectorAll("#chooseImages > img")];
const button = document.querySelector("button");

function selectUnselect(obj) {
    
    let slcImg = obj.target;

    imagesList.forEach(img => img.classList.remove("selected"));

    slcImg.classList.add("selected");
}

function addComputerChoose(n) {

    const computerChoose = document.querySelector("#computerChoose");
    const img = document.createElement("img");

    switch (n) {
        case 0:
            img.setAttribute("src", "images/rock.png");
            break;
        case 1:
            img.setAttribute("src", "images/paper.png");
            break;
        case 2:
            img.setAttribute("src", "images/scissors.png");
            break;
    }

    computerChoose.appendChild(img);
}

function addParagraph(n) {

    const div = document.querySelector("#result");
    const p = document.createElement("p");

    switch (n) {
        case -1:
            p.textContent = "Hai perso!";
            break;
        case 0:
            p.textContent = "Pareggio!";
            break;
        case 1:
            p.textContent = "Hai vinto!";
            break;
    }

    div.appendChild(p);
}

function addPoint(n) {

    if (!n) return;

    const img = document.createElement("img");
    img.setAttribute("src", "images/point.png");

    const div = document.querySelector(
        (n > 0) ? "#playerVictories" :
        "#computerVictories"
    );

    div.appendChild(img);
}

function playGame() {

    let slcImg = imagesList.filter(img => {
        return img.classList.value.includes("selected");
    });

    slcImg = slcImg[0];

    if (!slcImg) {
        alert("Selezionare una delle icone per giocare")
        return;
    }

    let pcChoose = computerSelection();

    addComputerChoose(pcChoose);

    let result = isPlayerVictory( pcChoose,
        convertIntoNum(slcImg.getAttribute("id"))
    );

    addParagraph(result);

    addPoint(result);
}

imagesList.forEach(img => img.addEventListener("click", selectUnselect));

button.addEventListener("click", playGame)