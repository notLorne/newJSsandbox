class Painter {

    static floorStack = new Array();
    static centerStack = new Array();
    static frontStack = new Array();
    static uiStack = new Array();

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
        let letter = new Image(); letter.src = "asset/alphabet/alphaAscii/a112.png";
        letter.onload = () => {uiContext.drawImage(letter,12,12,100,180);};
    }

    colorFormatter(R, G, B, a) {
        return (a != undefined) ?   "rgba(" + R + "," + G + "," + B + "," + a + ")" : 
                                    "rgb(" + R + "," + G + "," + B + ")" ;
        
    }
}