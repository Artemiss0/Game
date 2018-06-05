class StartScreen{
    public button:HTMLElement
    private game:Game
    private x:number
    private y:number


    constructor(g:Game,){
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
    public update(){

    }
}