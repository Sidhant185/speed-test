var car, wall, Speed, weight;


function setup() {
  createCanvas(800,400);
  car = createSprite(100, 200, 30, 30);
  wall = createSprite(500, 200, 15, height/2);
  
  Speed = Math.round(random(20,180));
  weight = Math.round(random(110,2290));  
  
}

function draw() {
  background(255,255,255);
    car.velocityX = Speed;
  
  if (wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0;
    var deformation = 0.5*weight*Speed*Speed/22509;
    if (deformation>180){
      car.shapeColor = "red";
    }
    if (deformation<180&&deformation>100){
      car.shapeColor="yellow";
    }
    if (deformation<100){
      car.shapeColor="green";
    }
  }
  drawSprites();
}