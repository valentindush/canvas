const canvas = document.getElementById('canvas');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const ctx  = canvas.getContext('2d');   // context
ctx.fillRect(100,100,100,100)

//Drawing a line
//Start
ctx.beginPath()
ctx.moveTo(200, 100)
ctx.lineTo(300,150)
ctx.stroke()
//End