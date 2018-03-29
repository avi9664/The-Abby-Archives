var input = document.getElementById("message");
var cipherBtn = document.getElementById("button");
var output = document.getElementById("display");
var message;
var result = "";
var lowerCase = [];
var upperCase = [];
var stringBase = "abcdefghijklmnopqrstuvwxyz";

// second row
for (let i = stringBase.length - 1; i >= 0; i--) {
    lowerCase.push([stringBase[i]]);
}

//first row
for (let i = 0; i < stringBase.length; i++) {
     lowerCase[i].unshift(stringBase[i]);
}

//uppercase second row
for (let i = stringBase.length - 1; i >= 0; i--) {
    upperCase.push([(stringBase[i]).toUpperCase()]);
}

//uppercase first row
for (let i = 0; i < stringBase.length; i++) {
    upperCase[i].unshift((stringBase[i]).toUpperCase());
}

//encoding
cipherBtn.addEventListener("click", function() {
    result = "";
    message = input.value;
     for (var j = 0; j < message.length; j++) {
        var meep = message[j];
        meep = replace(meep);
        if (replace(meep) == 0) {
            result = result + message[j];
        }
        else{
        result = result + meep;
        }
     }
    output.innerHTML = result;
});

function replace(letter) {
    for (var k = 0; k < lowerCase.length; k++){
        if (letter == lowerCase[k][0]){
            return lowerCase[k][1];
        }
        if (letter == upperCase[k][0]){
            return upperCase[k][1];
        }
    }
    return 0;
}