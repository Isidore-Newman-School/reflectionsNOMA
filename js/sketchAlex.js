
var video;
var clear;
var dec;
var frames = [];
var counter = 0;
var total;
var pictures = [];
var multiplier = 1;
var canvas;
var vidX;
var vidY = 300;

function setup() {
  vidX = (windowWidth - 800) / 2;
  var neutral = "neutral";
  sessionStorage.setItem("multplier", neutral)
  canvas = createCanvas(800, 360);
  canvas.position(vidX, vidY);
  background(51);
  video = createCapture(VIDEO);
  video.size(320, 240);
  video.hide();
  change = createButton('Change Size');
  change.position((windowWidth - 30) / 2, vidY + 360 + 30);
  change.mousePressed(function(){
    if (multiplier <= 0.25){
      clearScreen();
    }
    else{
      multiplier/=2
    }
  });
  setName();
}
function draw() {
  var w = 160*multiplier;
  var h = 120*multiplier;
  var x = 0;
  var y = 0;

  //how many frames makes up the canvas
  total = floor(width / w) * floor(height / h);

  //loads the frames into all the screens for each frame
  frames[counter] = video.get();
  counter++;
  if (counter == total) {
    counter = 0;
  }

  for (var i = 0; i < frames.length; i++) {

    var index = (i + frameCount) % frames.length;
    pictures[index] = image(frames[index], x, y, w, h);
    x = x + w;
    if (x >= width) {
      x = 0;
      y = y + h;
    }
  }
}

//refreshes the screen
function clearScreen(){
  location.reload();
}

function setName() {
   // textSize(30);
   // var n = names[currentEffect];
   // text("by " + n, (width - textWidth(n)) / 2, 40);
   nameDiv = select("#nameDiv");
   nameDiv.html("Alex Cabrera");
}

//credits
//https:github.com/CodingTrain/Rainbow-Code/blob/master/Tutorials/P5JS/p5.js_video/11.2_p5.js_photoBooth/sketch.js
