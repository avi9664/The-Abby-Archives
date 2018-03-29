// JavaScript File

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d"); //telling computer this game is 2d so you can use functions


// sprite, x position, y position, width, height

document.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 38) {
            kitteh.yPos -= 10;
        }
    if (evt.keyCode === 40) {
            kitteh.yPos += 10;
        }
    if (evt.keyCode === 37) {
            kitteh.xPos -= 10;
        }
    if (evt.keyCode === 39) {
            kitteh.xPos += 10;
        }
    if (evt.keyCode === 32) {
            cookie.shown = true;
            setTimeout(function() {
                cookie.shown = false;
            }, 1000);
            
        }
});

var kitteh = {
    xPos: 0,
    yPos: 0,
    sprite: document.getElementById("kitteh-img"),
    moveUp: function() {
        
    },
    moveDown: function() {
        
    },
    moveLeft: function() {
        
    },
    moveRight: function() {
        
    },
    
};


var cookie = {
    xPos: kitteh.xPos + 20,
    yPos: kitteh.yPos + 20,
    sprite: document.getElementById("cookie-img"),
    shown: false,
    moveSpeed: 0,
    moveDown: function() {
        cookie.yPos+=10;
        
    },
    posUpdate: function(){
        cookie.xPos = kitteh.xPos + 20;
        cookie.yPos = kitteh.yPos + 20;
    },
};

function gameLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(kitteh.sprite, kitteh.xPos, kitteh.yPos, 75, 75);
    if (cookie.shown) {
        context.drawImage(cookie.sprite, cookie.xPos, cookie.yPos, 25, 25);
        cookie.moveDown();
    }
    if (!cookie.shown) {
        cookie.posUpdate();
    }
    window.requestAnimationFrame(gameLoop);
}

gameLoop(); //starts the loop
/* two ='s won't care about whether the types of variables on either
side are the same, while three ='s do care */