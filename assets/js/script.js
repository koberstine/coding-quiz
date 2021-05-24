
var heading = document.getElementById("heading");
var content = document.getElementById("content");
var buttonArea = document.getElementById("buttonArea");
var counter = 0;
var question = [ 
    {
        "questionText" : "This is a blank question",
        "correctAnswer" : 1,
        "answerList" : [
            "answer 1"
        ]
    },
    {
        "questionText" : "This is question 1",
        "correctAnswer" : 1,
        "answerList" : [
            "answer 1",
            "answer 2",
            "answer 3",
            "answer 4"
        ]
    },
    {   
        "questionText" : "This is question 2",
        "correctAnswer" : 1,
        "answerList" : [
            "answer 1",
            "answer 2"
        ]
    },
    {
        "questionText" : "This is question 3",
        "correctAnswer" : 1,
        "answerList" : [
            "answer 1",
            "answer 2",
            "answer 3",
            "answer 4"
        ]
    }
];

function offerQuiz () {
    heading.innerText = "Coding Quiz Challenge";
    document.body.appendChild(heading); 

    content.innerText = "Try to answer the following code related questions within the time limit. Answer carefully because incorrect answers will decrease your remaining time by 10 seconds.";
    document.body.appendChild(content);

    var button = document.createElement("button");
    button.textContent = "Start";
    buttonArea.appendChild(button);
    button.addEventListener("click", quizMain)
};

function quizMain () {
    
   do  {
    counter = counter +1;
    //remove previous buttons
    document.body.removeChild(buttonArea);

    heading.innerText = "Question " + counter;
    document.body.appendChild(heading); 

    content.innerText = question[counter].questionText;
    document.body.appendChild(content);
    document.body.appendChild(buttonArea);

    for ( i =0; i < question[counter].answerList.length; i++) {
        var button = document.createElement("button");
        button.textContent = question[counter].answerList[i];
        buttonArea.appendChild(button);
        button.addEventListener("click", checkAnswer)
    }

    } while (counter <= question.length);

    console.log("finished");
};

function checkAnswer () {
    console.log("click")
    return;
};

offerQuiz ();

