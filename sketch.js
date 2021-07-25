//varibles for project
var ISS,ISSimage,ISSINV;
var hasDocked = false;
var Spacecraft,SC1,SC2,SC3,SC4,spacebg;

function preload(){
//loading all the images
ISSimage = loadImage("Docking-undocking/iss.png");
spacebg = loadImage("Docking-undocking/spacebg.jpg");
SC1 = loadImage("Docking-undocking/spacecraft1.png");
SC2 = loadImage("Docking-undocking/spacecraft2.png");
SC3 = loadImage("Docking-undocking/spacecraft3.png");
SC4 = loadImage("Docking-undocking/spacecraft4.png");

}
function setup() {
  createCanvas(1000,600);
  
  //creating sprites foe Spacecraft and adding all the images and scaling them
  Spacecraft = createSprite(300,500,50,50);
  Spacecraft.addImage("SapceC1",SC1);
  Spacecraft.addImage("SpaceC2",SC2);
  Spacecraft.addImage("SpaceC3",SC3);
  Spacecraft.addImage("SpaceC4",SC4);
  Spacecraft.scale = 0.3;

  //creating sprites foe ISS(International Space Station)
  ISS = createSprite(450, 300, 50, 50);
  ISS.addImage(ISSimage);
  ISS.scale = 1.0;

  ISSINV = createSprite(386,315);
  ISSINV.scale = 0.2;
  ISSINV.visible = false;

  
}

function draw() {
  background(spacebg);
  textSize(30);
  text(mouseX + ',' + mouseY,10,45);
  

  if(!hasDocked){
     if(keyDown("right")){
        Spacecraft.x = Spacecraft.x+3;
        Spacecraft.changeImage("SpaceC4",SC4);
     }
     if(keyDown("left")){
        Spacecraft.x = Spacecraft.x - 3;
        Spacecraft.changeImage("SpaceC3",SC3);
     }
     if(keyDown("down")){
      Spacecraft.changeImage("SpaceC2",SC2);
      }
     if(keyDown("up")){
        Spacecraft.y = Spacecraft.y-3;
      }
  }

  if(ISSINV.isTouching(Spacecraft)){
   hasDocked = true;
   fill(255);
   textSize(30);
   text("Doking is Successful",500,550);  
}   
  drawSprites();
}