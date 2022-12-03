function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("lightblue")
  fill("red")
rect ( 50+(frameCount/3),100, 190,50);
  fill ("black")
  circle (75+(frameCount/3),150, 30)
  fill ("black")
  circle (202+(frameCount/3), 150,30)
  fill ("red")
  rect (70+(frameCount/3),60,100,40)
  triangle (50+(frameCount/3),100, 70+(frameCount/3),60, 70+(frameCount/3),100)
  triangle (170+(frameCount/3),100,200+(frameCount/3),100,170+(frameCount/3),60)
  fill("lightblue")
  rect (80+(frameCount/3),70, 30,20)
  line (120+(frameCount/3), 60, 120+(frameCount/3),150)
  rect (130+(frameCount/3), 70, 30,20)
  fill ("grey")
  rect (0,165,400,240)
  fill ("darkgreen")
  ellipse (60,320,80,120)
  fill ("brown")
  rect( 55,330,10,70)
  fill ("lightgreen")
  ellipse (330,300,80,130)
  fill ("brown")
  rect (320, 320,20,100)
  fill("green")
  ellipse (280, 280, 80, 160)
  fill("brown")
  rect (275, 280,15,130)
  
  
}