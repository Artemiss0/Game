class GameObject {
    protected x:number = 0
    protected y:number = 0
    protected element:HTMLElement = name
    protected type:string = 'type'
    constructor(){

    }
    update(){

    }
    addFruit(){
        let tree = document.getElementsByTagName('tree')[0]
    
        this.element = document.createElement(this.type)
        tree.appendChild(this.element)

        this.element.style.transform = `translate(${this.x}px,${this.y}px)`
    }
}