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

// -- Michael -- //
var bundtcake;
var bundtcakex = Math.floor(Math.random() * 320) + 80;
var bundtcakey = Math.floor(Math.random() * 200) + 25;

// -- Charles -- //
var hat;
var beardPic;

// -- Blair -- //
var lastCheckedBlair = 0;
var blairRotateMode = 0;
var rotation = 0;


var effects = ["deBB", "Adler", "Karl", "Bueche"];
var names = ["Jenna deBoisblanc", "David Adler", "Michael Karl", "Blair Bueche"];
var currentEffect = 2;

function preload() {
  bundtcake = loadImage("assets/lemon.png");
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


function setupEffects() {
  setName();
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
      case "Karl":
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
      case "Karl":
         michaelEffect();
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

function michaelEffect() {
  image(videoP5, 0, 0);
  if (points.length > 24) {
    image(bundtcake, bundtcakex, bundtcakey, 50, 50);
    checkEachBundt();
  }
}

function checkEachBundt(){
  var mouthx = points[30].x-25;
  var mouthy = points[30].y-25;
  var bundtx = bundtcakex
  var bundty = bundtcakey
  var d = sqrt((mouthx-bundtx)*(mouthx-bundtx)+(mouthy-bundty)*(mouthy-bundty))
  if (d < 25){
    //image(bundtcake, bundtcakex, bundtcakey, 50, 50);
    bundtcakex = Math.floor(Math.random() * 270) + 50
    bundtcakey = Math.floor(Math.random() * 200) + 50
  }
}
