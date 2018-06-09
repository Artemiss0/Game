class Game {
    private startscreen:StartScreen
    
    constructor(){
        this.startscreen = new StartScreen(this)
    
        this.gameloop()
    }
    private gameloop(){
        requestAnimationFrame(() => this.gameloop())
    }

    public PlayGame(){
        new PlayGame(this)
        this.startscreen.removeButton()
     
    }
}
window.addEventListener("load", () => new Game())