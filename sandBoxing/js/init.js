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

    const test = new TextArea("savonssshhnnhnh", 123, 123, 0.2);
    const test2 = new TextArea("briquetdasdsa", 345, 345);

    const gamePainter = new Painter(); //Will be sent to place where new game will be created.
    gamePainter.drawBackground(gameWidth, gameHeight, 255, 0, 0);
    console.log("drawn")
    // gamePainter.drawFloor();
    // gamePainter.drawCenter();
    // gamePainter.drawFront();

    gamePainter.addToStack(4, test);
    gamePainter.addToStack(4, test2);

    gamePainter.drawTextArea();

};
