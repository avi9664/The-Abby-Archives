// JavaScript File
var grid = document.getElementById("grid");
var row = 0;
var col = 0;
var posArray = [[1, 1]];

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function checkPosition(number) {
    for (var i = 0; i < posArray.length; i++) {
        var existentX = posArray[i][0];
        var existentY = posArray[i][1];
        if (existentX == row && existentY == col) {
            return false;
        }
    }
        return true;
}

function choosePosition() {
    row = getRndInteger(0, 3);
    col = getRndInteger(0, 3);
}

for (var j = 0; j < 9; j++) {
    choosePosition();
    checkPosition(j+1);
    if (checkPosition(j+1)) {
        posArray.push([row, col]);
        grid.rows[row].cells[col].innerHTML = j+1;
    } else if (!checkPosition(j+1)) {
        choosePosition();
        checkPosition();
    }
    
}