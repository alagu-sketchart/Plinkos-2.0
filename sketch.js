const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var particle;
var plinkos = [];
var divisions = [];

var divisionHeight = 300;
var score = 0;
var scorecount = 0;
var gameState = "start";

function setup(){
  createCanvas(725, 800);
  engine = Engine.create();
  world = engine.world;
  

  ground = new Ground(400,800,800,20);

   for (var k = 0; k <=width; k = k + 80){
     divisions.push(new Divisions(k, 650, 10, divisionHeight));
   }

   for (var j = 50; j <=width; j=j+50){
     plinkos.push(new Plinko(j,50));
   }

   for (var j = 25; j <=width-10; j=j+50){
     plinkos.push(new Plinko(j,150));
   }

    for (var j = 50; j <=width; j=j+50){
     plinkos.push(new Plinko(j,250));
   }

    for (var j = 20; j <=width-10; j=j+50){
     plinkos.push(new Plinko(j,350));
   }
 
}
 
function draw(){
  rectMode(CENTER)
  background("black");

  fill("white")
  textSize(20)
  text("Highscore: "+score,25,25);


  fill("yellow");
  textSize(20)
  text(" 100 ", 15, 550);
  text(" 200 ", 90, 550);
  text(" 300 ", 170, 550);
  text(" 500 ", 250, 550);
  text(" 1000 ", 330, 550);
  text(" 500 ", 410, 550);
  text(" 300 ", 490, 550);
  text(" 200 ", 570, 550);
  text(" 100 ", 650, 550);
  //text("sight", 620, 600);
  Engine.update(engine);

  if(gameState === "end"){
    textSize(50);
    text("GameOver¯|_(ツ)_|¯", 125, 225);
  }

  for (var i = 0; i < plinkos.length; i++) {
    fill("red")
    plinkos[i].display();  
 }

   if(particle!=null){
      particle.display();
       
       if(particle.body.position.y>725){
             if(particle.body.position.x>630){
                 score = score + 100;      
                 particle = null;
                 if(scorecount>=5)gameState ="end";                          
             }

             else if(particle.body.position.x < 630 && particle.body.position.x>550){
                   score = score + 200;
                   particle=null;
                   if(scorecount>=5)gameState ="end";
             }

              else if(particle.body.position.x < 550 && particle.body.position.x>470){
                   score = score + 300;
                   particle=null;
                   if(scorecount>=5)gameState ="end";
             }
             else if(particle.body.position.x < 470 && particle.body.position.x>390){
              score = score + 500;
              particle=null;
              if(scorecount>=5)gameState ="end";
             }
             else if(particle.body.position.x < 390 && particle.body.position.x>310){
              score = score + 1000;
              particle=null;
              if(scorecount>=5)gameState ="end";
             }
             else if(particle.body.position.x < 310 && particle.body.position.x>230){
              score = score + 500;
              particle=null;
              if(scorecount>=5)gameState ="end";
            }
            else if(particle.body.position.x < 230 && particle.body.position.x>150){
              score = score + 300;
              particle=null;
              if(scorecount>=5)gameState ="end";
            }
            else if(particle.body.position.x < 150 && particle.body.position.x>70){
              score = score + 200;
              particle=null;
              if(scorecount>=5)gameState ="end";
            }
            else if(particle.body.position.x < 70){
              score = score + 100;
              particle=null;
              if(scorecount>=5)gameState ="end";
        }
       }
}

  for (var k = 0; k < divisions.length; k++) {
     divisions[k].display();  
  }
  
  ground.display();
}

function mousePressed(){
  if(gameState!=="end"){
     scorecount++;
     particle = new Particle(mouseX, 10, 10, 10); 
  }   
}