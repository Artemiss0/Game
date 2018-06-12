/// <reference path="gameobject.ts"/>

class Crate extends GameObject {
    constructor(){
        super()
        new AppleCrate()
        new PineappleCrate()
        new GrapeCrate()
    }
    update(){
    }
}

//adding apple crate
class AppleCrate extends GameObject{
    constructor(){
        super()
        this.createCrate()
    }
    createCrate(){
        this.type = 'appleCrate'
        this.x = (window.innerWidth - 180) / 2
        this.y = (window.innerHeight / 2) + 250
        super.createCrate()
    }
}

//adding Pineapple crate 
class PineappleCrate extends GameObject{
    constructor(){
        super()
        this.createCrate()
    }
    createCrate(){
        this.type = 'pineappleCrate'
        this.x = (window.innerWidth - 180) / 2 - 200
        this.y = (window.innerHeight / 2) + 250
        super.createCrate()
    }
}

// adding Grape crate
class GrapeCrate extends GameObject{
    constructor(){
        super()
        this.createCrate()
    }
    createCrate(){
        this.type = 'grapeCrate'
        this.x = (window.innerWidth - 180) / 2 + 200
        this.y = (window.innerHeight / 2) + 250
        super.createCrate()
    }
}