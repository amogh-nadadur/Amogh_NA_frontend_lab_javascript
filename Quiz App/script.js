var questions = [
    new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS","Django"] , "CSS"),
    new Question("Which is not a JavaScript Framework?", ["Python Script", "JQuery", "CSS","Django"] , "Django"),
    new Question("Which is used for Connect To Database?", ["PHP", "JQuery", "HTML","Django"] , "PHP"),
    new Question("Which is not a JavaScript Framework?", ["Python Script", "JQuery", "CSS","Django"] , "Django"),
    new Question("Which is not a JavaScript Framework?", ["Python Script", "JQuery", "CSS","Django"] , "Django")
    
]

function Question(question,options,crtanswer){
    this.question = question;
    this.options = options;
    this.crtanswer = crtanswer;
}

function Quiz(questions){
    this.questions = questions;
    this.score = 0;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionByIndex = function(){
    return this.questions[this.questionIndex];
};

Quiz.prototype.correctAnswer = function(userChoice){
    if (userChoice === this.getQuestionByIndex().crtanswer){
        this.score++;
    }
    this.questionIndex++;
};

Quiz.prototype.isQuizEnded = function(){
    return quiz.questionIndex === quiz.questions.length;
};

var quiz = new Quiz(questions);

function loadpage(){
    if(quiz.isQuizEnded()){
        showScore();
    }
    else{
        var questionElement = document.getElementById("question");
        questionElement.innerText = quiz.getQuestionByIndex().question;

        showProgress();
        var choices = quiz.getQuestionByIndex().options;
        for(let i = 0; choices.length;i++){
            var choiceElement = document.getElementById("choice"+i);
            choiceElement.innerHTML = choices[i];
            handleChoiceButton( choices[i] , "btn"+i);
        }
        
    }
}

loadpage();


function handleChoiceButton(choice,id){
    var button = document.getElementById(id);
    button.onclick = function(){
        quiz.correctAnswer(choice);
        loadpage();
    }
}

function showScore(){
    let x = "<h1>Results</h1>";
    x += "<h2> Score is: " + quiz.score + "</h2>";

    let perc = (quiz.score / quiz.questions.length) * 100;
    let y = "<h2> Percentage is: " + perc + "%" + "</h2>";

    document.getElementById("quiz").innerHTML = x + y;
}


function showProgress(){
    let progress = quiz.questionIndex + 1;
    document.getElementById("progress").innerHTML = "Question " + progress + " of " + quiz.questions.length;
}