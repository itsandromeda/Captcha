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
    var chars = "0123456789'ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz",
        contentLength = 5,
        random,
        i;
    for (i = 0; i < contentLength; i += 1) {
        random = Math.floor(Math.random() * chars.length);
        randomContent += chars.substring(random, random + 1);
    }
    document.captcha.field.value = randomContent;
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