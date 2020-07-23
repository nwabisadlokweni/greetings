describe("Greetings exercise", function () {
    it("should be able to set names", function () {
        let greeting = greetFactory();

        greeting.setTheName("Nwabisa");
        
        assert.equal("Nwabisa", greeting.getTheName());
    
    })

    it("should be able to get names", function () {
        let greeting = greetFactory();

        greeting.getTheName();
        
        assert.equal(name, greeting.getTheName());
    
    })

    // it("should be able to greet a person in IsiZulu", function () {
    //     let greeting = greetFactory();

    //     greeting.theLanguage();
        
    //     assert.equal("Sawubona, Nwabisa", greeting.theLanguage("IsiZulu", "Nwabisa"));
    
    // })

    it("should be able to greet a person in English", function () {
        let greeting = greetFactory();

        greeting.theLanguage();
        
        assert.equal("Hello, Nwabisa", greeting.theLanguage("English", "Nwabisa"));
    
    })


    it("should be able to greet a person in Afrikaans", function () {
        let greeting = greetFactory();

        greeting.theLanguage();
        
        assert.equal("Hallo, Nwabisa", greeting.theLanguage("Afrikaans", "Nwabisa"));
    
    })

    it("should be able to greet a person in IsiXHosa", function () {
        let greeting = greetFactory();

        greeting.theLanguage();
        
        assert.equal("Molo, Nwabisa", greeting.theLanguage("IsiXhosa", "Nwabisa"));
    
    })
    
    it("should be able to greet a person in IsiZulu", function () {
        let greeting = greetFactory();

        greeting.theLanguage();
        
        assert.equal("Sawubona, Nwabisa", greeting.theLanguage("IsiZulu", "Nwabisa"));
    
    })

});
