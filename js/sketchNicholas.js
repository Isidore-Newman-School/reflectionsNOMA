var points = [];
var canvasP5;
var videoP5;


var vidW = 640;
var vidH = 480;
var vidX = 0;
var vidY = 300;

var img;

function setup() {
  vidX = (windowWidth - vidW) / 2;
  videoP5 = createCapture(VIDEO);
  videoP5.id("video");
  videoP5.size(vidW, vidH);
  videoP5.position(vidX, vidY);

  canvasP5 = createCanvas(vidW, vidH);
  canvasP5.position(vidX, vidY);

  var tracker = new tracking.LandmarksTracker();
  tracker.setInitialScale(4);
  tracker.setStepSize(2);
  tracker.setEdgesDensity(0.1);


  tracking.track('#video', tracker, { camera: true });
  tracker.on('track', function(event) {
    if(!event.data) return;
    event.data.landmarks.forEach(function(landmarks) {
      points = [];
      for(var l in landmarks){
        points.push({x: landmarks[l][0], y: landmarks[l][1]});
      }
    });

  });
  // load image here
  img = loadImage("assets/hand.png");
  setName();
}

function draw() {
  image(videoP5, 0, 0);
  fill(255, 0, 0);
  // for (var i = 0; i < points.length; i++) {
  //   text(i, points[i].x, points[i].y);
  // }
  // image is placed

  if (points.length > 24) {
    image(img, vidW, points[7].y - 20);

    if (vidW > points[7].x - 100) {
      vidW -= 20;
    }  else if (vidW < points[7].x - 100) {
        vidW = points[7].x - 100;
        textSize(30)
        text("YOU'VE BEEN SLAPPED", vidW/10, vidH/10)
      }
    }
}

function setName() {
   // textSize(30);
   // var n = names[currentEffect];
   // text("by " + n, (width - textWidth(n)) / 2, 40);
   nameDiv = select("#nameDiv");
   nameDiv.html("Nicholas Combe");
}
