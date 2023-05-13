class TextArea{

    static xCursor;
    static yCursor;
    static counter;
    static lastFrame;
    static isLive;
    static messageLength;
    static messageLinesTotal;
    static message;
    static letterArray;
    static posX;
    static posY;
    
    //Constructor
    constructor(outputMessage, X, Y, counter) {

        //Attributes
        if (counter == undefined) {
            this.counter = 0;
        } else {
            this.counter = counter;
        }

        this.posX = X;
        this.posY = Y;

        const lineMaxLength = 32; //For now this is an arbitrary value.
        const windowsMaxLines = 4; //For now this is an arbitrary value.

        this.letterArray = new Array();

        this.message = outputMessage;
        this.xCursor = 0;
        this.yCursor = 0;
        this.isLive = true;

        //Create letters array.
        for (let k = 0; k < outputMessage.length; ++k ) {

            let letter = new Image(); letter.src = "asset/alphabet/alphaAscii/a" + outputMessage.charCodeAt(k) + ".png";
            this.letterArray[k] = letter;
            
        }
    }

    addCursorX() {
        this.xCursor += 1;
        return this.xCursor;
    }
    addCursorY() {
        this.yCursor += 1;
        return this.yCursor;
    }

}