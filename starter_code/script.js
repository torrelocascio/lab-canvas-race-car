

window.onload = function() {
  var canvas = document.getElementById('game-board-canvas');
  var ctx = canvas.getContext('2d');
  var img = new Image();
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
      //Grass
      drawRoad()
        
 //Car Image
  imgScale = 30/50;
  img.onload = function() {
    ctx.drawImage(img, 135, 400,50*imgScale,50);
  };
  img.src = 'images/car.png';
  }
//End of StartGame Function


var car = {
  x: 135,
  y: 400,
  // moveUp:    function() { this.y -= 25 },
  // moveDown:  function() { this.y += 25 },
  moveLeft:  function() { this.x -= 25 },
  moveRight: function() { this.x += 25 },
}

function draw(car) {
  var img = new Image();
  img.onload = function() { 
     ctx.drawImage(img, car.x, car.y, 30, 50); 
  }
  img.src ='images/car.png'
}
function drawRoad(){
  ctx.fillStyle="green"
        ctx.fillRect(0,0,300,500)
      //Grey Road
        ctx.fillStyle="gray";
        ctx.fillRect(50, 0, 200, 500)
      //White Sidelines
       ctx.fillStyle="white"
       ctx.fillRect(60,0,10,500)
       ctx.fillRect(230,0,10,500)
      //Dashed Line
      ctx.strokeStyle="white";
      ctx.lineWidth=5;
      ctx.setLineDash([15, 10]);
      ctx.beginPath();
  ctx.moveTo(150,0);
  ctx.lineTo(150,500);
  ctx.stroke();

}

document.onkeydown = function(e) {
  switch (e.keyCode) {
    // case 38: car.moveUp();  
    // case 40: car.moveDown();  
    case 37: car.moveLeft(); break ;
    case 39: car.moveRight(); break ;
  }
  updateCanvas();
}

function updateCanvas() {
  ctx.clearRect(0,0,300,500);
  drawRoad();
  draw(car);
}


}



//Move Ghost Left and Right



