class Tree{
    private tree:HTMLElement
    //private fruits = new Array()
    private x:number
    private y:number
    //private fruit:string[] = ['grape','pineapple','apple']
    private fruits:Fruit[] = []

    constructor(){
        this.tree = document.createElement('tree')
        document.body.appendChild(this.tree)

        this.x = (window.innerWidth - this.tree.clientWidth) / 2 
        this.y = (window.innerHeight - this.tree.clientHeight) / 4 

        this.tree.style.transform = `translate(${this.x}px, ${this.y}px)`
        //adding fruit
        for(let i = 0; i<3; i++){
            this.fruits.push(new Fruit())

            //mousedown
            console.log(this.fruits)
        }
        

    }
    update(){

    }
}