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
    console.log(gameHeight); //OK caught by console.

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


    //
    var npcBank1 = WorldNames.generateWordList(2, 4, 128);
    var npcBank2 = WorldNames.generateWordList(3, 4, 128);
    var npcBank3 = WorldNames.generateWordList(2, 3, 128);

    console.log(npcBank1);
    console.log(npcBank2);
    console.log(npcBank3);

    const gamePainter = new Painter();
    gamePainter.drawBackground(444, 333, 255, 0, 0);


};
