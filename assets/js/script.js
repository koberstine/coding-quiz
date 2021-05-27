
var heading = document.getElementById("heading");
var content = document.getElementById("content");
var buttonArea = document.getElementById("buttonArea");
var feedback = document.getElementById("feedback");
var timerDisplay = document.getElementById("timerDisplay");
var counter = 0;
var timer = 0;
var score = 0;
var myVar = 0;
// questions in an array of objects
var question = [ 
    {
        "questionText" : "This question intentionally left blank",
        "correctAnswer" : 1,
        "answerList" : [
            "answer 1"
        ]
    },
    {
        "questionText" : "What is the correct syntax to close the <title> element?",
        "correctAnswer" : 0,
        "answerList" : [
            "</title>",
            "<!title>",
            "<?title>",
            "<endtitle>"
        ]
    },
    {   
        "questionText" : "What is the purpose of the <body> element?",
        "correctAnswer" : 1,
        "answerList" : [
            "The body element connects to the head element",
            "This is where all of the webpage's content will go",
            "The body element will remain an empty placeholder"
        ]
    },
    {
        "questionText" : "What is the difference between <h1> and <h2>?",
        "correctAnswer" : 2,
        "answerList" : [
            "An <h2> is visually larger",
            "There is no difference",
            "An <h1> is the more important heading and is visually larger"
        ]
    },
    {
        "questionText" : "How do you add a message to a git commit?",
        "correctAnswer" : 1,
        "answerList" : [
            "Upload and attach a file to git commit",
            "Add -m \"message\" at the end of git commit",
            "Both A & B",
            "None of the above"
        ]
    },
    {
        "questionText" : "What's the first thing you should do before writing a single line of HTML code?",
        "correctAnswer" : 0,
        "answerList" : [
            "Sketch out what the webpage should look like",
            "Write all of your CSS code",
            "Download the latest version of VS Code",
            "Publish your webpage on GitHub"
        ]
    },
    {
        "questionText" : "On a technical level, what's the difference between a <section> element and a <div>?",
        "correctAnswer" : 0,
        "answerList" : [
            "There is no difference",
            "A <div> element takes up more width on the page",
            "A <section> element has bold text by default",
            "A <section> element takes up more height on the page"
        ]
    },
    {
        "questionText" : "How do you leave hidden comments in HTML code?",
        "correctAnswer" : 3,
        "answerList" : [
            "/* */",
            "<!-- -->",
            "{{ }}",
            "//"
        ]
    },
    {
        "questionText" : "How do you create a flexbox?",
        "correctAnswer" : 2,
        "answerList" : [
            "display: flex;",
            "display: flexbox;",
            "display: box;"
        ]
    },
    {
        "questionText" : "By default, in which direction does a flexbox lay out its items?",
        "correctAnswer" : 0,
        "answerList" : [
            "A row (horizontal), with all of the child elements laid out side by side.",
            "A column (vertical), with all of the child elements laid out on top of one another."
        ]
    },
    {
        "questionText" : "What do media queries allow us to do?",
        "correctAnswer" : 2,
        "answerList" : [
            "Play videos on our page",
            "Create responsive designs",
            "Change CSS at different browser widths"
        ]
    },
    {
        "questionText" : "Which one of these is NOT a valid media type for media queries?",
        "correctAnswer" : 3,
        "answerList" : [
            "all",
            "screen",
            "speech",
            "tablet"
        ]
    },
    {
        "questionText" : "The following media query uses the correct syntax: @media screen and (max-width: 768px) and (orientation: portrait) { ... }",
        "correctAnswer" : 0,
        "answerList" : [
            "True",
            "False"
        ]
    },
    {
        "questionText" : "Given the declaration box-shadow: 1px 2px 3px blue;, what does each value mean?",
        "correctAnswer" : 2,
        "answerList" : [
            "Blur radius, horizontal offset, vertical offset, and color.",
            "Blur radius, vertical offset, horizontal offset, and color.",
            "Horizontal offset, vertical offset, blur radius, and color.",
            "Vertical offset, horizontal offset, blur radius, and color."
        ]
    },
    {
        "questionText" : "Which is an example of a vendor prefix?",
        "correctAnswer" : 0,
        "answerList" : [
            "-webkit-",
            "::before",
            "position: sticky",
            "#024e76"
        ]
    },
    {
        "questionText" : "Which of these values is NOT considered false?",
        "correctAnswer" : 1,
        "answerList" : [
            "0",
            "\"0\"",
            "null",
            "\"\""
        ]
    },
    {
        "questionText" : "Which statement correctly stores data into the Web Storage API?",
        "correctAnswer" : 1,
        "answerList" : [
            "localStorage.getItem(\"lunch\", \"sandwich\");",
            "localStorage.setItem(\"lunch\", \"sandwich\");",
            "getItem.localStorage.(\"lunch\", \"sandwich\");",
            "setItem.localStorage(\"lunch\", \"sandwich\");"
        ]
    },
    {
        "questionText" : "Which of the following is NOT a reason to validate a user's responses?",
        "correctAnswer" : 2,
        "answerList" : [
            "Offers the user an opportunity to enter a correct response",
            "Reduces bogus answers getting stored in the database",
            "Improves the user experience",
            "Increases the overall quality of the user data"
        ]
    },
    {
        "questionText" : "Which statement does NOT guarantee that number will be non-negative?",
        "correctAnswer" : 3,
        "answerList" : [
            "number = Math.max(1, highScore);",
            "if (number < 0) { number = 1; }",
            "number = Math.random();",
            "number = Math.min(10, highScore);"
        ]
    },
    {
        "questionText" : "What is a pseudo-class?",
        "correctAnswer" : 3,
        "answerList" : [
            "A CSS rule that contains no declarations",
            "A CSS declaration that hides the element",
            "An element that has more than one class",
            "A CSS keyword to target an element's state"
        ]
    },
    {
        "questionText" : "What is an example of a pseudo-element?",
        "correctAnswer" : 3,
        "answerList" : [
            "::before",
            "::after",
            "::first-letter",
            "All of the above"
        ]
    },
    {
        "questionText" : "What does the z-index property do?",
        "correctAnswer" : 1,
        "answerList" : [
            "Removes an element from the DOM",
            "Changes the stacking order of elements",
            "Changes the opacity of an element",
            "Forces an element to be positioned relatively"
        ]
    },
    {
        "questionText" : "What does event.preventDefault() do?",
        "correctAnswer" : 0,
        "answerList" : [
            "It stops the browser from reloading the page upon a form submission",
            "It stops the browser from allowing the form submission event to occur"
        ]
    },
    {
        "questionText" : "The browser event submit allows us to do the following:",
        "correctAnswer" : 2,
        "answerList" : [
            "Submit a form using a button",
            "Submit a form using the Enter key",
            "Submit a form using both a button and the Enter key"
        ]
    },
    {
        "questionText" : "In the DOM’s event object, what does its target property refer to?",
        "correctAnswer" : 0,
        "answerList" : [
            "It refers to the HTML element that was interacted with to dispatch the event",
            "It refers to the HTML element we want to affect as a result of our dispatched event"
        ]
    },
    {
        "questionText" : "How do we use JavaScript to get the information entered into a form’s input field?",
        "correctAnswer" : 0,
        "answerList" : [
            "We can select the form’s input element and use the value property to read its data",
            "We can select the form itself and use the value property to read all of its data.",
            "We can select the form’s input element and use the textContent or innerHTML properties to read its data"
        ]
    }
];


// starting point, also clears HTML for quiz restart
function offerQuiz () {
    feedback.innerHTML = "";
    buttonArea.innerHTML = "";
    timerDisplay.innerHTML = "";
    heading.innerText = "Coding Quiz Challenge";
    content.innerText = "Try to answer the following code related questions within the time limit. Answer carefully because incorrect answers will decrease your remaining time by 10 seconds.";
    var button = document.createElement("button");
    button.textContent = "Start";
    buttonArea.appendChild(button);
    button.addEventListener("click", quizMain);
};

// starts timer, resets variables for quiz restart
function quizMain () {
    timer = 180;
    score = 0;
    counter = 0;
    timerDisplay.innerText = timer;
    myVar = setInterval(decrementTimer, 1000, 1);
    questionPrep();
};

// checks to see if there are more questions
function questionPrep() {
    counter++;
    if (counter < question.length) {
        buttonArea.innerHTML="";
        renderQuestion ();
    } else {
        endQuiz();
    };
};

// displays question and places eventListener on each button
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

// add to score or decrement timer 
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

// allow user to enter initials and save to local storage
function endQuiz () {
    clearInterval (myVar);
    timerDisplay.innerHTML = "";
    buttonArea.innerHTML = "";
    feedback.innerHTML = "";
    heading.innerText = "Your score: " + score;
    content.innerHTML = "";
    var initials = prompt ("Enter your initials");
    if (!initials || initials == "") {initials = " ";}; 
    if (localStorage.getItem('scoreArray')) {
        var scoreArray = JSON.parse(window.localStorage.getItem('scoreArray'));
        var tempArray = [[score, initials]];
        var newArray = scoreArray.concat(tempArray);
    } else {
        var newArray = [[score, initials]];
    }
    localStorage.setItem('scoreArray', JSON.stringify(newArray));
    var scoreList = document.createElement("ul")
    feedback.appendChild(scoreList);
    for (var i=0; i<newArray.length; i++){
        var scoreEntry = document.createElement("li")
        scoreEntry.innerHTML = newArray[i][0] + " " + newArray[i][1];
        scoreList.appendChild(scoreEntry); 
    }
    
    // offer chance to restart quiz
    content.innerText = "Do you want to try again?"
    var startButton = document.createElement("button");
    startButton.textContent = "Restart";
    buttonArea.appendChild(startButton);
    startButton.addEventListener("click", offerQuiz);
    var clearButton = document.createElement("button");
    
    //allow user to clear localStorage
    clearButton.textContent = "Clear Scores";
    buttonArea.appendChild(clearButton);
    clearButton.addEventListener("click", clearScores);
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

function clearScores () {
    localStorage.clear();
    feedback.innerHTML = "";
}

offerQuiz ();

