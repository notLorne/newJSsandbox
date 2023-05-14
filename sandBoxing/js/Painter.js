class Painter {

    static floorStack;
    static centerStack;
    static frontStack;
    static uiStack;
    static textAreaStack;

    constructor() {

        this.floorStack = new Array();
        this.centerStack = new Array();
        this.frontStack = new Array();
        this.uiStack = new Array();
        this.textAreaStack = new Array();
    }

    drawBackground(bgWidth, bgHeight, newR, newG, newB) {

        const bgContext = document.getElementById("background").getContext("2d");
        bgContext.fillStyle  = this.colorFormatter(newR, newG, newB);
        bgContext.fillRect(0, 0, bgWidth, bgHeight);
    }
    drawFloor() {

        const floorContext = document.getElementById("floorLayer").getContext("2d");
        floorContext.imageSmoothingEnabled = false;

        floorContext.fillStyle = "rgba(0,255,0,0.5)";
        floorContext.fillRect(456, 123,123, 234);
    }
    drawCenter() {

        const centerContext = document.getElementById("centerLayer").getContext("2d");
        centerContext.imageSmoothingEnabled = false;
        centerContext.fillStyle = "rgba(255,255,0,0.5)";
        centerContext.fillRect(234, 234,123, 234);
    }
    drawFront() {

        const frontContext = document.getElementById("frontLayer").getContext("2d");
        frontContext.imageSmoothingEnabled = false;
        frontContext.fillStyle = "rgba(255,0,255,0.95)";
        frontContext.fillRect(345, 345,123, 234);
    }
    drawUI() {

        const uiContext = document.getElementById("uiLayer").getContext("2d");
        uiContext.imageSmoothingEnabled = false;

        //draw image test. WORKING
    }
    drawTextArea() {

        const uiContext = document.getElementById("uiLayer").getContext("2d");
        uiContext.imageSmoothingEnabled = false;

        for ( let imgStack of this.textAreaStack) {

            if (!imgStack.isLive) {
                imgStack = null;
            }

            const sizeX = 6;
            const sizeY = 9;
            let textSize = 2;
            let drawStack = imgStack.letterArray;
            let stringLength = imgStack.length;
            let posX = imgStack.posX;
            let posY = imgStack.posY;
            let cursorX = 0;
            //console.log(drawStack);

            uiContext.fillStyle = "rgb(0,0,255)";
            uiContext.fillRect(posX - 8,posY - 8, drawStack.length * sizeX  * textSize + 16, 32);

            for ( let k = 0; k < drawStack.length; ++k ) {

                //console.log(drawStack[k]);
                drawStack[k].onload = function() {
                    uiContext.drawImage(drawStack[k], posX + (sizeX * textSize * k), posY,5 * textSize, 7  * textSize);
                    cursorX++;
                }
            }
        }
    }
    
    addToStack(stackRef, object) {
        //Different values for stackRef => 0 = floorStack, 1 = centerStack, 2 = frontStack, 3 = uiStack, 4 = textAreaStack.

        switch(stackRef) {
            case 0: this.floorStack.push(object); break;
            case 1: this.centerStack.push(object); break;
            case 2: this.frontStack.push(object); break;
            case 3: this.uiStack.push(object); break;
            case 4: this.textAreaStack.push(object); break;
        }
    }
    
    
    colorFormatter(R, G, B, a) {
        return (a != undefined) ?   "rgba(" + R + "," + G + "," + B + "," + a + ")" : 
                                    "rgb(" + R + "," + G + "," + B + ")" ;
        
    }
}