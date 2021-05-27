
var heading = document.getElementById("heading");
var content = document.getElementById("content");
var buttonArea = document.getElementById("buttonArea");
var feedback = document.getElementById("feedback");
var timerDisplay = document.getElementById("timerDisplay");
var counter = 0;
var timer = 180;
var score = 0;
var question = [ 
    {
        "questionText" : "This question intentionally left blank",
        "correctAnswer" : 1,
        "answerList" : [
            "answer 1"
        ]
    },
    {
        "questionText" : "This is question 1",
        "correctAnswer" : 1,
        "answerList" : [
            "q1 answer 1",
            "q1 answer 2",
            "q1 answer 3",
            "q1 answer 4"
        ]
    },
    {   
        "questionText" : "This is question 2",
        "correctAnswer" : 1,
        "answerList" : [
            "q2 answer 1",
            "q2 answer 2"
        ]
    },
    {
        "questionText" : "This is question 3",
        "correctAnswer" : 1,
        "answerList" : [
            "q3 answer 1",
            "q3 answer 2",
            "q3 answer 3",
            "q3 answer 4"
        ]
    },
    {
        "questionText" : "This is question 4",
        "correctAnswer" : 1,
        "answerList" : [
            "q4 answer 1",
            "q4 answer 2",
            "q4 answer 3",
            "q4 answer 4"
        ]
    },
    {
        "questionText" : "This is question 5",
        "correctAnswer" : 1,
        "answerList" : [
            "q5 answer 1",
            "q5 answer 2",
            "q5 answer 3",
            "q5 answer 4"
        ]
    },
    {
        "questionText" : "This is question 6",
        "correctAnswer" : 1,
        "answerList" : [
            "q6 answer 1",
            "q6 answer 2",
            "q6 answer 3",
            "q6 answer 4"
        ]
    },
    {
        "questionText" : "This is question 7",
        "correctAnswer" : 1,
        "answerList" : [
            "q7 answer 1",
            "q7 answer 2",
            "q7 answer 3",
            "q7 answer 4"
        ]
    },
    {
        "questionText" : "This is question 8",
        "correctAnswer" : 1,
        "answerList" : [
            "q8 answer 1",
            "q8 answer 2",
            "q8 answer 3",
            "q8 answer 4"
        ]
    },
    {
        "questionText" : "This is question 9",
        "correctAnswer" : 1,
        "answerList" : [
            "q9 answer 1",
            "q9 answer 2",
            "q9 answer 3",
            "q9 answer 4"
        ]
    },
    {
        "questionText" : "This is question 10",
        "correctAnswer" : 1,
        "answerList" : [
            "q10 answer 1",
            "q10 answer 2",
            "q10 answer 3",
            "q10 answer 4"
        ]
    },
    {
        "questionText" : "This is question 11",
        "correctAnswer" : 1,
        "answerList" : [
            "q11 answer 1",
            "q11 answer 2",
            "q11 answer 3",
            "q11 answer 4"
        ]
    },
    {
        "questionText" : "This is question 12",
        "correctAnswer" : 1,
        "answerList" : [
            "q12 answer 1",
            "q12 answer 2",
            "q12 answer 3",
            "q12 answer 4"
        ]
    },
    {
        "questionText" : "This is question 13",
        "correctAnswer" : 1,
        "answerList" : [
            "q13 answer 1",
            "q13 answer 2",
            "q13 answer 3",
            "q13 answer 4"
        ]
    },
    {
        "questionText" : "This is question 14",
        "correctAnswer" : 1,
        "answerList" : [
            "q14 answer 1",
            "q14 answer 2",
            "q14 answer 3",
            "q14 answer 4"
        ]
    },
    {
        "questionText" : "This is question 15",
        "correctAnswer" : 1,
        "answerList" : [
            "q15 answer 1",
            "q15 answer 2",
            "q15 answer 3",
            "q15 answer 4"
        ]
    },
    {
        "questionText" : "This is question 16",
        "correctAnswer" : 1,
        "answerList" : [
            "q16 answer 1",
            "q16 answer 2",
            "q16 answer 3",
            "q16 answer 4"
        ]
    },
    {
        "questionText" : "This is question 17",
        "correctAnswer" : 1,
        "answerList" : [
            "q17 answer 1",
            "q17 answer 2",
            "q17 answer 3",
            "q17 answer 4"
        ]
    },
    {
        "questionText" : "This is question 18",
        "correctAnswer" : 1,
        "answerList" : [
            "q18 answer 1",
            "q18 answer 2",
            "q18 answer 3",
            "q18 answer 4"
        ]
    },
    {
        "questionText" : "This is question 19",
        "correctAnswer" : 1,
        "answerList" : [
            "q19 answer 1",
            "q19 answer 2",
            "q19 answer 3",
            "q19 answer 4"
        ]
    },
    {
        "questionText" : "This is question 20",
        "correctAnswer" : 1,
        "answerList" : [
            "q20 answer 1",
            "q20 answer 2",
            "q20 answer 3",
            "q20 answer 4"
        ]
    }
];

function offerQuiz () {
    heading.innerText = "Coding Quiz Challenge";
    content.innerText = "Try to answer the following code related questions within the time limit. Answer carefully because incorrect answers will decrease your remaining time by 10 seconds.";
    var button = document.createElement("button");
    button.textContent = "Start";
    buttonArea.appendChild(button);
    button.addEventListener("click", quizMain);
};

function quizMain () {
    timerDisplay.innerText = timer;
    setInterval(decrementTimer, 1000, 1);
    questionPrep();

};

function questionPrep() {
    counter++;
    if (counter < question.length) {
        buttonArea.innerHTML="";
        renderQuestion ();
    } else {
        endQuiz();
    };
};

function renderQuestion () {

    heading.innerText = "Question " + counter;
    content.innerText = question[counter].questionText;
    for (var j=0; j<question[counter].answerList.length; j++) {
        var answerButton = document.createElement("button");
        answerButton.textContent = question[counter].answerList[j];
        answerButton.setAttribute("id", j);
        buttonArea.appendChild(answerButton);
        answerButton.addEventListener('click', (event) => {
             checkAnswer(event.target.id);
        });
    };
};
    
function checkAnswer(response) {
    if (response == question[counter].correctAnswer){
        feedback.innerText = "Correct";
        score++;
    } else {
        feedback.innerText = "Incorrect";
        decrementTimer (10);
    }
    questionPrep();
}

function endQuiz () {
    clearInterval ();
    timerDisplay.innerHTML = "";
    buttonArea.innerHTML = "";
    feedback.innerHTML = "";
    heading.innerText = "Your score: " + score;
    content.innerHTML = "";
    var initials = prompt ("Enter your initials");
//  if (localStorage.getItem('scoreArray')) {
//      var scoreArray = JSON.parse(window.localStorage.getItem('array name'));
//      var tempArray = [[initials, score]];
//      var newArray = scoreArray.concat(tempArray);
//  } else {
//      var newArray = [[initials, score]];
//  }
//  localStorage.setItem('scoreArray', JSON.stringify(newArray));
// 
}

function decrementTimer (amount) {
    timer = timer - amount;
    if (timer <= 0) {
        timer = 0;
        timerDisplay.innerText = timer;
        endQuiz ();
    } else {
        timerDisplay.innerText = timer;
        return;
    }
}

offerQuiz ();

