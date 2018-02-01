function Particle() {
   this.x = 0;
   this.y = 0;
   this.r = random(3, 5);
   this.update = function() {
      this.x += random(-10, 10);
      this.y += random(-10, 10);

      this.x = constrain(this.x, 0, width);
      this.y = constrain(this.y, 0, height);
   }
   this.show = function(x, y, slideVal) {
      noStroke();
      if (slideVal < 80) {
         fill(255);
      } else if (slideVal < 170) {
         fill(slideVal*2%255, 255, 255);
      } else {
         fill(random(255), 255, 255);
      }
      this.x = x;
      this.y = y;
      ellipse(this.x, this.y, this.r, this.r);
   }
}
