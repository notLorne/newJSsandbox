class TextArea{

    //Constructor
    constructor(outputMessage, X, Y) {
        //Attributes
        const message = outputMessage;
        const posX = X;
        const posY = Y;
        var letterArray = new Array();


        //Getters and setters.
        this.getMessage = () => message;
        this.getX = () => posX;
        this.getY = () => posY;
        this.getArray = () => letterArray;

        //Create letters array.

        for (let k = 0; k < message.length; ++k ) {

            letterArray[k] = message.charCodeAt(k);
            //let letter = new Image(); letter.src = "asset/alphabet/bigNumbers/1 - numbers1.png" - WORKING
            //letterArray[k] = letter;
        }
    }
}