class Dustbin {
    constructor(x, y) {
      var options = {
          'isStatic': true
      }
      this.width = 200;
      this.height = 100;
      this.thickness = 20;
      this.angle = 0;
      this.x = x;
      this.y = y;
      this.bottombody = Bodies.rectangle(this.x, this.y, this.width, this.thickness, options);
      Matter.Body.setAngle(this.bottombody,this.angle);
      this.leftbody = Bodies.rectangle(this.x-this.width/2, this.y-this.height/2, this.thickness, this.height, options);
      Matter.Body.setAngle(this.leftbody,this.angle);
      this.rightbody = Bodies.rectangle(this.x+this.width/2, this.y-this.height/2, this.thickness, this.height, options);
      Matter.Body.setAngle(this.rightbody,-1*this.angle);
      
      World.add(world, this.leftbody);
      World.add(world, this.rightbody);
      World.add(world, this.bottombody);
    }
    display(){
      var bottompos = this.bottombody.position;
      var leftpos = this.leftbody.position;
      var rightpos = this.rightbody.position;
    
      push();
      translate(bottompos.x, bottompos.y);
      angleMode(RADIANS);
      rotate(this.angle);
      rectMode(CENTER);
      fill("red");
      rect(0, 0, this.width, this.height);
      pop();
    
      push();
      translate(leftpos.x, leftpos.y);
      angleMode(RADIANS);
      rotate(this.angle);
      rectMode(CENTER);
      fill("red");
      rect(0, 0, this.thickness, this.height);
      pop();
    
      push();
      translate(rightpos.x, rightpos.y);
      angleMode(RADIANS);
      rotate(this.angle);
      rectMode(CENTER);
      fill("red");
      rect(0, 0, this.thickness, this.height);
      pop();
    }
  }
