class PlayGame{
    private button:HTMLElement = document.getElementsByTagName("button")[0]
    private game:Game
    private fruit:Fruit

    constructor(g:Game){
        //disabeling button
        this.button.style.display = "none"

        this.game = g
        this.fruit = new Fruit()
    }

}
