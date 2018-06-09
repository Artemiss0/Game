class GameObject {
    protected x:number = 0
    protected y:number = 0
    protected element:HTMLElement = name
    protected type:string = 'type'
    protected randomX:number = 0
    protected randomY:number = 0

    // protected fruits
    constructor(){
     
    }
    update(){

    }
    protected addFruit() :void{
        let tree = document.getElementsByTagName('tree')[0]
    
        this.element = document.createElement(this.type)
        tree.appendChild(this.element)

        this.randomX = Math.floor(Math.random() * tree.clientWidth);
        this.randomY = Math.floor(Math.random() * tree.clientHeight);

        this.x = this.randomX
        this.y = this.randomY

        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`
    }

}