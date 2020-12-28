var object1,object2,object3,object4,object5;
var object6,object7,object8,object9,object10;
var xobject1,xobject2,xobject3,xobject4,xobject5;
var xobject6,xobject7,xobject8,xobject9,xobject10;
var object1img,object2img,object3img,object4img,object5img;
var object6img,object7img,object8img,object9img,object10img;
var hobject1,hobject2,hobject3,hobject4,hobject5;
var hobject6,hobject7,hobject8,hobject9,hobject10;
var backgroundimg , xobjectimg;
var click = 10 ;
var score = 0;
var objectLeft = 10;
var dog1 = 0;
var dog2 = 0;
var dog3 = 0;
var dog4 = 0;
var dog5 = 0;
var dog6 = 0;
var dog7 = 0;
var dog8 = 0;
var dog9 = 0;
var dog10 = 0;
var gameState = 0;
var bg ;

function preload(){
backgroundimg = loadImage("HIDDEN KITCHEN PICS/image.png");
object1img = loadImage("HIDDEN KITCHEN PICS/1_2.png");
//object1 = loadImage("HIDDEN KITCHEN PICS/1_2.png");
object2img = loadImage("HIDDEN KITCHEN PICS/1_7.png");
// object2 = loadImage("HIDDEN KITCHEN PICS/1_7.png");
object3img = loadImage("HIDDEN KITCHEN PICS/1_12.png");
// object3 = loadImage("HIDDEN KITCHEN PICS/1_12.png");
object4img = loadImage("HIDDEN KITCHEN PICS/1_16.png");
// object4 = loadImage("HIDDEN KITCHEN PICS/1_16.png");
object5img = loadImage("HIDDEN KITCHEN PICS/1_17.png");
// object5 = loadImage("HIDDEN KITCHEN PICS/1_17.png");
object6img = loadImage("HIDDEN KITCHEN PICS/1_19.png");
// object6 = loadImage("HIDDEN KITCHEN PICS/1_19.png");
object7img = loadImage("HIDDEN KITCHEN PICS/1_20.png");
// object1 = loadImage("HIDDEN KITCHEN PICS/1_20.png");
object8img = loadImage("HIDDEN KITCHEN PICS/1_22.png");
// object1 = loadImage("HIDDEN KITCHEN PICS/1_22.png");
object9img = loadImage("HIDDEN KITCHEN PICS/1_23.png");
// object1 = loadImage("HIDDEN KITCHEN PICS/1_23.png");
object10img = loadImage("HIDDEN KITCHEN PICS/1_27.png");
// object1 = loadImage("HIDDEN KITCHEN PICS/1_27.png");
xobjectimg = loadImage("HIDDEN KITCHEN PICS/x.png");
}
function setup() {
  createCanvas(1000,600);
  bg = createSprite(490,285,1200,600)
  bg.addImage(backgroundimg);
  bg.scale = 1.875


  object1 = createSprite(50,25+ 5,50,50);
  object1.addImage(object1img);
  
  object2 = createSprite(100,25+ 5,50,50);
  object2.addImage(object2img);

  object3 = createSprite(150,25+ 5,50,50);
  object3.addImage(object3img);

  object4 = createSprite(200,25+ 5,50,50);
  object4.addImage(object4img);
  object4.scale = 0.75  

  object5 = createSprite(250,25+ 5,50,50);
  object5.addImage(object5img);
  object5.scale = 0.65  

  object6 = createSprite(300,25+ 5,50,50);
  object6.addImage(object6img);
  object6.scale = 0.5  

  object7 = createSprite(350,25+ 5,50,50);
  object7.addImage(object7img);
  object7.scale = 1.25  

  object8 = createSprite(400,25+ 5,50,50);
  object8.addImage(object8img);
  object8.scale = 0.3  

  object9 = createSprite(450,25+ 5,50,50);
  object9.addImage(object9img);
  object9.scale = 0.5  

  object10 = createSprite(500,25+ 5,50,50);
  object10.addImage(object10img);
  object10.scale = 0.75  

  xobject1 = createSprite(50,25+ 5,50,50);
  xobject1.addImage(xobjectimg);
  xobject1.scale = 0.02
  xobject1.visible = false;

  xobject2 = createSprite(100,25+ 5,50,50);
  xobject2.addImage(xobjectimg);
  xobject2.scale = 0.02
  xobject2.visible = false;

  xobject3 = createSprite(150,25+ 5,50,50);
  xobject3.addImage(xobjectimg);
  xobject3.scale = 0.02
  xobject3.visible = false;

  xobject4 = createSprite(200,25+ 5,50,50);
  xobject4.addImage(xobjectimg);
  xobject4.scale = 0.02
  xobject4.visible = false;

  xobject5 = createSprite(250,25+ 5,50,50);
  xobject5.addImage(xobjectimg);
  xobject5.scale = 0.02
  xobject5.visible = false;

  xobject6 = createSprite(300,25+ 5,50,50);
  xobject6.addImage(xobjectimg);
  xobject6.scale =  0.02
  xobject6.visible = false;

  xobject7 = createSprite(350,25+ 5,50,50);
 xobject7.addImage(xobjectimg);
  xobject7.scale =  0.02 
 xobject7.visible = false;

  xobject8 = createSprite(400,25+ 5,50,50);
  xobject8.addImage(xobjectimg);
  xobject8.scale =  0.02
  xobject8.visible = false;

  xobject9 = createSprite(450,25+ 5,50,50);
  xobject9.addImage(xobjectimg);
  xobject9.scale =  0.02
  xobject9.visible = false;

  xobject10 = createSprite(500,25+ 5,50,50);
 xobject10.addImage(xobjectimg);
xobject10.scale = 0.02 
xobject10.visible = false;


  hobject1 = createSprite(962,380,30,30);
//hobject1.visible = true ;
  hobject1.addImage(object1img);
  hobject1.scale = 0.5;
  
  hobject2 = createSprite(765,335,30,30);
  //hobject1.visible = true ;
  hobject2.addImage(object2img);
  hobject2.scale = 0.5;

  hobject3 = createSprite(589,365,30,30);
  //hobject1.visible = true ;
  hobject3.addImage(object3img);
  hobject3.scale = 0.60;

  hobject4 = createSprite(500,399.5,30,30);
  //hobject1.visible = true ;
    hobject4.addImage(object4img);
    hobject4.scale = 0.5;

  hobject5 = createSprite(475,467,30,30);
  //hobject1.visible = true ;
  hobject5.addImage(object5img);
  hobject5.scale = 0.5;
  
  hobject6 = createSprite(415 ,399,30,30);
  //hobject1.visible = true ;
    hobject6.addImage(object6img);
    hobject6.scale = 0.5;

    hobject7 = createSprite(395 ,405.5,30,30);
    //hobject1.visible = true ;
      hobject7.addImage(object7img);
      hobject7.scale = 0.55;
  
    
    
  hobject8 = createSprite(377.5 ,470,30,30);
  //hobject1.visible = true ;
    hobject8.addImage(object8img);
    hobject8.scale = 0.5;
    
  
   hobject9 = createSprite(259 ,415,30,30);
   //hobject1.visible = true ;
    hobject9.addImage(object9img);
    hobject9.scale = 0.6;
  
    
  hobject10 = createSprite(107 ,425,30,30);
  //hobject1.visible = true ;
    hobject10.addImage(object10img);
    hobject10.scale = 0.5;
        
 }

function draw() {

  

  if(mousePressedOver(hobject1)){
    if(dog1 === 0){
      hobject1.tint = "white";
      hobject1.destroy();
      xobject1.visible = true;
      click -= 1;
      score += 100;
      objectLeft -= 1;
      
    }
    dog1 = 1
   } 
   
   if(mousePressedOver(hobject2)){
    if(dog2 === 0){
      hobject2.tint = "white";
      hobject2.destroy();
      xobject2.visible = true;
      click -= 1;
      score += 100;
      objectLeft -= 1;
      
    }
    dog2 = 1

   } 
   if(mousePressedOver(hobject3)){
    if(dog3 === 0){
      hobject3.tint = "white";
      hobject3.destroy();
      xobject3.visible = true;
      click -= 1;
      score += 100;
      objectLeft -= 1;
      
    }
    dog3 = 1

   } 
   if(mousePressedOver(hobject4)){
    if(dog4 === 0){
      hobject4.tint = "white";
      hobject4.destroy();
      xobject4.visible = true;
      click -= 1;
      score += 100;
      objectLeft -= 1;
      
    }
    dog4 = 1

   } 
   if(mousePressedOver(hobject5)){
    if(dog5 === 0){
      hobject5.tint = "white";
      hobject5.destroy();
      xobject5.visible = true;
      click -= 1;
      score += 100;
      objectLeft -= 1;
      
    }
    dog5 = 1

   } 
   if(mousePressedOver(hobject6)){
    if(dog6 === 0){
      hobject6.tint = "white";
      hobject6.destroy();
      xobject6.visible = true;
      click -= 1;
      score += 100;
      objectLeft -= 1;
      
    }
    dog6 = 1

   } 
   if(mousePressedOver(hobject7)){
    if(dog7 === 0){
      hobject7.tint = "white";
      hobject7.destroy();
      xobject7.visible = true;
      click -= 1;
      score += 100;
      objectLeft -= 1;
      
    }
    dog7 = 1

   } 
   if(mousePressedOver(hobject8)){
    if(dog8 === 0){
      hobject8.tint = "white";
      hobject8.destroy();
      xobject8.visible = true;
      click -= 1;
      score += 100;
      objectLeft -= 1;
      
    }
    dog8 = 1

    
   } 
   if(mousePressedOver(hobject9)){
    if(dog9 === 0){
      hobject9.tint = "white";
      hobject9.destroy();
      xobject9.visible = true;
      click -= 1;
      score += 100;
      objectLeft -= 1;
      
    }
    dog9 = 1

   } 
   
   if(mousePressedOver(hobject10)){
    if(dog10 === 0){
      hobject10.tint = "white";
      hobject10.destroy();
      xobject10.visible = true;
      click -= 1;
      score += 100;
      objectLeft -= 1;
      
    }
    dog10 = 1
   } 

   
  drawSprites();
  // strokeWeight(0);
  // fill("cyan")
  // rect(0,0,1000,85);
  fill("black");
  textSize(25 )
  text(score , 800 , 20+ 5);
  text(click, 800, 50+ 5);
  text(objectLeft,700,20+ 5)
}


if(click === 0 && objectLeft === 0){
  text("you have won the game ",1200,600)
}
else if(click === 0 && objectLeft > 0){
  text("you lose try again",1200,600);
}
