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
        floorContext.fillStyle = "rgba(0,255,0,0.5)";
        floorContext.fillRect(456, 123,123, 234);
    }

    drawCenter() {

        const floorContext = document.getElementById("centerLayer").getContext("2d");
        floorContext.fillStyle = "rgba(255,255,0,0.5)";
        floorContext.fillRect(234, 234,123, 234);
    }

    drawFront() {

        const floorContext = document.getElementById("frontLayer").getContext("2d");
        floorContext.fillStyle = "rgba(255,0,255,0.95)";
        floorContext.fillRect(345, 345,123, 234);
    }

    drawUI() {

        const floorContext = document.getElementById("uiLayer").getContext("2d");
        floorContext.fillStyle = "rgba(0,0,255,0.75)";
        floorContext.fillRect(567, 456,123, 234);
    }

    colorFormatter(R, G, B, a) {
        return (a != undefined) ?   "rgba(" + R + "," + G + "," + B + "," + a + ")" : 
                                    "rgb(" + R + "," + G + "," + B + ")" ;
        
    }
}