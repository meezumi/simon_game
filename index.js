

var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

var started=false;
var level = 0;

$(document).keydown(function (){
  if (!started){
    $("#level-title").text("Goo!!");
    nextSequence();
    started=true;
  }
});

$(".btn").click(function(){
  var userChosenColour = $(this).attr("id");
  $("#"+userChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
});

function nextSequence(){
  userClickedPattern = [];
  level++;
  $("#level-title").text("Goo!!");
  
  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function playSound(name){
  var audio = new Audio("https://meezumi.github.io/simon_game/"+name+".mp3");
  audio.play();
}

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("success");

    if (userClickedPattern.length === gamePattern.length){
      setTimeout(function () {
        nextSequence();
        
      }, 1000);

    }

  } else {

    $("body").addClass("game-over");
    console.log("wrong");
    $("#level-title").text("suckerrr XD \n restart!");
    setTimeout(function(){
      $("body").removeClass("game-over");
    }, 200);
    var lose = new Audio("https://meezumi.github.io/simon_game/lose.mp3");
    lose.play();
    startOver();
  }

}

function startOver(){
  level = 0;
  gamePattern = [];
  started = false;
}

function bgmusic (){
  var Tetris = new Audio("https://meezumi.github.io/simon_game/Tetris.mp3");
  Tetris.play();
}


