const canvas = document.getElementById('canvas');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const ctx  = canvas.getContext('2d');   // context
ctx.fillRect(100,100,100,100)

//Drawing a line
//Start
ctx.beginPath()
ctx.moveTo(240, 140)
ctx.lineTo(300,150)
ctx.lineTo(149,200)
ctx.lineTo(249,20)
ctx.lineTo(249,200)
ctx.stroke()
//End
ctx.beginPath()

//Drawing arcs/Cirlces
// ctx.arc(300,300,50,Math.PI * 2,0,false)
// ctx.strokeStyle = "blue"
// ctx.stroke()

//Creating circls Randomly



const drawCircles = (n)=>{

    for(i = 0; i <= n; i++){
        const x = Math.random() * window.innerWidth
        const y = Math.random() * window.innerWidth
        ctx.beginPath()
        //colors

        const red = Math.random() * 255
        const blue = Math.random() * 255
        const green = Math.random() * 255

        ctx.arc(x,y,Math.random() * 40,Math.PI * 2,0,false)
        ctx.strokeStyle = `rgb(${red},${green},${blue})`
        ctx.stroke()
    }
}

// drawCircles(100)

//Creating animation

let x = Math.random() * innerWidth
let dx = (Math.random() - 0.5) * 10

let y = Math.random() * innerHeight
let dy = (Math.random() - 0.5) * 10

const radius = 30



function Circle(x,y,dx,dy,radius){
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
    this.radius = radius

    this.draw = ()=>{
        ctx.beginPath()
        ctx.arc(this.x,this.y,this.radius,Math.PI * 2,0,false)
        ctx.strokeStyle = "blue"
        ctx.stroke()

    }

    this.update = ()=>{
        if(this.x + this.radius > innerWidth || this.x -this.radius < 0     ){
            this.dx = -this.dx
        }
    
        if(this.y + this.radius > innerHeight || this.y - this.radius < 0     ){
            this.dy = -this.dy
        }
    
        this.x += this.dx
        this.y += this.dy
        this.draw()
    }

}

const circle = new Circle(200,200,5,5,30)

const animate = ()=>{
    requestAnimationFrame(animate)
    ctx.clearRect(0,0,innerWidth,innerHeight )

    // ctx.beginPath()
    // ctx.arc(x,y,radius,Math.PI * 2,0,false)
    // ctx.strokeStyle = "blue"
    // ctx.stroke()

    // if(x + radius > innerWidth || x -radius < 0     ){
    //     dx = -dx
    // }

    // if(y + radius > innerHeight || y - radius < 0     ){
    //     dy = -dy
    // }

    // x += dx
    // y += dy
    circle.update()
}

animate()
