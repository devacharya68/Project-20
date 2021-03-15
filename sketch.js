function preload() {
  bg = loadImage("images/garden.png");
  tomImg1= loadAnimation("images/tomOne.png");
  tomImg2=loadAnimation("images/tomTwo.png","images/tomThree.png");
  tomImg3= loadAnimation("images/tomFour.png");
  jerryImg1=loadAnimation("images/jerryOne.png");
  jerryImg2= loadAnimation("images/jerryTwo.png","images/jerryThree.png");
  jerryImg3=loadAnimation("images/jerryFour.png");
}

background(bg);

    if(tom.x - jerry.x < (tom.width - jerry.width)/2)

    { 
      tom.velocityX=0;
      tom.addAnimation("tomLastImage", tomImg3);
      tom.x =300;
      tom.scale=0.2;
      tom.changeAnimation("tomLastImage");
      jerry.addAnimation("jerryLastImage", jerryImg3);
      jerry.scale=0.15;
      jerry.changeAnimation("jerryLastImage");
  }  

  drawSprites();
