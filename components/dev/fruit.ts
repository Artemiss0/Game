/// <reference path="gameobject.ts"/>

class Fruit extends GameObject{
    apple:Apple
    pineapple:Pineapple
    grape:Grape
    randomPositionx:number
    randomPositiony:number
    constructor(){
        super()
        this.apple = new Apple()
        this.pineapple = new Pineapple()
        this.grape = new Grape()

        //random x & y position for fruits
        this.randomPositionx = Math.floor(Math.random() * window.innerWidth)
        this.randomPositiony = Math.floor(Math.random() * window.innerHeight)


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
        this.x = 5
        this.y = 25
        return super.addFruit()
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
