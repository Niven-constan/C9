
function setup() {
  createCanvas(400,400);
}

function draw() 
{
  background('green');

  if(keyDown('RIGHT_ARROW')){
    background('blue');
  }
  if(keyDown('LEFT_ARROW')){
    background('red');
  }
}




