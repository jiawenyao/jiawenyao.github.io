var organics = [];

var change;
var myr = 24;
var yoff = 0.0;

var r1 = 50;
var rough = 18;
var the_x, the_y;

function setup() {
  var canvas = createCanvas(1024, 768);
  angleMode(DEGREES);
  canvas.parent('sketch-holder');
  //frameRate(32);
  change = 0;

  for (var i = 0; i < 660; i += 11) {
    organics.push(new Organic(0.1 + 1 * i, width - 70, 70, i * 0.7, i * random(180)));
  }
}

function draw() {
  background(0);

  push();
  translate(0, height);
  beginShape();
  noStroke();
  var xoff = 0;
  var offset;
  for (var a = -180; a < 180; a += 8) {

    offset = map(noise(xoff, yoff), 0, 1, -rough, rough);

    //var offset = map(noise(sin(xoff)*a+0.5, cos(yoff)*a+0.5), 0, 1, -25, 25);
    var r2 = r1 + offset;
    var x = r2 * cos(a);
    var y = r2 * sin(a);

    if (a == -44) {
      the_x = x;
      the_y = y;
      //ellipse(the_x, the_y, 6);
    }
    curveVertex(x, y);
    xoff += 0.1;
    //ellipse(x, y, 4, 4);
  }
  endShape(CLOSE);
  yoff += 0.02;

  var k = random(-2, 3);
  if (r1 <= 600) {
    r1 += k;
  }
  if (rough < 300) {
    rough += k;
  }
  pop();


  push();
  for (var i = 0; i < organics.length; i++) {
    organics[i].show(change);
  }
  change += 0.005;
  pop();

}


function Organic(radius, xpos, ypos, roughness, angle) {

  this.radius = radius;
  this.xpos = xpos;
  this.ypos = ypos;
  this.roughness = roughness;
  this.angle = angle;


  this.show = function(change) {
    //noStroke();
    strokeWeight(0.5);
    stroke(200);
    noFill();

    push();
    translate(xpos, ypos);
    rotate(this.angle + change);
    beginShape();

    var xoff = 0;
    for (var i = 0; i < 360; i += 6) {
      //var offset = map(sin(i*10+frameCount*0.01), -1, 1, -this.roughness, this.roughness);
      var offset = map(noise(xoff, change), 0, 1, -this.roughness, this.roughness);

      var dis = floor(dist(width - 70, 70, the_x, the_y));
      var r;
      if (dis > this.radius + myr) {
        r = this.radius + offset;
      } else {
        r = (dis - myr - 300) + offset;
        console.log("r" + r);
      }
      var x = r * cos(i);
      var y = r * sin(i);
      curveVertex(x, y);
      xoff += 0.1;
    }
    endShape(CLOSE);
    pop();
  }
}
