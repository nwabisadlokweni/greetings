const greetBtn = document.querySelector(".greetUpdate");
const radioBtn = document.querySelector(".radioGreet");
const text = document.querySelector(".nameEntered")
const message = document.querySelector(".message");
const count = document.querySelector(".counter");

const greetInstance = greetFactory();

greetBtn.addEventListener("click", function () {

    if (text.value == "") {
        message.innerHTML = "please enter your name";
        return;
    }
    message.innerHTML = "please choose your home language";

    var checkedRadioBtn = document.querySelector("input[name='language']:checked");
    var uppercaseName = text.value.charAt(0).toUpperCase() + text.value.slice(1).toLowerCase();
    var checkedBtn = checkedRadioBtn.value;
    message.innerHTML = greetInstance.setTheName(uppercaseName);
    message.innerHTML = greetInstance.theLanguage(checkedBtn, uppercaseName);
    count.innerHTML = greetInstance.counter();
});
