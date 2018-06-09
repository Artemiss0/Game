/// <reference path="gameobject.ts"/>

class Tree extends GameObject{
    private tree:HTMLElement

    constructor(){
        super()
        this.tree = document.createElement('tree')
        document.body.appendChild(this.tree)

        this.x = (window.innerWidth - this.tree.clientWidth) / 2 
        this.y = (window.innerHeight - this.tree.clientHeight) / 4 

        this.tree.style.transform = `translate(${this.x}px, ${this.y}px)`

        //add fruit
    }
    update(){

    }
}