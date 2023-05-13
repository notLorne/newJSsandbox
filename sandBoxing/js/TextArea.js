class TextArea{

    static xCursor;
    static yCursor;
    static counter;
    static lastFrame;
    static isLive;
    static messageLength;
    static messageLinesTotal;
    
    //Constructor
    constructor(outputMessage, X, Y, counter) {

        //Attributes
        if (counter == undefined) {
            this.counter = 0;
        } else {
            this.counter = counter;
        }

        const message = outputMessage;
        const posX = X;
        const posY = Y;
        const lineMaxLength = 32; //For now this is an arbitrary value.
        const windowsMaxLines = 4; //For now this is an arbitrary value.

        var letterArray = new Array();

        this.xCursor = 0;
        this.yCursor = 0;
        this.messageLinesTotal = Math.ceil(this.messageLength / windowsMaxLines);
        this.isLive = true;

        //Getters and setters.
        this.getMessage = () => message;
        this.getX = () => posX;
        this.getY = () => posY;
        this.getArray = () => letterArray;

        //Create letters array.
        for (let k = 0; k < message.length; ++k ) {

            let letter = new Image(); letter.src = "asset/alphabet/alphaAscii/a" + message.charCodeAt(k) + ".png";
            letter.onload = () => {letterArray[k] = letter;}
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