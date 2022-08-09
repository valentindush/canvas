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

let x = 300
let dx = 5

let y = 300
let dy = 5

const radius = 30
const animate = ()=>{
    requestAnimationFrame(animate)
    ctx.clearRect(0,0,innerWidth,innerHeight )

    ctx.beginPath()
    ctx.arc(x,y,radius,Math.PI * 2,0,false)
    ctx.strokeStyle = "blue"
    ctx.stroke()

    if(x + radius > innerWidth || x -radius < 0     ){
        dx = -dx
    }

    if(y + radius > innerHeight || y - radius < 0     ){
        dy = -dy
    }

    x += dx
    y += dy
}

animate()
