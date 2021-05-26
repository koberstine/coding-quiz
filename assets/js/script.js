
var heading = document.getElementById("heading");
var content = document.getElementById("content");
var buttonArea = document.getElementById("buttonArea");
var button = document.createElement("button");
var counter = 0;
var timer = 180;
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
    }
];

function offerQuiz () {
    heading.innerText = "Coding Quiz Challenge";

    content.innerText = "Try to answer the following code related questions within the time limit. Answer carefully because incorrect answers will decrease your remaining time by 10 seconds.";

    button.textContent = "Start";
    buttonArea.appendChild(button);
    button.onClick = quizMain();
};

function quizMain () {
    questionPrep();

};

function questionPrep() {
    if (counter < question.length) {
        counter++;
        var buttons = buttonArea.getElementsByTagName('button');
        if (buttons) {
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].remove();
            }
        };

    renderQuestion ();
    } else {
        console.log("end");
    };
};

function renderQuestion () {

    heading.innerText = "Question " + counter;
    content.innerText = question[counter].questionText;
    for (var j=0; j<question[counter].answerList.length; j++) {
        button.textContent = question[counter].answerList[j];
        button.setAttribute("id", j);
        buttonArea.appendChild(button);
        button.addEventListener("click", function() {checkAnswer(j)});
        };
    }
    


function checkAnswer(response) {
    console.log(response + " was clicked");
    questionPrep();
}

offerQuiz ();

