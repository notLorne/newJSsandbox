//Global Variables
window.onload = (e) => { //NOW the init will happen once everything is load. Everything needed from the start should be here iguess.
    //Game size
    var gameWidth;
    var gameHeight;

    //Canvas name.
    var background;
    var floorLayer;
    var centerLayer;
    var frontLayer;
    var uiLayer;

//PreGame setup

    //CREATE A FUNCTION TO GET THE SCREEN RESOLUTION TO ADAPT THE GAME WINDOW SIZE. TEMPORARY VALUE HERE.
    gameWidth = 1200;
    gameHeight = 700;
    console.log("variables init"); //OK caught by console.

//Canvas creation.
    var documentBody = document.getElementsByTagName("body")[0]; //Declare and init here for now...
    //Background
    background = document.createElement('canvas');
    background.id = "background";
    background.style.position = "absolute";
    background.width = gameWidth;
    background.height = gameHeight;
    background.style.border = "1px solid";
    background.style.zIndex = 0;
    documentBody.appendChild(background);

    //Floor
    floorLayer = document.createElement('canvas');
    floorLayer.id = "floorLayer";
    floorLayer.style.position = "absolute";
    floorLayer.width = gameWidth;
    floorLayer.height = gameHeight;
    floorLayer.style.border = "1px solid";
    floorLayer.style.zIndex = 2;
    documentBody.appendChild(floorLayer);

    //Center
    centerLayer = document.createElement('canvas');
    centerLayer.id = "centerLayer";
    centerLayer.style.position = "absolute";
    centerLayer.width = gameWidth;
    centerLayer.height = gameHeight;
    centerLayer.style.border = "1px solid";
    centerLayer.style.zIndex = 4;
    documentBody.appendChild(centerLayer);

    //Front
    frontLayer = document.createElement('canvas');
    frontLayer.id = "frontLayer";
    frontLayer.style.position = "absolute";
    frontLayer.width = gameWidth;
    frontLayer.height = gameHeight;
    frontLayer.style.border = "1px solid";
    frontLayer.style.zIndex = 6;
    documentBody.appendChild(frontLayer);

    //UI
    uiLayer = document.createElement('canvas');
    uiLayer.id = "uiLayer";
    uiLayer.style.position = "absolute";
    uiLayer.width = gameWidth;
    uiLayer.height = gameHeight;
    uiLayer.style.border = "1px solid";
    uiLayer.style.zIndex = 8;
    documentBody.appendChild(uiLayer);

    //
    // var npcBank1 = WorldNames.generateWordList(2, 4, 128);
    // var npcBank2 = WorldNames.generateWordList(3, 4, 128);
    // var npcBank3 = WorldNames.generateWordList(2, 3, 128);

    // console.log(npcBank1);
    // console.log(npcBank2);
    // console.log(npcBank3);

    //const test = new TextArea("FAIRE des choses en forme", 123, 123, 0.2);
    //const test2 = new TextArea("briquetdasdsa", 345, 345);

    //Load assets
    const alphabetAssets = [
        { id: "a32", var: alpha32 = document.createElement("img"), file: "asset/alphabet/alphaAscii/a32.png" },
        { id: "a33", var: alpha32 = document.createElement("img"), file: "asset/alphabet/alphaAscii/a33.png" },
        { id: "a36", var: alpha32 = document.createElement("img"), file: "asset/alphabet/alphaAscii/a36.png" },
        { id: "a44", var: alpha32 = document.createElement("img"), file: "asset/alphabet/alphaAscii/a44.png" },
        { id: "a46", var: alpha32 = document.createElement("img"), file: "asset/alphabet/alphaAscii/a46.png" },
        { id: "a48", var: alpha32 = document.createElement("img"), file: "asset/alphabet/alphaAscii/a48.png" },
        { id: "a49", var: alpha32 = document.createElement("img"), file: "asset/alphabet/alphaAscii/a49.png" },
        { id: "a50", var: alpha32 = document.createElement("img"), file: "asset/alphabet/alphaAscii/a50.png" },
        { id: "a51", var: alpha32 = document.createElement("img"), file: "asset/alphabet/alphaAscii/a51.png" },
        { id: "a52", var: alpha32 = document.createElement("img"), file: "asset/alphabet/alphaAscii/a52.png" },
        { id: "a53", var: alpha32 = document.createElement("img"), file: "asset/alphabet/alphaAscii/a53.png" },
        { id: "a54", var: alpha32 = document.createElement("img"), file: "asset/alphabet/alphaAscii/a54.png" },
        { id: "a55", var: alpha32 = document.createElement("img"), file: "asset/alphabet/alphaAscii/a55.png" },
        { id: "a56", var: alpha32 = document.createElement("img"), file: "asset/alphabet/alphaAscii/a56.png" },
        { id: "a57", var: alpha32 = document.createElement("img"), file: "asset/alphabet/alphaAscii/a57.png" },
        { id: "a63", var: alpha32 = document.createElement("img"), file: "asset/alphabet/alphaAscii/a63.png" },
        { id: "a64", var: alpha32 = document.createElement("img"), file: "asset/alphabet/alphaAscii/a64.png" },
        { id: "a65", var: alpha32 = document.createElement("img"), file: "asset/alphabet/alphaAscii/a65.png" },
        { id: "a66", var: alpha32 = document.createElement("img"), file: "asset/alphabet/alphaAscii/a66.png" },
        { id: "a67", var: alpha32 = document.createElement("img"), file: "asset/alphabet/alphaAscii/a67.png" },
        { id: "a68", var: alpha32 = document.createElement("img"), file: "asset/alphabet/alphaAscii/a68.png" },
        { id: "a69", var: alpha32 = document.createElement("img"), file: "asset/alphabet/alphaAscii/a69.png" },
        { id: "a70", var: alpha32 = document.createElement("img"), file: "asset/alphabet/alphaAscii/a70.png" },
        { id: "a71", var: alpha32 = document.createElement("img"), file: "asset/alphabet/alphaAscii/a71.png" },
        { id: "a72", var: alpha32 = document.createElement("img"), file: "asset/alphabet/alphaAscii/a72.png" },
        { id: "a73", var: alpha32 = document.createElement("img"), file: "asset/alphabet/alphaAscii/a73.png" },
        { id: "a74", var: alpha32 = document.createElement("img"), file: "asset/alphabet/alphaAscii/a74.png" },
        { id: "a75", var: alpha32 = document.createElement("img"), file: "asset/alphabet/alphaAscii/a75.png" },
        { id: "a76", var: alpha32 = document.createElement("img"), file: "asset/alphabet/alphaAscii/a76.png" },
        { id: "a77", var: alpha32 = document.createElement("img"), file: "asset/alphabet/alphaAscii/a77.png" },
        { id: "a78", var: alpha32 = document.createElement("img"), file: "asset/alphabet/alphaAscii/a78.png" },
        { id: "a79", var: alpha32 = document.createElement("img"), file: "asset/alphabet/alphaAscii/a79.png" },
        { id: "a80", var: alpha32 = document.createElement("img"), file: "asset/alphabet/alphaAscii/a80.png" },
        { id: "a81", var: alpha32 = document.createElement("img"), file: "asset/alphabet/alphaAscii/a81.png" },
        { id: "a82", var: alpha32 = document.createElement("img"), file: "asset/alphabet/alphaAscii/a82.png" },
        { id: "a83", var: alpha32 = document.createElement("img"), file: "asset/alphabet/alphaAscii/a83.png" },
        { id: "a84", var: alpha32 = document.createElement("img"), file: "asset/alphabet/alphaAscii/a84.png" },
        { id: "a85", var: alpha32 = document.createElement("img"), file: "asset/alphabet/alphaAscii/a85.png" },
        { id: "a86", var: alpha32 = document.createElement("img"), file: "asset/alphabet/alphaAscii/a86.png" },
        { id: "a87", var: alpha32 = document.createElement("img"), file: "asset/alphabet/alphaAscii/a87.png" },
        { id: "a88", var: alpha32 = document.createElement("img"), file: "asset/alphabet/alphaAscii/a88.png" },
        { id: "a89", var: alpha32 = document.createElement("img"), file: "asset/alphabet/alphaAscii/a89.png" },
        { id: "a90", var: alpha32 = document.createElement("img"), file: "asset/alphabet/alphaAscii/a90.png" },
        { id: "a95", var: alpha32 = document.createElement("img"), file: "asset/alphabet/alphaAscii/a95.png" },
        { id: "a97", var: alpha32 = document.createElement("img"), file: "asset/alphabet/alphaAscii/a97.png" },
        { id: "a98", var: alpha32 = document.createElement("img"), file: "asset/alphabet/alphaAscii/a98.png" },
        { id: "a99", var: alpha32 = document.createElement("img"), file: "asset/alphabet/alphaAscii/a99.png" },
        { id: "a100", var: alpha32 = document.createElement("img"), file: "asset/alphabet/alphaAscii/a100.png" },
        { id: "a101", var: alpha32 = document.createElement("img"), file: "asset/alphabet/alphaAscii/a101.png" },
        { id: "a102", var: alpha32 = document.createElement("img"), file: "asset/alphabet/alphaAscii/a102.png" },
        { id: "a103", var: alpha32 = document.createElement("img"), file: "asset/alphabet/alphaAscii/a103.png" },
        { id: "a104", var: alpha32 = document.createElement("img"), file: "asset/alphabet/alphaAscii/a104.png" },
        { id: "a105", var: alpha32 = document.createElement("img"), file: "asset/alphabet/alphaAscii/a105.png" },
        { id: "a106", var: alpha32 = document.createElement("img"), file: "asset/alphabet/alphaAscii/a106.png" },
        { id: "a107", var: alpha32 = document.createElement("img"), file: "asset/alphabet/alphaAscii/a107.png" },
        { id: "a108", var: alpha32 = document.createElement("img"), file: "asset/alphabet/alphaAscii/a108.png" },
        { id: "a109", var: alpha32 = document.createElement("img"), file: "asset/alphabet/alphaAscii/a109.png" },
        { id: "a110", var: alpha32 = document.createElement("img"), file: "asset/alphabet/alphaAscii/a110.png" },
        { id: "a111", var: alpha32 = document.createElement("img"), file: "asset/alphabet/alphaAscii/a111.png" },
        { id: "a112", var: alpha32 = document.createElement("img"), file: "asset/alphabet/alphaAscii/a112.png" },
        { id: "a113", var: alpha32 = document.createElement("img"), file: "asset/alphabet/alphaAscii/a113.png" },
        { id: "a114", var: alpha32 = document.createElement("img"), file: "asset/alphabet/alphaAscii/a114.png" },
        { id: "a115", var: alpha32 = document.createElement("img"), file: "asset/alphabet/alphaAscii/a115.png" },
        { id: "a116", var: alpha32 = document.createElement("img"), file: "asset/alphabet/alphaAscii/a116.png" },
        { id: "a117", var: alpha32 = document.createElement("img"), file: "asset/alphabet/alphaAscii/a117.png" },
        { id: "a118", var: alpha32 = document.createElement("img"), file: "asset/alphabet/alphaAscii/a118.png" },
        { id: "a119", var: alpha32 = document.createElement("img"), file: "asset/alphabet/alphaAscii/a119.png" },
        { id: "a120", var: alpha32 = document.createElement("img"), file: "asset/alphabet/alphaAscii/a120.png" },
        { id: "a121", var: alpha32 = document.createElement("img"), file: "asset/alphabet/alphaAscii/a121.png" },
        { id: "a122", var: alpha32 = document.createElement("img"), file: "asset/alphabet/alphaAscii/a122.png" },



    ]

    for ( letters in alphabetAssets) {
        letters.onload = () => letters.src = letters.file;
    }


    console.log(alphabetAssets);

    const gamePainter = new Painter(); //Will be sent to place where new game will be created.
    gamePainter.drawBackground(gameWidth, gameHeight, 255, 0, 0);
    console.log("drawn")
    // gamePainter.drawFloor();
    // gamePainter.drawCenter();
    // gamePainter.drawFront();

    gamePainter.addToStack(4, new TextArea("FAIRE des choses en forme", 123, 123, 0.2));
    //gamePainter.addToStack(4, test2);

    gamePainter.drawTextArea();

}
