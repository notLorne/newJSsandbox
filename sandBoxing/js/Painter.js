class Painter {

    drawBackground(bgWidth, bgHeight, newR, newG, newB) {

        const bgContext = document.getElementById("background").getContext("2d");

        bgContext.fill = "rgb(newR, newG, newB)";
        bgContext.fillRect(0, 0, bgWidth, bgHeight);


    }

    drawFloor() {

        const floorContext = document.getElementById("floor").getContext("2d");

        floorContext.fill = "rgba(255,255,0,1)";
        floorContext.fillRect(123, 234,123, 234);

    }
}