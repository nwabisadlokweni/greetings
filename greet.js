const greetBtn = document.querySelector(".greetUpdate");
const radioBtn = document.querySelector(".radioGreet");
const text = document.querySelector(".nameEntered")
const message = document.querySelector(".message");
const count = document.querySelector(".counter");
const error = document.querySelector(".error");
var storage = localStorage.getItem("Name")?JSON.parse(localStorage.getItem("Name")):{}
var store = starage;

var greetingNames;
// if (localStorage['Name']) {
//     greetingNames = JSON.parse(localStorage['Name'])
// }
window.addEventListener('load', function() {
count.innerHTML =greetInstance.counter();
})



const greetInstance = greetFactory(storage);

greetBtn.addEventListener("click", function () {

    if (text.value == "") {
        message.innerHTML = "please enter your name";
        return;
    }
    message.innerHTML = "choose your home language";
    
    var checkedRadioBtn = document.querySelector("input[name='language']:checked");
    var uppercaseName = text.value.charAt(0).toUpperCase() + text.value.slice(1).toLowerCase();
    var checkedBtn = checkedRadioBtn.value;
    error.innerHTML = greetInstance.setTheName(uppercaseName);
    message.innerHTML = greetInstance.theLanguage(checkedBtn, uppercaseName);
    localStorage.setItem("Name", JSON.stringify(store))
    count.innerHTML = greetInstance.counter();

   // localStorage['Name'] = JSON.stringify(greetInstance.counter());
    
});








// const greetBtn = document.querySelector(".greetUpdate");
// const radioBtn = document.querySelector(".radioGreet");
// const text = document.querySelector(".nameEntered")
// const message = document.querySelector(".message");
// const count = document.querySelector(".counter");
// const error = document.querySelector(".error");


// const greetInstance = greetFactory();

// greetBtn.addEventListener("click", function () {

//     if (text.value == "") {
//         message.innerHTML = "please enter your name";
//         return;
//     }
//     message.innerHTML = "choose your home language";
    
//     var checkedRadioBtn = document.querySelector("input[name='language']:checked");
//     var uppercaseName = text.value.charAt(0).toUpperCase() + text.value.slice(1).toLowerCase();
//     var checkedBtn = checkedRadioBtn.value;
//     error.innerHTML = greetInstance.setTheName(uppercaseName);
//     message.innerHTML = greetInstance.theLanguage(checkedBtn, uppercaseName);
//     count.innerHTML = greetInstance.counter();
// });
