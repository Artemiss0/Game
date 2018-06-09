/// <reference path="gameobject.ts"/>

class StartScreen extends GameObject{
    private button:HTMLElement
    private game:Game

    constructor(g:Game){
        super()
        this.game = g
        //adding start button
        this.button = document.createElement("button")
        document.body.appendChild(this.button)
        this.button.innerHTML = 'start'

        this.x = (window.innerWidth - this.button.clientWidth) / 2
        this.y = (window.innerHeight - this.button.clientHeight) / 2

        this.button.style.transform = `translate(${this.x}px, ${this.y}px)`
        
        //returnig the PlayGame() method to Game
        this.button.addEventListener("click", () => this.game.PlayGame())
    }
    public removeButton(){
        //removing button from screen onclick
        this.button.remove();
    }
}