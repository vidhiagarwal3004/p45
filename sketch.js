var doreamon,doreamon_img;
var ground;

function preload()
{
   doreamon_img = loadImage("doreamon1.png");

}



function setup() {
 createCanvas(800,400);
   
 doreamon = createSprite(90, 200, 50, 50);
 doreamon.addImage(doreamon_img);

 ground = createSprite(10, 390, 1000, 20);



}








function draw() {
 background("black");  

 doreamon.collide(ground);
 drawSprites();
}var doreamon,doreamon_img;
var ground;

function preload()
{
  doreamon_img = loadImage("doreamon1.png");

}



function setup() {
createCanvas(800,400);
  
doreamon = createSprite(90, 200, 50, 50);
doreamon.addImage(doreamon_img);

ground = createSprite(10, 390, 1000, 20);



}








function draw() {
background("black");  

doreamon.collide(ground);
drawSprites();
}