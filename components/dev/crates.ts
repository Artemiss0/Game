class Crates {
    // private crate:HTMLElement
    private center = window.innerWidth / 2
    private x:number[] = [this.center-200, this.center, this.center+200]
    private y:number = window.innerHeight / 2 + 300
    constructor(){
        for(let i = 0; i<3; i++){
            let crate:HTMLElement
            crate = document.createElement('crate')
            document.body.appendChild(crate)

            crate.style.transform = `translate(${this.x[i]}px, ${this.y}px)`
        }
    }
    update(){
        
    }
}