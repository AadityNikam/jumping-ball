var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
box1 = createSprite(100,560,120,20); 
box1.shapeColor = "yellow";
box2 = createSprite(300,560,120,20);
box2.shapeColor = "red";
box3 = createSprite(500,560,120,20);
box3.shapeColor = "green";
box4 = createSprite(700,560,120,20);
box4.shapeColor = "blue";
    //create box sprite and give velocity
ball = createSprite(random(30,750),30,20,20)
ball.velocityX = 8
ball.velocityY = 8
ball.shapeColor = "white";
}

function draw() {
    background(rgb(169,169,169));
    
    Edges = createEdgeSprites();

    box1.display();
    box2.display();
        box3.display();
     box4.display();   
     ball.display();
    //create edgeSprite
    createEdgeSprites();
    //add condition to check if box touching surface and make it box
drawSprites();

   ball.bounceOff(Edges)
   
   if(ball.isTouching(box1) && ball.bounceOff(box1)){
    music.play();
    ball.shapeColor = "yellow"
}

if(ball.isTouching(box3) && ball.bounceOff(box3)){
    music.play();
   ball.shapeColor = "green"
}

if(ball.isTouching(box4) && ball.bounceOff(box4)){
    music.play();
    ball.shapeColor = "blue";
}

   if(ball.isTouching(box2)){
       ball.velocityX = 0;
       ball.velocityY = 0;
       ball.collide(box2);
       ball.shapeColor = "red";
       music.stop();
   }

}