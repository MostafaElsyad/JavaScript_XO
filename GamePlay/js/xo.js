const x = document.getElementById('x');
const o = document.getElementById('o');
const container = document.getElementById('container');
const fristSquare = document.getElementById('fristSquare');
const secondSquare = document.getElementById('secondSquare');
const thirdSquare = document.getElementById('thirdSquare');
const fourthSquare = document.getElementById('fourthSquare');
const fivthSquare = document.getElementById('fivthSquare');
const sexSquare = document.getElementById('sexSquare');
const sevenSquare = document.getElementById('sevenSquare');
const eightSquare = document.getElementById('eightSquare');
const nienSquare = document.getElementById('nienSquare');
const choseContainer = document.getElementById('choseContainer');
const declere = document.getElementById('declere');
const restart = document.getElementById('restartBTN');

let player;
let ai;
let xCharacter = 'x';
let oCharacter = 'o';

let frist;
let second;
let third;
let fourth;
let fivth;
let sex;
let seven;
let eight;
let nien;

// GamePlay Click
x.onclick = function() {
    player = xCharacter;
    ai = oCharacter;
    choseContainer.style.display = 'none';
    container.style.display = 'grid';
}
o.onclick = function() {
    player = oCharacter;
    ai = xCharacter;
    choseContainer.style.display = 'none';
    container.style.display = 'grid';
}
fristSquare.onclick = function() {
    if(frist == undefined) {
        fristSquare.innerHTML = player.valueOf();
        fristSquare.style.cursor = 'default';
        frist = player;
        checkGame();
    }
}
secondSquare.onclick = function() {
    if(second == undefined) {
        secondSquare.innerHTML = player.valueOf();
        secondSquare.style.cursor = 'default';
        second = player;
        checkGame();
    }
}
thirdSquare.onclick = function() {
    if(third == undefined) {
        thirdSquare.innerHTML = player.valueOf();
        thirdSquare.style.cursor = 'default';
        third = player;
        checkGame();
    }
}
fourthSquare.onclick = function() {
    if(fourth == undefined) {
        fourthSquare.innerHTML = player.valueOf();
        fourthSquare.style.cursor = 'default';
        fourth = player;
        checkGame();
    }
}
fivthSquare.onclick = function() {
    if(fivth == undefined) {
        fivthSquare.innerHTML = player.valueOf();
        fivthSquare.style.cursor = 'default';
        fivth = player;
        checkGame();
    }
}
sexSquare.onclick = function() {
    if(sex == undefined) {
        sexSquare.innerHTML = player.valueOf();
        sexSquare.style.cursor = 'default';
        sex = player;
        checkGame();
    }
}
sevenSquare.onclick = function() {
    if(seven == undefined) {
        sevenSquare.innerHTML = player.valueOf();
        sevenSquare.style.cursor = 'default';
        seven = player;
        checkGame();
    }
}
eightSquare.onclick = function() {
    if(eight == undefined) {
        eightSquare.innerHTML = player.valueOf();
        eightSquare.style.cursor = 'default';
        eight = player;
        checkGame();
    }
}
nienSquare.onclick = function() {
    if(nien == undefined) {
        nienSquare.innerHTML = player.valueOf();
        nienSquare.style.cursor = 'default';
        nien = player;
        checkGame();
    }
}

// Playing AI
function playingAI() {
}

// Check Game
function checkGame() {
    // Horizontaly
    if(frist == player.valueOf() & second == player.valueOf() & third == player.valueOf()) {
        declere.style.display = 'block';
        declere.innerHTML = 'you won';
        container.style.display = 'none';
        restart.style.display = 'block';
    }else if(fourth == player.valueOf() & fivth == player.valueOf() & sex == player.valueOf()) {
        declere.style.display = 'block';
        declere.innerHTML = 'you won';
        container.style.display = 'none';
        restart.style.display = 'block';
    }else if(seven == player.valueOf() & eight == player.valueOf() & nien == player.valueOf()) {
        declere.style.display = 'block';
        declere.innerHTML = 'you won';
        container.style.display = 'none';
        restart.style.display = 'block';
    }

    // Verticaly
    if(frist == player.valueOf() & fourth == player.valueOf() & seven == player.valueOf()) {
        declere.style.display = 'block';
        declere.innerHTML = 'you won';
        container.style.display = 'none';
        restart.style.display = 'block';
    }else if(second == player.valueOf() & fivth == player.valueOf() & eight == player.valueOf()) {
        declere.style.display = 'block';
        declere.innerHTML = 'you won';
        container.style.display = 'none';
        restart.style.display = 'block';
    }else if(third == player.valueOf() & sex == player.valueOf() & nien == player.valueOf()) {
        declere.style.display = 'block';
        declere.innerHTML = 'you won';
        container.style.display = 'none';
        restart.style.display = 'block';
    }

    // 90 Degree
    if(frist == player.valueOf() & fivth == player.valueOf() & nien == player.valueOf()) {
        declere.style.display = 'block';
        declere.innerHTML = 'you won';
        container.style.display = 'none';
        restart.style.display = 'block';
    }else if(third == player.valueOf() & fivth == player.valueOf() & seven == player.valueOf()) {
        declere.style.display = 'block';
        declere.innerHTML = 'you won';
        container.style.display = 'none';
        restart.style.display = 'block';
    }
}

// Restart The Game
restart.onclick = function() {
    declere.style.display = 'none';
    declere.innerHTML = '';
    container.style.display = 'grid';
    fristSquare.innerHTML = '';
    secondSquare.innerHTML = '';
    thirdSquare.innerHTML = '';
    fourthSquare.innerHTML = '';
    fivthSquare.innerHTML = '';
    sexSquare.innerHTML = '';
    sevenSquare.innerHTML = '';
    eightSquare.innerHTML = '';
    nienSquare.innerHTML = '';
    fristSquare.style.cursor = 'pointer';
    secondSquare.style.cursor = 'pointer';
    thirdSquare.style.cursor = 'pointer';
    fourthSquare.style.cursor = 'pointer';
    fivthSquare.style.cursor = 'pointer';
    sexSquare.style.cursor = 'pointer';
    sevenSquare.style.cursor = 'pointer';
    eightSquare.style.cursor = 'pointer';
    nienSquare.style.cursor = 'pointer';
    frist = undefined;
    second = undefined;
    third = undefined;
    fourth = undefined;
    fivth = undefined;
    sex = undefined;
    seven = undefined;
    eight = undefined;
    nien = undefined;
    restart.style.display = 'none';
}