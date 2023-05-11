class Actors {
    //Attributes
    static #actorId;
    static #state;
    static #posX;
    static #posY;
    static #destX;
    static #destY;

    //Constructor
    constructor() {}

    //Methods
    spawn() {}

    move() {}

    delete() {}

    //Getters and setters
    getActorId() {
        return this.#actorId;
    }
    getActorState() {
        return this.#state;
    }
    getPosX() {
        return this.#posX;
    }
    getPosY() {
        return this.#posY;
    }
    getDestX() {
        return this.#destX;
    }
    getDestY() {
        return this.#destY;
    }
    setState(newState) {
        this.#state = newState;
    }
    setPosX(nextPosX) {
        this.#posX = nextPosX;
    }
    setPosY(nextPosY) {
        this.#posY = nextPosY;
    }
    setDestX(nextDestX) {
        this.#destX = nextDestX;
    }
    setDestY(nextDestY) {
        this.#destY = nextDestY;
    }
}

class player extends Actors {
    
}

class npc extends Actors {

}