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


// -- face tracking -- //
var points = [];
var tracker;

// -- David -- //
var previousPixels = [];
var particles = [];
var adlerSlider = 0;


// -- John -- //
var hitbox = {
   left: 0,
   right: 0,
   bottom: 0,
   top: 0,
   avgX: 0,
   avgY: 0,
   display: function() {
      //If an object can move
      if (canMove === true) {
         fill(0, 255, 0);
      } else {
         fill(255, 0, 0);
      }

      noStroke();
      //Hitbox
      rect(this.left, this.bottom, (this.right - this.left) * 1.1, (this.top - this.bottom) * 1.1);
   }
}

// -- Charles -- //
var hat;
var beardPic;


var effects = ["deBB", "Adler", "Carroll", "Bueche"];
var names = ["Jenna deBoisblanc", "David Adler", "Charles Carroll", "Blair Bueche"];
var currentEffect = 2;

function preload() {

  // -- Charles -- //
  hat = loadImage("assets/Christmas-Hat.png");
  beardPic = loadImage("assets/beard.png");
}

function setup() {
   vidX = (windowWidth - vidW) / 2;
   videoP5 = createCapture(VIDEO);
   videoP5.id("videoP5");
   videoP5.size(vidW, vidH);
   videoP5.position(vidX, vidY);
   canvas = createCanvas(vidW, vidH);
   canvas.position(vidX, vidY);

   // -- face tracking -- //
   tracker = new tracking.LandmarksTracker();
   tracker.setInitialScale(4);
   tracker.setStepSize(2);
   tracker.setEdgesDensity(0.1);


   setupEffects();



   // -- Charles -- //
   setupTracking();

}

// -- face tracking -- //
function setupTracking() {
   tracking.track('#videoP5', tracker, {
      camera: true
   });
   tracker.addListener('track', function(event) {
      if (!event.data) return;
      event.data.landmarks.forEach(function(landmarks) {
         points = [];
         for (var l in landmarks) {
            points.push({
               x: landmarks[l][0],
               y: landmarks[l][1]
            });
         }
      });

   });
}

function restartTracking() {
  tracker.addListener('track', function(event) {
     if (!event.data) {
       points = [];
       return;
     }
     event.data.landmarks.forEach(function(landmarks) {
        for (var l in landmarks) {
           points.push({
              x: landmarks[l][0],
              y: landmarks[l][1]
           });
        }
     });

  });
}

function removeTracking() {
   tracker.removeAllListeners("track");
   points = [];
}

function drawTracking() {
   image(videoP5, 0, 0);
   fill(255, 0, 0);
   for (var i = 0; i < points.length; i++) {
      text(i, points[i].x, points[i].y);
   }


   if (points.length > 24) {
      // left eye
      ellipse(points[20].x, points[20].y + 10, 50, 50);

      // right eye
      ellipse(points[24].x, points[24].y + 10, 50, 50);
   }
}

function yourEffect() {
   noTint();
   push();
   scale(-1,1);
   image(videoP5, vidX, vidY, min(mouseX, vidW), vidH);
   pop();
}

function setupEffects() {
  setName();
   noTint();
   //removeTracking();
   switch (effects[currentEffect]) {
      case "deBB":
         videoP5.size(vidW, vidH);
         break;
      case "Adler":
         vScale = 60;
         videoP5.size(64, 48);
         colorMode(HSB);
         videoP5.loadPixels();
         pixelDensity(1);
         previousPixels = videoP5.pixels;
         break;
      case "Carroll":
         videoP5.size(vidW, vidH);
         //restartTracking();
         // console.log(tracker);
         break;
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

function displayEffect() {
   switch (effects[currentEffect]) {
      case "deBB":
         deBBEffect();
         break;
      case "Adler":
         davidEffect();
         break;
      case "Carroll":
         charlesEffect();
         break;
      case "Bueche":
         blairEffect();
         break;
      default:
         image(videoP5, vidX, vidY, vidW, vidH);
         break;
   }
}

// ------------------------
// No need to modify these

function draw() {
   background(255);
   displayEffect();


}

function setName() {
   // textSize(30);
   // var n = names[currentEffect];
   // text("by " + n, (width - textWidth(n)) / 2, 40);
   nameDiv = select("#nameDiv");
   nameDiv.html(names[currentEffect]);
}

function createButtons() {
   for (var i = 0; i < names.length; i++) {
      buttons[i] = createButton(effects[i]);
      var bw = (windowWidth - names.length * 60) / 2;
      buttons[i].position(i * 60 + bw, vidH + vidY + 20);
      buttons[i].mousePressed(changeEffect(i));
   }
}

function changeEffect(effectIndex) {
   return function() {
      console.log(effects[effectIndex]);
      currentEffect = effectIndex;
      setupEffects();
   }
}

function charlesEffect() {
   //background(255, 0, 0);

   push();
   //scale(-1,1);
   filter(GRAY);
   //image(videoP5, -width, 0, vidW, vidH);
   image(videoP5, 0, 0, vidW, vidH);
   pop();


   // fill(130, 255, 255, .10);

   if (points.length > 24) {
      image(hat, points[10].x-50, points[10].y-150, width / 4, height / 4);
      image(beardPic, points[1].x, points[7].y - 5, width / 4, height / 4);
      //drawTracking();
   }
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



function deBBEffect() {
   //var hue = slider.value();
   //tint(hue, 255, 255);
   image(videoP5, 0, 0, vidW, vidH);
}
