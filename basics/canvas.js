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

let circles = []

for(let i = 0; i <= 500; i++ ){
    let x = Math.random() * innerWidth
    let y = Math.random() * innerHeight
    let dx = (Math.random() - 0.5)*3
    let dy = (Math.random() - 0.5)*3

    let radius = 10
    circles.push(new Circle(x,y,dx,dy,radius))

}

const animate = ()=>{
    requestAnimationFrame(animate)
    ctx.clearRect(0,0,innerWidth,innerHeight )

    circles.forEach((circle)=>{
        circle.update()
    })
}

animate()
