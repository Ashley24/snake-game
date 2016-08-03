
function go(){
    if (snake.direction=="right"){
        snake.slitherRight();
    }
    if(snake.direction=="left"){
      snake.slitherLeft();
    }
    if (snake.direction=="up"){
      snake.slitherUp();
    }
    if (snake.direction=="down"){
      snake.slitherDown();
    }
};
setInterval(go,500);
// JavaScript File
var snake = {
  direction: "right",
  position: {
     top: 0, 
     left: 0,
  },
   slither: function(newTop, newLeft) {
    this.position.top = newTop;
    this.position.left = newLeft;
    $("#snake").css("top", this.position.top);
    $("#snake").css("left", this.position.left);
   },
  slitherDown: function() {
   this.slither(this.position.top+10,this.position.left);
  },
  slitherRight: function() {
    this.slither(this.position.top,this.position.left+10);
  },
  slitherLeft: function() {
    this.slither(this.position.top,this.position.left-10)
  },
  slitherUp: function () {
    this.slither(this.position.top-10,this.position.left)
  },
  
}



$(document).keydown(function(event) { 
  console.log(event.keyCode);
  if(event.keyCode == 40) {
    snake.direction = "down";
  } else if (event.keyCode == 39) {
    snake.direction = "right";
  } else if (event.keyCode == 37) {
    snake.direction = "left";
  } else if (event.keyCode == 38) {
    snake.direction = "up";
  }
  
});

function food(){
var locationX = Math.floor(Math.random() * 25) 
var locationY = Math.floor(Math.random() * 25)  
 $("#food").css("top", 20*locationY);
 $("#food").css("left", 20*locationX);
}


$(document).ready(function(event) {
  food()
});

var nuggets = {
  position: {
    top: 0,
    left: 0,
  },
}


  