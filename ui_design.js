// JavaScript File
var acc = document.getElementsByClassName("accordion"); //apparently classes are arrays

var tPadding = document.getElementById("top-padding");
var rPadding = document.getElementById("right-padding");
var bPadding = document.getElementById("bottom-padding");
var lPadding = document.getElementById("left-padding");
var preview = document.getElementById("preview");
var tp = 10;
var rp = 10;
var bp = 10;
var lp = 10;

var startColor = document.getElementById("start-color");
var startHex = document.getElementById("start-hex");
var endColor = document.getElementById("end-color");
var endHex = document.getElementById("end-hex");
var solidRadio = document.getElementById("solid");
var gradRadio = document.getElementById("gradient");
var isSolid = false;
var sCol = "";
var eCol = "";

var textColor = document.getElementById("text-color");
var textHex = document.getElementById("text-hex");
var textValue = document.getElementById("val");
var textSize = document.getElementById("text-size");
var tCol = "";
var tSize = 0;

var button = document.getElementById("preview-btn");

function numberAssign(element, uiProperty) {
    element.addEventListener("input", function() {
        uiProperty = this.value + "px";
    });
}

function colorAssign(color, hex, uiProperty) {
    color.addEventListener("input", function() {
        uiProperty = this.value;
    }); //finish this later
}

//accordion
for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display == "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

//box
tPadding.addEventListener("input", function() {
    tp = this.value;
    button.style.paddingTop = tp + "px";
});
rPadding.addEventListener("input", function() {
    rp = this.value;
    button.style.paddingRight = rp + "px";
});
bPadding.addEventListener("input", function() {
    bp = this.value;
    button.style.paddingBottom = bp + "px";
});
lPadding.addEventListener("input", function() {
    lp = this.value;
    button.style.paddingLeft = lp + "px";
});

//background
solidRadio.addEventListener("click", function() {
    isSolid = true;
    gradRadio.checked = false;
    sCol = startColor.value;
    startHex.value = sCol;
    endColor.value = sCol;
    endHex.value = sCol;
    button.style.backgroundImage = "linear-gradient(" + startColor.value + ", " + endColor.value + ")";
});

gradRadio.addEventListener("click", function() {
    isSolid = false;
    solidRadio.checked = false;
});

startColor.addEventListener("input", function() {
    sCol = this.value;
   startHex.value = sCol;
   if (isSolid) {
       endColor.value = sCol;
       endHex.value = sCol;
   }
      button.style.backgroundImage = "linear-gradient(" + startColor.value + ", " + endColor.value + ")";
       
});

startHex.addEventListener("input", function() {
    sCol = this.value;
   startColor.value = sCol;
   if (isSolid) {
       endColor.value = sCol;
       endHex.value = sCol;
   }
    button.style.backgroundImage = "linear-gradient(" + startColor.value + ", " + endColor.value + ")";
     
});

endColor.addEventListener("input", function() {
    eCol = this.value;
   endHex.value = eCol;
   if (isSolid) {
       startColor.value = eCol;
       startHex.value = eCol;
   }
      button.style.backgroundImage = "linear-gradient(" + startColor.value + ", " + endColor.value + ")";
    
});

endHex.addEventListener("input", function() {
    eCol = this.value;
   endColor.value = eCol;
   if (isSolid) {
       startColor.value = eCol;
       startHex.value = eCol;
   }
     button.style.backgroundImage = "linear-gradient(" + startColor.value + ", " + endColor.value + ")";
     
    
});

//text
textValue.addEventListener("input", function() {
   button.value = textValue.value; 
});

textColor.addEventListener("input", function() {
    tCol = this.value;
   textHex.value = tCol;
      button.style.color = tCol;
       
});

textHex.addEventListener("input", function() {
    tCol = this.value;
   textColor.value = tCol;
    button.style.color = tCol;
     
});

textSize.addEventListener("input", function() {
    tSize = this.value;
    button.style.fontSize = tSize + "px";
})