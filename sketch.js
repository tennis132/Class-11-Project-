var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;
var bombimg;
var coinimg;
var energyDrinkImg;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  bombimg = loadImage("bomb.png")
  coinimg = loadImage("coin.png")
  energyDrinkImg = loadImage("energyDrink.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2

//creating boy running
boy = createSprite(180,340,30,30);
boy.scale=0.08;
boy.addAnimation("JakeRunning",boyImg);
  

leftBoundary=createSprite(0,0,100,800);

// leftBoundary.invisible = false;
// leftBoundary.visible = true;
// leftBoundary.invisible = true;
leftBoundary.visible = false;


rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //code to reset the background

  if(path.y > 400 ){
    path.y = height/2;
  }

  bomb()
  coin()
  energyDrink()
  
  drawSprites();
}

function bomb()
{
  if(frameCount%80==0)
  {
    var bomb = createSprite(random(0, 400), 0)
    bomb.velocityY = 4
    bomb.addImage("bomb", bombimg)
    bomb.scale = 0.1
    bomb.depth = boy.depth
    boy.depth = boy.depth + 1
  }
}

function coin()
{
  if(frameCount%100==0)
  {
    var coin = createSprite(random(20, 350), 0)
    coin.velocityY = 4
    coin.addImage("coin", coinimg)
    coin.scale = 0.5
    coin.depth = boy.depth
    boy.depth = boy.depth + 1
  }
}

function energyDrink()
{
  if(frameCount%120==0)
  {
    var energyDrink = createSprite(random(50,380), 0)
    energyDrink.velocityY = 4
    energyDrink.addImage("energy_drink", energyDrinkImg)
    energyDrink.scale = 0.15
    energyDrink.depth = boy.depth
    boy.depth = boy.depth + 1
  }
}
