class Painter {

    drawBackground(bgWidth, bgHeight, newR, newG, newB) {

        const bgContext = document.getElementById("background").getContext("2d");

        console.log(this.colorFormatter(newR, newG, newB));
        bgContext.fill = this.colorFormatter(newR, newG, newB);
        bgContext.fillRect(0, 0, bgWidth, bgHeight);

    }

    drawFloor() {

        const floorContext = document.getElementById("floor").getContext("2d");

        floorContext.fill = "rgba(255,255,0,1)";
        floorContext.fillRect(123, 234,123, 234);

    }

    colorFormatter(R, G, B, a) {
        return (a == undefined) ?    "rgb(" + R + "," + G + "," + B + "," + ")" :
                                "rgb(" + R + "," + G + "," + B + "," + a + ")" ;
    }
}