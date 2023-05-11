class GameLoop {

    //Attributes
    static timeDelta;
    static currentTime;
    static lastFrame;
    static framesPerSecond;
    static frameUpdated;

    currentTime = Date.now();
    timeDelta = this.currentTime - this.lastFrame;

    //Methods
    play() {

        currentTime = Date.now();
        timeDelta = this.currentTime - this.lastFrame;
        
        //Draw
        if ( this.timeDelta > 1000 / framesPerSecond) {
            
        
        //Game update
        } else if(frameUpdated) {

        
        //Inputs
        } else {


        }


        requestAnimationFrame(play)
    }

    //Getters & setters
    setFPS(newFPS) {
        this.framesPerSecond = newFPS;
    }
    getFPS() {
        return this.framesPerSecond;
    }
    getDelta() {
        return this.timeDelta;
    }
}