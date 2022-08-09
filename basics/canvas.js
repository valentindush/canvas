const canvas = document.getElementById('canvas');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const ctx  = canvas.getContext('2d');   // context
ctx.fillRect(100,100,100,100)

//Drawing a line
//Start
// ctx.beginPath()
// ctx.moveTo(240, 140)
// ctx.lineTo(300,150)
// ctx.lineTo(149,200)
// ctx.lineTo(249,20)
// ctx.lineTo(249,200)
// ctx.stroke()
// //End
// ctx.beginPath()

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

let mouse = {
    x: undefined,
    y: undefined
}

window.addEventListener('mousemove',(e)=>{
    mouse.x = e.x
    mouse.y = e.y
})




function Circle(x,y,dx,dy,radius){
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
    this.radius = radius
    this.minRadius = radius
    this.colors = [
        '#E3A614',
        '#6F9FAD',
        '#AD4154',
        '#307691',
        '#A2AD97',
    ]
    this.color = this.colors[Math.floor(Math.random() * this.colors.length)]

    this.draw = ()=>{
        ctx.beginPath()
        ctx.arc(this.x,this.y,this.radius,Math.PI * 2,0,false)
        ctx.fillStyle = `${this.color}`
        ctx.fill()
 

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

        //Interraction

        if(mouse.x - this.x < 60 && mouse.x - this.x > -60 
            && mouse.y - this.y < 60 && mouse.y - this.y > -60){
                if(this.radius < 60){
                    this.radius += 1
                }
        }else if(this.radius > this.minRadius){
            this.radius -=1
        }
        this.draw()
    }

}

const circle = new Circle(200,200,5,5,30)

let circles = []

for(let i = 0; i <= 800; i++ ){
    let x = Math.random() * innerWidth
    let y = Math.random() * innerHeight
    let dx = (Math.random() - 0.5)*3
    let dy = (Math.random() - 0.5)*3

    let radius = Math.random() * 6 + 6
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
const init = ()=>{
    circles = []
    for(let i = 0; i <= 800; i++ ){
        let x = Math.random() * innerWidth
        let y = Math.random() * innerHeight
        let dx = (Math.random() - 0.5)*3
        let dy = (Math.random() - 0.5)*3
    
        let radius = Math.random() * 6 + 6
        circles.push(new Circle(x,y,dx,dy,radius))
    
    }
}
window.addEventListener('resize',()=>{
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    init()
})
