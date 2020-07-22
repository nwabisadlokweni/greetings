const greetBtn = document.querySelector(".greetUpdate");
const radioBtn = document.querySelector(".radioGreet");
const text = document.querySelector(".nameEntered")
const message = document.querySelector(".message");
const counter = document.querySelector(".counter");

const greetInstance = greetFactory();

function greetBtnClicked() {
    var checkedRadioBtn = document.querySelector("input[name='language']:checked");

    if (checkedRadioBtn) {
        var nameTyped = checkedRadioBtn.value;
        greetInstance.theLanguage(nameTyped);
       // totalTwo.classList.add(greetInstance.totalClassName())
        getTheName.innerHTML = greetInstance.add(theLanguage())
       
    }
}

greetBtn.addEventListener("click", function () {
    // alert(greetBtn);
});
