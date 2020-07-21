var questionEl = document.querySelector("#question-box");
var answersEl = document.querySelector("#answers-box");
var i = 0;
var j = 0;
var scoreKeeping = [];
var timerEl = document.querySelector("#time-box");
var timer2 = document.querySelector("#time2"); 
var counter = 5;

function startMenu() {
  questionEl.textContent = "Javascript Quiz";
  var startButton = document.createElement("button");
  startButton.textContent = "Start";
  startButton.classList.add("btn");
  startButton.classList.add("btn-primary");
  startButton.classList.add("float-right")
  answersEl.appendChild(startButton);

  startButton.addEventListener("click", function () {  
    questionEl.textContent = "";
    startButton.parentNode.removeChild(startButton);
    countdown();
  })

};

function countdown() {

  var countDown = setInterval(() => {
    
    timerEl.textContent = counter + " seconds remaining";
    
    if (counter === 0) {
      timerEl.textContent = "";
      console.log(this);
      clearInterval(countDown);
      timeLimit();
      quizProgram();
    }
    else {
      counter--;
    }
    
  }, 1000);
  
};

function timeLimit() {
  counter = 30;

  var quizTime = setInterval(function() {
    timerEl.textContent = "Time: " + counter + " seconds";
    

    if (counter === 0) {
      timerEl.textContent = "";
      clearInterval(quizTime);
      endGame();
    }
    else {
      counter--;
    }

  }, 1000);
}


function quizProgram() {
  questionEl.textContent = quiz[i].question;

  for (j; j < quiz[i].answers.length; j++) {
    var answerButton = document.createElement("button");
    answerButton.textContent = quiz[i].answers[j];
    answerButton.id = "button";
    answerButton.setAttribute("data-index", j);
    answersEl.appendChild(answerButton);
  };

}
  
  answersEl.addEventListener("click", function () {

    var element =event.target;

    if (element.id === "button"){
      
      var choice = element.getAttribute("data-index")

      if (choice === quiz[i].correctAnswer) {
        scoreKeeping.push("right");
      }
      else {
        scoreKeeping.push("wrong");
      }

      i++;

      console.log(i);
      if ( i < quiz.length) {
        
        j = 0;
        removeElement();
        quizProgram();
      }
      else {
        removeElement();
        timerEl.textContent = "";
        counter = 0;
        endGame();
      }
      

    }
    
  })

  


var quiz = [
  {
    question: "Why so JavaScript and Java have similar name?",
    answers: [
      "JavaScript is a stripped-down version of Java",
      "JavaScript's syntax is loosely based on Java's",
      "They both originated on the island of Java",
      "None of the above"
    ],
    correctAnswer: "2"
  },

  {
    question: "When a user views a page containing a JavaScript program, which machine actually executes the script?",
    answers: [
      "The User's machine running a Web browser",
      "The Web server",
      "A central machine deep within Netscape's corporate offices",
      "None of the above"
    ],
    correctAnswer: "2"
  },

  {
    question: "Why so JavaScript and Java have similar name?",
    answers: [
      "JavaScript is a stripped-down version of Java",
      "JavaScript's syntax is loosely based on Java's",
      "They both originated on the island of Java",
      "None of the above",
    ],
    correctAnswer: "2"
  },

  {
    question: "Why so JavaScript and Java have similar name?",
    answers: [
      "JavaScript is a stripped-down version of Java",
      "JavaScript's syntax is loosely based on Java's",
      "They both originated on the island of Java",
      "None of the above"
    ],
    correctAnswer: "2"
  },

  ];

  

  function removeElement() {
  
    while (document.getElementById("button")) {
      var rmButton = document.getElementById("button");
      rmButton.parentNode.removeChild(rmButton);
    };
  
  }

  function endGame() {
    var score = 0;
    for (var k = 0; k < scoreKeeping.length; k++) {
      if (scoreKeeping[k] === "right"){
        score++;
      
      }
        
    };
    
    questionEl.textContent = "Game over";
    answersEl.textContent = "You scored " + score + " out of " + quiz.length + ".";
    
    var form = document.createElement("form-group");
    var input = document.createElement("input")
    var submit = document.createElement("button");
    submit.textContent = "submit";
    input.setAttribute("class:", "form-control");
    input.setAttribute("id:", "intitals");
    input.setAttribute("placeholder:", "JFK");
    form.appendChild(input);
    answersEl.appendChild(form);
    answersEl.appendChild(submit);
  }

  

  

  
  

  startMenu();