function greetFactory() {

    var theNames = [];

    function setTheName(name) {
        theNames.push(name);
    }

    function getTheName() {
        // if (theNames == "") {
        //     message.innerHTML = "Please enter your name";
        // }
        return theNames;
    }

    function theLanguage(languageClicked, theNames) {
        if (languageClicked === 'English') {
            return "Hello, " + theNames;
        }

        if (languageClicked === 'Afrikaans') {
            return "Hallo, " + theNames;
        }

        if (languageClicked === 'IsiXhosa') {
            return "Molo, " + theNames;
        }

        if (languageClicked === 'IsiZulu') {
            return "Sawubona, " + theNames;
        }
    }

    function counter() {

    }

    return {
        theNames,
        setTheName,
        getTheName,
        theLanguage,
        counter
    }
}