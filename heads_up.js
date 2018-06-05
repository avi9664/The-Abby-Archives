// JavaScript File
/*
           .o8        .o8                                  
          "888       "888                                  
 .oooo.    888oooo.   888oooo.   .ooooo.  oooo d8b  .oooo.o
`P  )88b   d88' `88b  d88' `88b d88' `88b `888""8P d88(  "8
 .oP"888   888   888  888   888 888ooo888  888     `"Y88b. 
d8(  888   888   888  888   888 888    .o  888     o.  )88b
`Y888""8o  `Y8bod8P'  `Y8bod8P' `Y8bod8P' d888b    8""888P'

*/
var word = document.getElementById("title");
var key = document.getElementById("key");
var timerDisplay = document.getElementById("timer");
var endList = document.getElementById("end-list");
var score = document.getElementById("score");
var click = document.getElementById("click");
var currentWord;
var mode;
var oneSelection = ["playing the piano", "playing the clarinet", "break-dancing", "backflip", "mowing the lawn", "going bowling", "building a sandcastle", "ironing a shirt", "flying a kite", "rock climbing", "dancing ballet", "opening presents", "swimming with dolphins", "going through airport security", "sumo wrestling", "trick or treating", "milking a cow", "playing hopscotch", "calling for a taxi", "flipping pancakes", "paddling in a canoe", "playing checkers", "snorkeling", "frosting a cake", "skipping", "planking", "doing summer reading", "BBQing", "braiding", "riding a horse", "eating ramen", "playing ping pong", "dreaming", "brushing your teeth", "licking an ice cream cone", "blowing bubbles", "looking at memes", "sketching a vase", "popping popcorn into your mouth", "picking flowers", "having a photoshoot", "picking out clothes", "doing the Ice Bucket Challenge", "practicing the flute"];
var twoSelection = ["smartphone", "basketball", "swimming pool", "Olympian", "an app", "keyboard", "USB drive", "lawn", "backgammon", "pencil lead", "lasagna", "sketchbook", "dish", "tuna sandwich", "subway", "calligraphy", "table", "weed killer", "baby monitor", "oil", "applesauce", "HTML", "stars", "mitochondria", "pen", "taxes", "extension cord", "bedsheets", "shampoo", "kebab stick", "Zamboni", "government", "$50 dollar bill", "police badge", "highlighter", "finger", "Yeezys", "fidget spinner", "t-shirt", "boots", "syringe", "book", "fireplace", "pan", "scarf", "flag", "banana", "hammer", "stapler", "car", "headphones", "paper", "pencil", "shoes", "subway", "meme", "clock", "copyrights"];
var threeSelection = [""];
var fourSelection = [""];
var fiveSelection = [""];
var sixSelection = [""];
var sevenSelection = [""];
var eightSelection = [""];
var nineSelection = ["crazy = genius", "stay"];
var alreadyChosen = [];
var listCopy = [];
var timer = 5; //change to 60 later
var repeato;
var scoreNum = 0;

function selectNum(arr) {
    return Math.floor(Math.random() * arr.length);
}

document.addEventListener("keydown", function(hecc) {
    switch (hecc.keyCode) {
        case 49:
            mode = 1;
            playGame();
            listCopy = [];
            for (var a = 0; a < oneSelection.length; a++) {
                listCopy.push(oneSelection[a]);
            }
            break;
        case 50:
            mode = 2;
            playGame();
            listCopy = [];
            for (var b = 0; b < twoSelection.length; b++) {
                listCopy.push(twoSelection[b]);
            }
            break;
        case 51:
            mode = 3;
            playGame();
            listCopy = [];
            for (var c = 0; c < threeSelection.length; c++) {
                listCopy.push(threeSelection[c]);
            }
            break;
        case 52:
            mode = 4;
            playGame();
            listCopy = [];
            for (var d = 0; d < fourSelection.length; d++) {
                listCopy.push(fourSelection[d]);
            }
            break;
        case 53:
            mode = 5;
            playGame();
            listCopy = [];
            for (var e = 0; e < fiveSelection.length; e++) {
                listCopy.push(fiveSelection[e]);
            }
            break;
        case 54:
            mode = 6;
            playGame();
            listCopy = [];
            for (var f = 0; f < sixSelection.length; f++) {
                listCopy.push(sixSelection[f]);
            }
            break;
        case 55:
            mode = 7;
            playGame();
            listCopy = [];
            for (var g = 0; g < sevenSelection.length; g++) {
                listCopy.push(sevenSelection[g]);
            }
            break;
        case 56:
            mode = 8;
            playGame();
            listCopy = [];
            for (var h = 0; h < eightSelection.length; h++) {
                listCopy.push(eightSelection[h]);
            }
            break;
        case 57:
            mode = 9;
            playGame();
            listCopy = [];
            for (var i = 0; i < nineSelection.length; i++) {
                listCopy.push(nineSelection[i]);
            }
            break;
    }
});

function selectWord() {
    currentWord = listCopy[selectNum(listCopy)];
    word.innerHTML = currentWord;
}


function playGame() {
    key.style.display = "none";
    click.style.display = "none";
    timerDisplay.style.display = "block";
    word.style.display = "block";
    selectWord();
    repeato = setInterval(function() {
        timer--;
        timerDisplay.innerHTML = timer;
        if (timer === 0) {
            clearInterval(repeato);
            timerDisplay.style.display = "none";
            word.style.display = "none";
            for (var k = 0; k < endList.length; k++) {
                endList.removeChild(endList.childNodes[0]);
            }
            for (var j = 0; j < alreadyChosen.length; j++) {
                var li = document.createElement("li");
                var wordo = document.createElement("p");
                wordo.style.fontFamily = "'Roboto', sans-serif";
                wordo.innerHTML = alreadyChosen[j][0];
                if (alreadyChosen[j][1] === "correct") {
                    wordo.style.color = "#fff";
                    scoreNum++;
                }
                else if (alreadyChosen[j][1] === "pass") {
                    wordo.style.color = "#f00";
                }
                li.appendChild(wordo);
                endList.appendChild(li);
                score.style.display = "block";
                endList.style.display = "block";
                score.innerHTML = "you have guessed " + scoreNum + " words correctly";
                click.style.display = "block";
                // score.style.position = "absolute"; //fix positions later
                // score.style.left = "50%";
                // click.style.position = "absolute";
                // click.style.left = "50%";
            }
        }
    }, 1000);
}

document.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 37) {
        word.innerHTML = "CORRECT";
        document.body.style.backgroundColor = '#13c153';
        alreadyChosen.push([currentWord, "correct"]);
        setTimeout(function() {
            listCopy = listCopy.filter(function(val) {
                return val !== currentWord;
            });
            document.body.style.backgroundColor = '#4286f4';
            selectWord();
        }, 500);
    }
    if (evt.keyCode === 39) {
        word.innerHTML = "PASS";
        document.body.style.backgroundColor = '#ff7921';
        alreadyChosen.push([currentWord, "pass"]);
        setTimeout(function() {
            listCopy = listCopy.filter(function(val) {
                return val !== currentWord;
            });
            document.body.style.backgroundColor = '#4286f4';
            selectWord();
        }, 500);
    }
    if (evt.keyCode === 82) {
        word.style.display = "block";
        console.log(endList.childNodes);
        word.innerHTML = "press keys 1-9 to choose a topic";
        key.style.display = "block";
        endList.style.display = "none";
        timerDisplay.style.display = "none";
        click.style.display = "none";
        listCopy = [];
        score.style.display = "none";
        alreadyChosen = [];
        timer = 5; //change to 60 later
        scoreNum = 0;
        clearInterval(repeato);

    }
});
