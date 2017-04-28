/*global document, randomString, randomColors, validate, alert*/

var generator = document.getElementById("random"),
    userInput = document.getElementById("input"),
    validateBtn = document.getElementById("validate"),
    randomContent = "";

generator.addEventListener('click', function (e) {
    "use strict";
    e.preventDefault();
    randomString();
    randomColors();
});

validateBtn.addEventListener('click', function (e) {
    "use strict";
    e.preventDefault();
    validate();
});

function randomString() {
    "use strict";
    var chars = ["'", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ",
            "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
        num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        charSpot1 = chars[Math.floor(Math.random() * chars.length)],
        charSpot2 = num[Math.floor(Math.random() * num.length)],
        charSpot3 = chars[Math.floor(Math.random() * chars.length)],
        charSpot4 = num[Math.floor(Math.random() * num.length)],
        charSpot5 = chars[Math.floor(Math.random() * chars.length)],
        charSpot6 = num[Math.floor(Math.random() * num.length)],
        charSpot7 = chars[Math.floor(Math.random() * chars.length)],
        captcha = charSpot1 + charSpot2 + charSpot3 + charSpot4 + charSpot5 + charSpot6 + charSpot7,
        i;
    
    document.captcha.field.value = captcha;
}

randomString();

function randomColors() {
    "use strict";
    document.getElementById("field").style.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function validate() {
    "use strict";
    if (userInput.value === randomContent && userInput.value !== "") {
        alert("Success!");
    } else {
        alert("It doesn't match.");
    }
}