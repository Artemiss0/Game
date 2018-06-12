/// <reference path="gameobject.ts"/>

class Fruit extends GameObject{
    constructor(){
        super()
        new Apple()
        new Pineapple()
        new Grape()
    }
    update(){
    }
}
//adding apple
class Apple extends GameObject{
    constructor(){
        super()
        this.addFruit()
    }
    addFruit(){
        this.type = 'apple'
        super.addFruit()
    }
}
//adding pineapple
class Pineapple extends GameObject{
    constructor(){
        super()
        this.addFruit()
    }
    addFruit(){
        this.type = 'pineapple'
        super.addFruit()
    }
}
//adding grape
class Grape extends GameObject{
    constructor(){
        super()
        this.addFruit()
    }
    addFruit(){
        this.type = 'grape'
        super.addFruit()
    }
}
