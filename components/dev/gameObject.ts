class GameObject {
    protected x:number = 0
    protected y:number = 0
    protected element:HTMLElement = name
    protected type:string = 'type'
    protected randomX:number = 0
    protected randomY:number = 0
    protected offSetX:number = 0
    protected offSetY:number = 0
    protected moveBind:EventListener

    // protected fruits
    constructor(){
     
    }
    update(){

    }
    protected createCrate() :void{
        this.element = document.createElement(this.type)
        document.body.appendChild(this.element)

        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`
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
        this.moveBind = (e:Event) => this.updatePosition(e as MouseEvent)
        //onmouse up
        this.element.addEventListener("mousedown", (e) => this.initDrag(e))
        //onmousedown
        this.element.addEventListener("mouseup", (e) => this.initStopDrag(e))        
    }
    protected initDrag(e:MouseEvent):void{

         e.preventDefault()

        this.offSetX = e.clientX - this.x
        this.offSetY = e.clientY - this.y  
    
        window.addEventListener("mousemove", this.moveBind)
    }
    protected updatePosition(e:MouseEvent):void{
        e.preventDefault()
        this.x = e.clientX - this.offSetX
        this.y = e.clientY - this.offSetY

        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`
    }
    protected initStopDrag(e:Event):void{
        window.removeEventListener("mousemove", this.moveBind)
        e.preventDefault()
    }

}