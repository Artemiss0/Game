/// <reference path="gameobject.ts"/>

class Fruit extends GameObject{
    private apple:Apple = new Apple()
    private pineapple:Pineapple = new Pineapple()
    private grape:Grape = new Grape()

    constructor(){
        super()
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
