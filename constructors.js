//constructor that creates a basic Q&A flashcard
function BasicCard (front, back) {
    //question that appears on the front of the flash card
    this.front = front;
    //answer that appears on the back of the flash card
    this.back = back;
};

//constructor that creates a flashcard with a cloze
function ClozeCard (text, cloze) {
    //cloze= return deleted text
    this.cloze=cloze;
    //text= returns the full text
    this.text=text;
};

//partial= returns only the partial text that was not deleted
ClozeCard.prototype.partial =  function() {
    if (this.text.includes(this.cloze)) {
        console.log(this.text.replace(this.cloze, "..."));
        return;
    } else {
        console.log("The cloze does not appear in the full text");
        return;
    }
};