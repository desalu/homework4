var questionEl = document.querySelector("#question-box");
var answersEl = document.querySelector("#answers-box");
var response;
var j = 0;
var scoreKeeping = [];
var answer1 = document.querySelector("#zero");


  var quiz = [
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

  ];

function displayQuestion() {
  questionEl.textContent = quiz[j].question;
};

function createAnswerButtons() {

  for ( var i = 0; i < quiz[j].answers.length; i++) {

    var newbutton = document.createElement("button");
    var br = document.createElement("br")
    br.id = "br";
    newbutton.id = "button";
    newbutton.textContent = quiz[j].answers[i];
    newbutton.classList.add("btn");
    newbutton.classList.add("btn-primary");
    newbutton.setAttribute("data-index", i);
    newbutton.classList.add("m-1");
    answersEl.appendChild(newbutton);
    answersEl.appendChild(br);

  };

}

  function recordKeeping(response) {
  if (response === quiz[j].correctAnswer) {
    scoreKeeping.push('Right');
  }
  else {
    scoreKeeping.push('Wrong');
  }
  console.log(scoreKeeping);
  }

  function quizProgram() {
  console.log(quiz.length);
 
  if ( quiz[j]< quiz.length) {
    createAnswerButtons();
    displayQuestion();
  }
  else {
    console.log("Finished");
  }
  };


  answersEl.addEventListener("click", function () {
  var element =event.target;
  var choice = element.getAttribute("data-index");

  recordKeeping(choice);

  while (document.getElementById("button")) {
    var rmButton = document.getElementById("button");
    rmButton.parentNode.removeChild(rmButton);
  };

  while (document.getElementById("br")) {
    var rmBr = document.getElementById("br");
    rmBr.parentNode.removeChild(rmBr);
  };

  j++;
  
  quizProgram();
  });

quizProgram();