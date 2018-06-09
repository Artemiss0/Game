class PlayGame{
    private game:Game
    private tree:Tree
    private fruit:Fruit

    constructor(g:Game){
        this.game = g
        this.tree = new Tree()
        this.fruit = new Fruit()
}
}
