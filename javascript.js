var playing = false;
var score;
var action;
var timeremaining;
var correctanswer;

//if we click on the start/reset button
document.getElementById('start').onclick = function(){
  //if we are playing
  if (playing == true) {
    location.reload();
  }
  else {//if we are not playing
    playing = true;

//set score to zero
    score = 0;
    document.getElementById('scorevalue').innerHTML = score;

//show countdown box
    show('timeremaining');
    timeremaining = 60;
    document.getElementById('timeremainingvalue').innerHTML = timeremaining;

//change button text to "Reset Game"
    document.getElementById('start').innerHTML = "Reset Game";

//start the countdown
    startCountdown();

//hide the gameover box
    hide('gameover');

//generate a new question and answer
        generateQA();
  }
}

//clicking on an answer box
for (i = 1; i < 5; i++) {

document.getElementById('box' + i).onclick = function () {
  if (playing==true) {
      if (this.innerHTML == correctanswer) {

        score ++;
        document.getElementById('scorevalue').innerHTML = score;

        show('correct');
        hide('wrong');
        setTimeout(function () {
          hide('correct');
        },1000);
          generateQA();
      }else{
        show('wrong');
        hide('correct');
        setTimeout(function () {
          hide('wrong');
        }, 1000);
      }
    }

  }
}
//if we click on answer box
  //if we are not playing
    //no action
  //if we are playing
    //was the answer correct
      //if no
        //show "try again" for 1 second
      //if yes
        //increase score by one
        //show "correct" box for 1 second
        //generate new question and answers

    //FUNCTIONS!!
//starts the countdown timer
function startCountdown() {
  action = setInterval(function(){
    timeremaining -= 1;
    document.getElementById('timeremainingvalue').innerHTML = timeremaining;
    if (timeremaining == 0) {
      stopCountdown();
      show('gameover');

      document.getElementById('gameover').innerHTML = "<p>Game Over!</p><p>Your Score Is: " + score + "</p>";
      hide('timeremaining');
      hide('correct');
      hide('wrong');
      playing = false;
      document.getElementById('start').innerHTML = "Start Game";
}
  }, 1000);
};
//stops countdown timer
function stopCountdown() {
  clearInterval(action);
};


//generate a question and answer function
function generateQA() {
  var x = Math.floor(Math.random() * (17-1) + 1);
  var y = Math.floor(Math.random() * (17-1) + 1);

  correctanswer = x*y;
  document.getElementById('question').innerHTML = y + "x" + x;
  var correctboxnum = Math.floor(Math.random() * (5-1) + 1)
  document.getElementById('box' + correctboxnum).innerHTML = correctanswer;

var answers = [correctanswer];

  for (var i = 1; i < 5; i++) {
    if (i != correctboxnum) {
      var wronganswer;
      do {
        wronganswer = Math.floor(Math.random() * (17-1) + 1) * Math.floor(Math.random() * (17-1) + 1);
      } while (answers.indexOf(wronganswer)>-1);
            document.getElementById('box' + i).innerHTML = wronganswer;
            answers.push(wronganswer);
    }
  }
}
//hide function
function hide(Id) {
  document.getElementById(Id).style.display = 'none';
}

//show function
function show(Id) {
  document.getElementById(Id).style.display = 'block';
}
