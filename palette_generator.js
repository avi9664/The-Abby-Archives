// JavaScript File

/*
TO DO LIST:
- create some sort of "about" sidebar for the information
- talk about how each option decides the color scheme

*/

var swatchbox = []; //the array with all the divs because i'm lazy
var clothesDiv = document.getElementById("clothes-swatches");
var hairDiv = document.getElementById("hair-swatches");
var eyeDiv = document.getElementById("eye-swatches");
var metalDiv = document.getElementById("metal-swatches");
var swatchProps = []; //properties of each div
var hslArr = []; //the labels showing the hsl numbers of each swatch
var submit = document.getElementById("submit");
var checkboxes = document.getElementById("checkboxes");
var moveOn = document.getElementById("move-on");
var adjustDiv = document.getElementById("adjust");
var command = document.getElementById("command");
var aboutBtn = document.getElementById("about-btn");
var aboutColorDiv = document.getElementById("color-description");
var optionsArr = ["happy/optimistic", "melancholy", "aggressive", "bitter", "calm"]; //add "anxious" later
var options = [];
var selectionArr = [];
var rangeArr = [
    [],
    []
];
var randomQualityPicker;
var cat;
var currentH;
var currentS;
var currentL;
var RNGsus;
var selectedDiv;
var corrElt;

function PersonalityColor(name, hueRange, satRange, lightRange) {
    this.name = name;
    this.hueRange = hueRange;
    this.satRange = satRange;
    this.lightRange = lightRange;
}

var colorSelection = [
    new PersonalityColor("optimistic", [50, 180], [70, 90], [45, 65]),
    new PersonalityColor("melancholy", [200, 290], [0, 50], [0, 40]),
    new PersonalityColor("aggressive", [0, 20], [60, 90], [30, 50]),
    // new PersonalityColor("anxious", [0, 30], [0, 60], [0, 50]),
    new PersonalityColor("bitter", [60, 140], [0, 100], [0, 30]),
    new PersonalityColor("calm", [120, 270], [30, 50], [30, 80]),
];

for (var i = 0; i < optionsArr.length; i++) {
    var checkLabel = document.createElement("label");
    checkLabel.for = colorSelection[i].name;
    checkLabel.style.display = "block";

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.class = "options";
    checkbox.id = colorSelection[i].name;
    options.push(checkbox);

    var span = document.createElement("span");
    span.innerHTML = optionsArr[i];

    checkLabel.appendChild(checkbox);
    checkLabel.appendChild(span);
    checkboxes.appendChild(checkLabel);
}

function createRange(label, min, max) {
    var rangeLabel = document.createElement("label");
    rangeLabel.style.display = "block";
    rangeLabel.innerHTML = label;

    var range = document.createElement("input");
    range.type = "range";
    range.min = min;
    range.max = max;
    range.class = "slider";
    rangeArr[0].push(range);

    var textBox = document.createElement("input");
    textBox.type = "number";
    textBox.class = "slider-text";
    rangeArr[1].push(textBox);
    rangeLabel.appendChild(range);
    rangeLabel.appendChild(textBox);
    adjustDiv.appendChild(rangeLabel);
}

function createRow(num, div) {
    for (var i = 0; i < num; i++) {
        var box = document.createElement("div");
        div.appendChild(box);
        swatchbox.push(box);
        swatchProps.push({ hue: "0", saturation: "0%", lightness: "0%", hsl: 'hsl(0, 0%, 0%)' });
        hslArr.push(document.createElement('p'));
    }
}

function updateColor(arrNum) {
    swatchProps[arrNum].hsl = "hsl(" + swatchProps[arrNum].hue + ", " + swatchProps[arrNum].saturation + "%, " + swatchProps[arrNum].lightness + "%)";
    swatchbox[arrNum].style.backgroundColor = swatchProps[arrNum].hsl;
    hslArr[arrNum].innerHTML = swatchProps[arrNum].hsl;
}

function getDivInfo(number, property) {
    rangeArr[0][number].value = property;
    rangeArr[1][number].value = property;
}

createRange("H", 0, 360);
createRange("S", 0, 100);
createRange("B", 0, 100);

createRow(6, clothesDiv);
// createRow(4, hairDiv);
// createRow(4, eyeDiv);
// createRow(3, metalDiv);

for (var i = 0; i < swatchbox.length; i++) {
    swatchbox[i].appendChild(hslArr[i]);
    swatchbox[i].style.backgroundColor = swatchProps[i].hsl;
    swatchbox[i].style.WebKitTransition = "background-color " + (i + 1) / 2 + "s";
    swatchbox[i].style.transition = "background-color " + (i + 1) / 2 + "s";
    hslArr[i].innerHTML = swatchProps[i].hsl;
    hslArr[i].style.color = "#fff";
    hslArr[i].style.textAlign = "center";
}

for (var i = 0; i < swatchbox.length; i++) {
    swatchbox[i].addEventListener("click", function() {
        if (checkboxes.style.display === "none") {
            for (var i = 0; i < swatchbox.length; i++) {
                swatchbox[i].style.border = "none";
            }
            this.style.border = "2px solid #3b80ef";
            selectedDiv = swatchbox.indexOf(this);
            adjustDiv.style.display = "block";
            getDivInfo(0, swatchProps[selectedDiv].hue);
            getDivInfo(1, swatchProps[selectedDiv].saturation);
            getDivInfo(2, swatchProps[selectedDiv].lightness);
        }
    });
}

//fix this later 
// for (var i = 0; i < label.length; i++) { 
//     label[i].addEventListener("mouseover", function(event) {
//         radio[i].style.backgroundColor = "#00f";
//     });
//     label[i].onmouseout = function(event) {
//         radio[i].style.backgroundColor = "#eee";
//     };
// }

// for (var i = 0; i < radio.length; i++) {
//     radio[i].addEventListener("click", function() {
//          radio[i].style.backgroundColor = "#00f";
//     }
// }

function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function addH() {
    if (currentH >= 300) {
        currentH += randomRange(-60, 360 - currentH);
    }
    else if (currentH <= 60) {
        currentH += randomRange(currentH * -1, 60);
    }
    else {
        currentH += randomRange(-60, 60);
    }
}

function addS() {
    if (currentS >= 80) {
        currentS += randomRange(-20, 100 - currentS);
    }
    else if (currentS <= 20) {
        currentS += randomRange(currentS * -1, 20);
    }
    else {
        currentS += randomRange(-20, 20);
    }
}

function addL() {
    if (currentL >= 80) {
        currentL += randomRange(-20, 100 - currentL);
    }
    else if (currentL <= 20) {
        currentL += randomRange(currentL * -1, 20);
    }
    else {
        currentL += randomRange(-20, 20);
    }
}

submit.addEventListener("click", function() {
    if (this.value === "I'M DONE!") {
        selectionArr = [];
        moveOn.disabled = false;
        for (var i = 0; i < options.length; i++) {
            if (options[i].checked) {
                selectionArr.push(i);
            }
        }
        for (var i = 0; i < swatchbox.length; i++) {
            chooseColor(i);
        }
    }
    else if (this.value === "< BACK") {
        checkboxes.style.display = "block";
        submit.value = "I'M DONE!";
        adjustDiv.style.display = "none";
        for (var i = 0; i < swatchbox.length; i++) {
            swatchbox[i].style.border = "none";
        }
        command.innerHTML = "Select all the words that describe your character's personality the best.";
        moveOn.value = "MOVE ON";
    }
});

function chooseColor(arrNum) {
    if (arrNum === 0) {
        randomQualityPicker = randomRange(0, selectionArr.length - 1);
        cat = selectionArr[randomQualityPicker];
        currentH = randomRange(colorSelection[cat].hueRange[0], colorSelection[cat].hueRange[1]);
        currentS = randomRange(colorSelection[cat].satRange[0], colorSelection[cat].satRange[1]);
        currentL = randomRange(colorSelection[cat].lightRange[0], colorSelection[cat].lightRange[1]);
        swatchProps[0].hue = currentH;
        swatchProps[0].saturation = currentS;
        swatchProps[0].lightness = currentL;
    }
    else if (arrNum > 3 && arrNum < 6) {
        // currentH = (randomRange(colorSelection[cat].hueRange[0], colorSelection[cat].hueRange[1]) + 180) % 360;
        currentH = randomRange(colorSelection[cat].hueRange[0], colorSelection[cat].hueRange[1]) % 360;
        addH();
        currentS = randomRange(80, 100);
        currentL = randomRange(colorSelection[cat].lightRange[0], colorSelection[cat].lightRange[1]);
        swatchProps[arrNum].hue = currentH;
        swatchProps[arrNum].saturation = currentS;
        swatchProps[arrNum].lightness = currentL;
    }
    else {
        currentH = randomRange(colorSelection[cat].hueRange[0], colorSelection[cat].hueRange[1]);
        currentS = randomRange(colorSelection[cat].satRange[0], colorSelection[cat].satRange[1]);
        currentL = randomRange(colorSelection[cat].lightRange[0], colorSelection[cat].lightRange[1]);
        swatchProps[arrNum].hue = currentH;
        swatchProps[arrNum].saturation = currentS;
        swatchProps[arrNum].lightness = currentL;
    }

    if (currentL > 50) {
        hslArr[arrNum].style.color = '#000';
    }
    else if (currentL <= 50) {
        hslArr[arrNum].style.color = '#fff';
    }
    updateColor(arrNum);

}

moveOn.addEventListener("click", function() {
    checkboxes.style.display = "none";
    submit.value = "< BACK";
    command.innerHTML = "Select any swatch box and use the sliders and the number fields to adjust the color.";
    this.style.display = "none";
    this.value = "SAVE (not working yet)";
});

for (var i = 0; i < 3; i++) {
    rangeArr[0][i].addEventListener("input", function() {
        corrElt = rangeArr[0].indexOf(this);
        rangeArr[1][corrElt].value = this.value;
        if (corrElt === 0) {
            swatchProps[selectedDiv].hue = this.value;
        }
        else if (corrElt === 1) {
            swatchProps[selectedDiv].saturation = this.value;
        }
        else if (corrElt === 2) {
            swatchProps[selectedDiv].lightness = this.value;
        }
        updateColor(selectedDiv);
    });
    rangeArr[1][i].addEventListener("input", function() {
        corrElt = rangeArr[1].indexOf(this);
        rangeArr[0][corrElt].value = this.value;
        if (corrElt === 0) {
            swatchProps[selectedDiv].hue = this.value;
        }
        else if (corrElt === 1) {
            swatchProps[selectedDiv].saturation = this.value;
        }
        else if (corrElt === 2) {
            swatchProps[selectedDiv].lightness = this.value;
        }
        updateColor(selectedDiv);
    });
}

aboutBtn.addEventListener("click", function() {
    if (aboutColorDiv.style.display === "none") {
        alert();
        aboutColorDiv.style.display = "block";
    } else if (aboutColorDiv.style.display === "block") {
        aboutColorDiv.style.display = "none";
    }
});

