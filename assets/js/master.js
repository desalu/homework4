var questionEl = document.querySelector("#question-box");
var answersEl = document.querySelector("#answers-box");
var input = document.createElement("input");
var i = 0;
var j = 0;
var scoreKeeping = [];
var timerEl = document.querySelector("#time-box");

var records = [{ name : "Fred", score: 6}];

var counter = 5;
var counter2 = 30;
var clock = 0;
var clock2 = 0;



function startMenu() {
  questionEl.textContent = "Javascript Quiz";
  questionEl.classList.add("display-4");
  questionEl.classList.add("text-center")
  var startButton = document.createElement("button");
  startButton.textContent = "Start";
  startButton.classList.add("btn");
  startButton.classList.add("btn-warning");
  startButton.classList.add("float-right")
  answersEl.appendChild(startButton);

  startButton.addEventListener("click", function () {  
    questionEl.textContent = "";
    startButton.parentNode.removeChild(startButton);
    questionEl.classList.remove("display-4", "text-center");
    timer();
  })

};


function timer() {
  timerEl.textContent = counter + " sec";
  answersEl.textContent = "Get Ready!";
  answersEl.classList.add("display-4");
  answersEl.classList.add("text-center");
  if (counter > 0){
    clock = setTimeout(timer, 1000);
  }
  else {
    answersEl.textContent = "";
    questionEl.textContent = "";
    answersEl.classList.remove("display-4","text-center");
    
    timeLimit();
    quizProgram();
    
  }
  counter--;
}

function timeLimit() {
  
  timerEl.textContent = counter2 + " sec";
  
  if (counter2 > 0){
    clock2 = setTimeout(timeLimit, 1000);
  }
  else {
    timerEl.textContent = "";
    endGame();
  }
  counter2--;
}


function quizProgram() {
  questionEl.textContent = quiz[i].question;

  for (j; j < quiz[i].answers.length; j++) {
    var answerButton = document.createElement("button");
    answerButton.classList.add ("btn", "btn-warning", "w-100", "m-1")
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
        clearTimeout(clock2);
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

    var br = document.createElement("br");
    questionEl.textContent = "Game over";
    questionEl.classList.add("text-center", "display-4")
    answersEl.textContent = "You scored " + score + " out of " + quiz.length + ".";
    answersEl.appendChild(br);
    var form = document.createElement("form");
    form.id = "frm";
    var formgroup = document.createElement("form-group");
    
    input.classList.add("m-1");
    var submit = document.createElement("button");
    submit.classList.add('m-1', "btn", "btn-primary");
    submit.textContent = "submit";
    input.setAttribute("class:", "form-control");
    input.setAttribute("id:", "intitals");
    input.setAttribute("placeholder:", "JFK");
    form.appendChild(formgroup);
    formgroup.appendChild(input);
    answersEl.appendChild(form);
    answersEl.appendChild(submit);

    submit.addEventListener("click", function() {
      
      recordList(score);
    });
  }

  function recordList(x) {

    var resetBtn = document.createElement("button");
    resetBtn.classList.add("btn", "btn-success");
    resetBtn.textContent = "Reset";
    questionEl.appendChild(resetBtn);

    resetBtn.addEventListener("click", function() {
      answersEl.textContent = "";
      
      titleBox.parentNode.removeChild(titleBox);
      while (document.getElementById("rec")) {
        var rem = document.getElementById("rec");
        rem.parentNode.removeChild(rem);
       
      }
      answersEl.removeChild();
      
      
    });

    var recordStored = JSON.parse(localStorage.getItem("records"));

    if (recordStored !== null) {
      records = recordStored;
    };

    var yourName = input.value.trim();
    var yourScore = x;
    records.push({name : yourName, score : yourScore});

    localStorage.setItem("records", JSON.stringify(records));


    var titleBox = document.createElement("div");
    titleBox.classList.add("clearfix");
    titleBox.classList.add("mb-2");
    var nameTitle =document.createElement("div");
    nameTitle.textContent = "Names"
    nameTitle.classList.add("float-left");
    var scoreTitle = document.createElement("div");
    scoreTitle.textContent = "Scores"
    scoreTitle.classList.add("float-right");
    titleBox.appendChild(nameTitle);
    titleBox.appendChild(scoreTitle);
    answersEl.appendChild(titleBox);

    for (var l = 0; l < records.length; l ++) {
      var recordBox  = document.createElement("div");
      recordBox.classList.add("clearfix");
      var nameBox = document.createElement("div");
      nameBox.classList.add("float-left");
      var scoreBox = document.createElement("div");
      scoreBox.classList.add("float-right");
      recordBox.id = "rec";
  

      nameBox.textContent = records[l].name;
      scoreBox.textContent = records[l].score;
      recordBox.appendChild(nameBox);
      recordBox.appendChild(scoreBox);
      answersEl.appendChild(recordBox);
      
    }

  }

  

  

  
  

  startMenu();