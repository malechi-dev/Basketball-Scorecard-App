let homeScore = document.getElementById("homeScore")
let guestScore = document.getElementById("guestScore")
let homeNumber = 0
let guestNumber = 0

function addOneHome() {
    homeNumber += 1;
    homeScore.textContent = homeNumber;
}

function addTwoHome() {
    homeNumber += 2;
    homeScore.textContent = homeNumber;
}

function addThreeHome() {
    homeNumber += 3;
    homeScore.textContent = homeNumber;
}

function addOneGuest() {
    guestNumber += 1;
    guestScore.textContent = guestNumber;
}

function addTwoGuest() {
    guestNumber += 2;
    guestScore.textContent = guestNumber;
}

function addThreeGuest() {
    guestNumber += 3;
    guestScore.textContent = guestNumber;
}

function newGame() {
    homeNumber = 0
    guestNumber = 0
    homeScore.textContent = homeNumber;
    guestScore.textContent = guestNumber;
}