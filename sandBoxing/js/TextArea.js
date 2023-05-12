class TextArea{

    static xCursor;
    static yCursor;
    
    //Constructor
    constructor(outputMessage, X, Y) {

        //Attributes
        const message = outputMessage;
        const posX = X;
        const posY = Y;
        const lineMaxLength = 32; //For now this is an arbitrary value.
        const windowsMaxLines = 4; //For now this is an arbitrary value.

        var letterArray = new Array();

        this.xCursor = 0;
        this.yCursor = 0;

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
    displayMessage() {
        //Create background

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