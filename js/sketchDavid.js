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

// -- David -- //
var previousPixels = [];
var particles = [];
var adlerSlider = 0;

var effects = ["deBB", "Adler", "Carroll", "Bueche"];
var names = ["Jenna deBoisblanc", "David Adler", "Charles Carroll", "Blair Bueche"];
var currentEffect = 1;

function setup() {
   vidX = (windowWidth - vidW) / 2;
   videoP5 = createCapture(VIDEO);
   videoP5.id("videoP5");
   videoP5.size(vidW, vidH);
   videoP5.position(vidX, vidY);
   canvas = createCanvas(vidW, vidH);
   canvas.position(vidX, vidY);

   // // -- David -- //
   for (var i = 0; i < 40; i++) {
      particles[i] = new Particle();
   }
   setupEffects();
}



function setupEffects() {
  setName();
   switch (effects[currentEffect]) {
      case "Adler":
         vScale = 60;
         videoP5.size(64, 48);
         colorMode(HSB);
         videoP5.loadPixels();
         pixelDensity(1);
         previousPixels = videoP5.pixels;
         break;
      default:
         videoP5.size(vidW, vidH);
         break;
   }
}


function draw() {
   background(255);
   davidEffect();
}

function setName() {
   // textSize(30);
   // var n = names[currentEffect];
   // text("by " + n, (width - textWidth(n)) / 2, 40);
   nameDiv = select("#nameDiv");
   nameDiv.html(names[currentEffect]);
}

function davidEffect() {
   textSize(11);
   background(0);
   videoP5.loadPixels();
   loadPixels();
   if(floor(random(3)) === 0) adlerSlider++;
   for (var y = 0; y < videoP5.height; y++) {
      for (var x = 0; x < videoP5.width; x++) {
         var index = (videoP5.width - x + 1 + (y * videoP5.width)) * 4;
         var r = videoP5.pixels[index + 0];
         var g = videoP5.pixels[index + 1];
         var b = videoP5.pixels[index + 2];
         var changeR = previousPixels[index + 0];
         var changeG = previousPixels[index + 1];
         var changeB = previousPixels[index + 2];
         var currentAverage = (r + g + b) / 3;
         var previousAverage = (changeR + changeG + changeB) / 3;
         var z = round(random(1, 9));
         var xSpace = width / videoP5.width;
         var ySpace = height / videoP5.height;

         if (changeR > r + 25 || changeR < r - 25 || changeG < g - 25 || changeG < g - 25 || changeB < b - 25 || changeB < b - 25) {
            for (var i = 0; i < 2; i++) {
               particles[i].update();
               particles[i].show(x * xSpace, y * ySpace, adlerSlider%255);
            }
          } else if (z % 3 === 0 && x % 2 === 0 && y % 2 === 0) {
            fill(adlerSlider%255, 255, 150);
            text(z, xSpace * x, ySpace * y);
         } else if (x % 2 === 0 && y % 2 === 0) {
            fill(adlerSlider%255, 255, 150);
            text(z, xSpace * x, ySpace * y);
         }
         previousPixels[index + 0] = r;
         previousPixels[index + 1] = g;
         previousPixels[index + 2] = b;
      }
   }
}
