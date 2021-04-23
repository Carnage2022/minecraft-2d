var steveWalk, steveWalkImg;
var bGround, bGroundImg;
var invGold,invDiamond,invStone;
var diamond,gold,stone;
var diamondImg,goldImg,stoneImg;
var x,y;





function preload() {
  steveWalkImg = loadAnimation(  'STEVE/steve5.png', 'STEVE/steve6.png', 
  'STEVE/steve7.png', 'STEVE/steve8.png', 'STEVE/steve9.png', 'STEVE/steve10.png', 'STEVE/steve11.png', 'STEVE/steve12.png')
  steveImg=loadAnimation('STEVE/steve2.png');
  bGroundImg = loadImage( 'STEVE/BGround.png');

  diamondImg = loadImage('STEVE/diamond.jpg');
  goldImg = loadImage('STEVE/gold.png');
  stoneImg = loadImage('STEVE/stone2.jpg');
}

function setup() {
  createCanvas(displayWidth*2, displayHeight*3);
  
  bGround = createSprite(displayWidth/2+800, -3*displayHeight/4+1960);
  bGround.addImage("Bg",bGroundImg);
  bGround.scale=1.75;

  steveWalk = createSprite(displayWidth/4-300,displayHeight/2);
  steveWalk.addAnimation("STEVE",steveImg);
  steveWalk.scale=0.75;

  invDiamondGrp=new Group ();
  diamondGrp=new Group();
  
}


function draw() {
background("#B9E1FF");
console.log(steveWalk.x,steveWalk.y);

if(keyDown("d")){
  steveWalk.x=steveWalk.x+5;
  steveWalk.addAnimation("STEVEWALK",steveWalkImg);
  steveWalk.changeAnimation("STEVEWALK",steveWalkImg);

} else {
  steveWalk.changeAnimation("STEVE",steveImg)
}

if(keyDown("s")){
  steveWalk.y=steveWalk.y+5;
}

createDiamond(310,2070);
createDiamond(225,2000);
createDiamond(1315,2152);
createDiamond(1570,2150);


createStone(898,2070);
createStone(815,1985);
createStone(2155,1983);

invisibleDiamond(895,1985,75,75);
invisibleDiamond(812,2065,75,75);
invisibleDiamond(980,2070,75,75);

if(invDiamondGrp.isTouching(steveWalk) || diamondGrp.isTouching(steveWalk)){

  invDiamondGrp.get().shapeColor="#B9E1FF";
}

  drawSprites();
}

function createDiamond(x,y){
  diamond = createSprite(x,y);
  diamond.addImage("DIAMOND",diamondImg);
  diamond.scale = 0.18;
  
  diamondGrp.add(diamond);
}

function createStone(x,y){
  stone = createSprite(x,y);
  stone.addImage("STONE",stoneImg);
  stone.scale = 0.42;

}

function invisibleDiamond(x,y,width,height){

  invDiamond = createSprite(x,y,width,height);
  invDiamond.shapeColor = "#00000000";
  //invDiamond.visible=false;
  invDiamond.debug=true;

  invDiamondGrp.add(invDiamond);
}
 

