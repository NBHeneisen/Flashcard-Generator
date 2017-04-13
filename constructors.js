inquirer = require("inquirer")

function BasicCard (front, back) {
    this.front = front,
    this.back = back,
};

function ClozeCard (text, cloze) {
    //deletedText= return deleted text
    this.cloze=cloze,
    //partialText= returns only the partial text that was not deleted
    this.partial= text.replace(this.cloze, "..."),
    //fullText= returns the full text
    this.text=text,
    //error= console log error if cloze deletion does NOT appear in the input text
    this.error= function() {
        if this.text.includes(this.cloze) {
            console.log("The cloze does not appear in the full text")
        };
    },
};

