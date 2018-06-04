class Game {
    private s:StartScreen
    
    constructor(){
        this.s = new StartScreen(this)
        this.gameloop()
    }
    private gameloop(){
        requestAnimationFrame(() => this.gameloop())
    }

    public PlayGame(){
        new PlayGame(this)
    }
}
window.addEventListener("load", () => new Game())