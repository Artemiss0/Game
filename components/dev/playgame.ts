class PlayGame{
    private button:HTMLElement = document.getElementsByTagName("button")[0]
    private game:Game
    private crate:Crates
    private tree:Tree

    constructor(g:Game){
        //disabeling button
        this.button.style.display = "none"

        this.game = g
        this.crate = new Crates()
        this.tree = new Tree()
    }

}
