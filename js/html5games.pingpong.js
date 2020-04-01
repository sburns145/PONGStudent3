var KEY = {
  UP:38,
  DOWN:40,
  W:87,
  S:83
}
var pingpong = {}
pingpong.pressedKeys = [];
// add a ball variable which belongs to ping pong


$(function() {
  //set an interval to call gameloop every 30 milliseconds
  pingpong.timer=setInterval(gameloop, 30);
  //mark which key is down and up and store into array
  "pressedKeys"
  $(document).keydown(function(e) {
    pingpong.pressedKeys[e.which]=true;
  });
  $(document).keyup(function(e) {
    pingpong.pressedKeys[e.which]=false;
  });

});

function gameloop() {
  movePaddles();
  //add a call to moveBall
}

function movePaddles() {
  //use the timer to keep chekcing if a key is pressedKeys
  if (pingpong.pressedKeys[KEY.UP]) {
    var top = parseInt($("#paddleB").css("top"));
    $("#paddleB").css("top", top - 5);
  }
  if(pingpong.pressedKeys[KEY.DOWN]) {
    var top = parseInt($("#paddleB").css("top"));
    $("#paddleB").css("top", top + 5);
  }
  if(pingpong.pressedKeys[KEY.W]) {
    var top = parseInt($("#paddleA").css("top"));
    $("#paddleA").css("top", top - 5);
  }
  if(pingpong.pressedKeys[KEY.S]) {
    var top = parseInt($("#paddleA").css("top"));
    $("#paddleA").css("top", top + 5);
  }

}

function moveBall() {
  //define some useful variables
  var playgroundHeight = parseInt($("#playground").height());
  var playgroundWidth = parseInt($("#playground").width());
  var ball = pingpong.ball;

  //check the boundary
  // bottom edge
  if(ball.y + ball.speed*ball.directionY > playgroundHeight) {
    ball.directionY = -1;
  }
  // top edge


  //right edge


  // left edge


 //set the ball's x and y


  //check the paddle (TODO)


  //move the ball


}
