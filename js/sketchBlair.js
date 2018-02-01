var canvas;
var videoP5;
var vidW = 640;
var vidH = 480;
var vidX = 0;
var vidY = 300;
var slider;
var buttons = [];
var vScale;
var nameDiv;

// -- Blair -- //
var lastCheckedBlair = 0;
var blairRotateMode = 0;
var rotation = 0;

var effects = ["deBB", "Adler", "Carroll", "Bueche"];
var names = ["Jenna deBoisblanc", "David Adler", "Charles Carroll", "Blair Bueche"];
var currentEffect = 3;

function setup() {
   vidX = (windowWidth - vidW) / 2;
   videoP5 = createCapture(VIDEO);
   videoP5.id("videoP5");
   videoP5.size(vidW, vidH);
   videoP5.position(vidX, vidY);
   canvas = createCanvas(vidW, vidH);
   canvas.position(vidX, vidY);

   setupEffects();
}



function setupEffects() {
  setName();
   //removeTracking();
   switch (effects[currentEffect]) {
      case "Bueche":
         angleMode(DEGREES);
         rectMode(CENTER);
         vScale = 30;
         videoP5.size(1000 / vScale, 800 / vScale);
         break;
      default:
         videoP5.size(vidW, vidH);
         break;
   }
}


function draw() {
   background(255);
   blairEffect();
}

function setName() {
   // textSize(30);
   // var n = names[currentEffect];
   // text("by " + n, (width - textWidth(n)) / 2, 40);
   nameDiv = select("#nameDiv");
   nameDiv.html(names[currentEffect]);
}

function blairEffect() {
   if (millis() - lastCheckedBlair > 3000) {
      lastCheckedBlair = millis();
      blairRotateMode++;
      if (blairRotateMode > 5) blairRotateMode = 0;
   }
   videoP5.loadPixels();
   loadPixels();
   for (var y = 0; y < videoP5.height; y++) {
      for (var x = 0; x < videoP5.width; x++) {
         var index = (videoP5.width - x - 1 + (y * videoP5.width)) * 4;
         r = videoP5.pixels[index + 0];
         g = videoP5.pixels[index + 1];
         b = videoP5.pixels[index + 2];

         if (blairRotateMode % 3 == 0) rotation += 0.005;
         else if (blairRotateMode % 3 == 1) rotation += .2;
         else if (blairRotateMode % 3 == 2) rotation += .5;


         colorMode(RGB)
         fill(r, g, b);

         push();
         translate(x * vScale, y * vScale);
         rotate(rotation);
         noStroke();

         // choose the draw ellipse pixels
         if (floor(blairRotateMode / 3) == 0) ellipse(0, 0, vScale + 10, vScale / 1.5 + 7);
         else if (floor(blairRotateMode / 3) == 1) rect(0, 0, vScale, vScale);

         pop();
      }
   }
}
