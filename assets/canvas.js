var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

window.onresize = resizeCanvas
function resizeCanvas(){
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
}
resizeCanvas()

var zoom = 1
var cellHeight = (canvas.height / 16) * zoom
var grid = {width: 10, height: 10}
var camera = {x: grid.width / 2, y: grid.height / 2}

function draw(){
  requestAnimationFrame(draw)
  ctx.setTransform(1, 0, 0, 1, 0, 0);

  ctx.fillStyle = 'darkgrey'
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  var camX = -camera.x * zoom + canvas.width / 2
	var camY = -camera.y * zoom + canvas.height / 2

  ctx.translate(camX, camY)

  ctx.fillStyle = 'grey'
  for(var x = 0; x < grid.width; x++){
    for(var y = 0; y < grid.height; y++){
      ctx.fillRect(cellHeight * x + 2, cellHeight * y + 2, cellHeight - 2, cellHeight - 2)
    }
  }
}
requestAnimationFrame(draw)