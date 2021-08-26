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

    return img;
}


function addParagraph(n) {

    const resultDiv = document.querySelector("#result");

    const p = document.createElement("p");

    switch (n) {
        case -1:
            p.textContent = "Hai perso!";
            p.style.color = "#69322D";
            break;
        case 0:
            p.textContent = "Pareggio!";
            break;
        case 1:
            p.textContent = "Hai vinto!";
            p.style.color = "#A5A541";
            break;
    }

    resultDiv.appendChild(p);

    return p;
}


function addPoint(winner) {

    const img = document.createElement("img");
    img.setAttribute("src", "images/point.png");

    winner.appendChild(img);
}


function clearScreen(slcImg, resultPara, computerIcon) {

    slcImg.classList.remove("selected");

    resultPara.remove();

    computerIcon.remove();

    switchClickable(true);
}


function switchClickable(b) {

    document.querySelectorAll("#chooseImages > img")
        .forEach(img => img.style.pointerEvents = (b)? "auto" : "none");

    document.querySelector("button").style.pointerEvents = (b)? "auto" : "none";
}


async function resetGame(winner) {

    document.querySelectorAll(".points")
        .forEach(div => {
            while(div.firstChild) {
                div.removeChild(div.firstChild);
            }
        }
    );

    const div = document.querySelector("#blackCurtain");
    const p = document.createElement("p");
    const img = document.createElement("img");

    let boolean = winner.getAttribute("id") == "playerVictories";

    p.innerText = (boolean) ? "Hai sconfitto il computer!" :
        "Hai perso contro il computer!"
    ;
    
    img.setAttribute("src", (boolean) ?
        "images/happyFace.png" :
        "images/sadFace.png")
    ;

    div.style.pointerEvents = "auto";
    div.style.backgroundColor = "black";
    div.appendChild(img);
    div.appendChild(p);

    await new Promise(r => setTimeout(r, 1500));

    div.removeChild(p);
    div.removeChild(img);
    div.style.backgroundColor = "transparent";
    div.style.pointerEvents = "none";

}


async function playGame() {

    switchClickable(false);

    let slcImg = imagesList.filter(img => {
        return img.classList.value.includes("selected");
    });

    slcImg = slcImg[0];

    if (!slcImg) {
        alert("Selezionare una delle icone per giocare")
        switchClickable(true);
        return;
    }

    let pcChoose = computerSelection();

    const computerIcon = addComputerChoose(pcChoose);

    let result = isPlayerVictory( pcChoose,
        convertIntoNum(slcImg.getAttribute("id"))
    );

    const resultPara = addParagraph(result);

    const winnerPoints = document.querySelector(
        (result > 0) ? "#playerVictories" :
        "#computerVictories"
    );
    
    if (result) {
        addPoint(winnerPoints);
    }

    await new Promise(r => setTimeout(r, 1000));

    clearScreen(slcImg, resultPara, computerIcon);

    if (winnerPoints.childElementCount == 5) {
        resetGame(winnerPoints);
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////

const imagesList = [...document.querySelectorAll("#chooseImages > img")];
const button = document.querySelector("button");

imagesList.forEach(img => img.addEventListener("click", selectUnselect));

button.addEventListener("click", playGame)