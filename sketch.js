function preload() {

}
function setup() {
  createCanvas(1000, 1000);

  background("pink");
  locks = new Lock();
  locks.display()
}


function draw() {
  console.log(mouseX,mouseY)
 
  drawSprites();
}
