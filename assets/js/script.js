var heading = document.createElement("h1");
var content = document.createElement("p");
var btn = document.createElement("button");


function quizOffer () {
    heading.innerText = "Coding Quiz Challenge";
    document.body.appendChild(heading); 

    content.innerText = "Try to answer the following coding related questions within the time limit. Answer carefully because incorrect responses will decrease the remaining time by 10 seconds";
    document.body.appendChild(content);
    
    btn.innerText = "Start";
    document.body.appendChild(btn);
}

quizOffer ();