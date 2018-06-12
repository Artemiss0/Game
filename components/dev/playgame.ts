class PlayGame{
    private game:Game
    private crate:Crate = new Crate()

    constructor(g:Game){
        this.game = g
        new Tree()
        new Fruit()
        console.log(this.crate)
}
}
