
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var counter = document.getElementById("counter");
var timeGauge = document.getElementById("timeGauge");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var progress = document.getElementById("progress");
var scoreKeeper = document.getElementById("scoreKeeper");



//create our questions
var questions = [
    {
        question: "how many Superbowls have the Pittsburgh Steelers won?",
        choiceA: "three",
        choiceB: "six",
        choiceC: "two",
        correct: "B"
    }, {
        question: "who was the former Pittsburg Steelers running back nicknamed 'The Bus'?",
        choiceA: "Willie Parker",
        choiceB: "Leveon Bell",
        choiceC: "Jerome Bettis",
        correct: "C"
    }, {
        question: "at what age did Mike Tomlin win his first Superbowl?",
        choiceA: "34",
        choiceB: "45",
        choiceC: "28",
        correct: "A",
    }, {
        question: "who did the steelers draft with their first pick in the 2020 NFL draft?",
        choiceA: "Chase Claypool",
        choiceB: "Hurschel Walker",
        choiceC: "Omari Thompson",
        correct: "A",
    }, {
        question: "how many turnovers did the Pittsburgh Steelers force in the 2019 season?",
        choiceA: "37",
        choiceB: "45",
        choiceC: "30",
        correct: "C",
    }
];

//create some variables
var lastQuestion = questions.length - 1;
var runningQuestion = 0;
var count = 0;
var questionTime = 1200; // 120s
var gaugeWidth = 200 // 200px
var gaugeUnit = gaugeWidth / questionTime;
var TIMER = 0;
var score = 0;
var correct = 0;
var incorrect = 0;

// give a question
function giveQuestion() {
    var q = questions[runningQuestion];
    
    if(runningQuestion < 5) {
        question.innerHTML = "<p>" + q.question + "</p>";
        choiceA.innerHTML = q.choiceA;
        choiceB.innerHTML = q.choiceB
        choiceC.innerHTML = q.choiceC;
    }
    else{
        console.log("works")
        window.location.href = "hspage.html";
    }

   
}

start.addEventListener("click", startQuiz);

// start quiz
function startQuiz() {
    startTime();
    start.style.display = "none";
    giveQuestion();
    quiz.style.display = "block";
    //giveProgress();
    //TIMER = setInterval(giveCounter, 1000);
}

var timeLeft = 60;
//sets the timer
var timeInterval
function startTime() {
  
     timeInterval = setInterval(function() {
      timeGauge.textContent = "Time left: " + timeLeft;
      timeLeft--;
  
      if (timeLeft <= 0) {
        timeGauge.textContent = "Enter you initials";
        clearInterval(timeInterval);
        endGame();
      }
  
    }, 1000);
  }
// function startTime() {
//     timer = setInterval(function () { 
//        timeLeft --
//        timeGauge.textContent = "Time: " + timeGauge
//        if (timeLeft === 0){
//            endGame()
//        }
//    },1000)
//   }


// progress
// function giveProgress() {
//     for (var qIndex = 0; qIndex <= lastQuestion; qIndex++) {
//         progress.innerHTML += "<div class='prog' id=" + qIndex + "><div>";
//     }
// }

// function giveCounter() {
//     if (count <= questionTime) {
//         counter.innerHTML = count;
//         timeGauge.style.width = count * gaugeUnit;
//         count++
//     }
//     else {
//         count = 0;
//         answerIsWrong();
//         clearInterval();
//         //giveScore();
//     }
//     if (runningQuestion <= lastQuestion) {
//         runningQuestion++;
//         giveQuestion();
//     }
// }
// check answer
function checkAnswer(answer) {
    if (answer === questions[runningQuestion].correct) {
        // score++;
        // answerIsCorrect();
    } else {
        timeLeft-=10
        //answerIsWrong();
    }
    count = 0;
    if (runningQuestion <= lastQuestion) {
        runningQuestion++;
        giveQuestion();
    } else {
        clearInterval(timeInterval);
        //giveScore();
    }
}

//answer is correct
function answerIsCorrect() {
    document.getElementById("question").style.backgroundColor = "0f0";
    correct++
    document.getElementById("correct").innerHTML = `correct: ${correct}`;
    document.getElementById("wrong").innerHTML = `incorrect: ${incorrect}`;
}

function answerIsWrong() {
    document.getElementById("question").style.backgroundColor = "f00";
    incorrect++
    document.getElementById("wrong").innerHTML = `incorrect: ${incorrect}`;
    document.getElementById("correct").innerHTML = `correct: ${correct}`;
}

//function for end of game
function endGame() {
    clearInterval(timeInterval)
    question.innerHTML ="";
    choiceA.innerHTML ="";
    choiceB.innerHTML ="";
    choiceC.innerHTML ="";
    progress.textContent = `Game Over! Your Score is ${timeLeft}`;
}