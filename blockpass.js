// JavaScript File
var start = document.getElementById("start");
var textInput = document.getElementById("url-input");
var url;
var created = false;

document.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 13) {
        load();
    }
})

start.addEventListener("click", function() {
    load();
});
function load() {
    url = textInput.value;
    if (url !== "") {
        if (!created) {
            var cheat = document.createElement('iframe');
            cheat.src = url;
            cheat.style.width = "100%";
            cheat.style.height = "100%";
            document.body.appendChild(cheat);
            created = true;
        }
        else if (created) {
            cheat.src = url;
            alert(url);
        }
    }
}