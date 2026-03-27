// "Implemented quiz game logic with question rendering, answer selection, and score tracking"




const question = [
    {
        question:"Which is larget animal in the world?",
        answers:[
            {text:"Lion", correct:false},
            {text:"Elephant", correct:false},
            {text: "Blue whale",correct:true},
            {text:"Shark",correct:false},
         ]
    },
    {
        question:"Which is the smallest country in the world?",
        answers:[
            {text:"Vatican City", correct:true},
            {text:"France", correct:false},
            {text:"Spain", correct:false},
            {text:"Germany", correct:false},
        ]
    },
    {
        question:"Which is the largest planet in our solar system?",
        answers:[
            {text:"Earth", correct:false},
            {text:"Saturn", correct:false},
            {text:"Jupiter", correct:true},
            {text:"Mars", correct:false},

        ]
    },
    {
        question:"Which is the largest city in the world?",
        answers:[
            {text:"Tokyo", correct:true},
            {text:"New York", correct:false},
            {text:"Dubai",correct:false},
            {text:"Mumbai", correct:false},
        ]

    },
    {
        question:"Which is the largest river in the world?",
        answers:[
            {text:"Nile", correct:true},
            {text:"Amazon", correct:false},
            {text:"Mississippi", correct:false},
            {text:"Yangtze", correct:false},
        ]
    }
];

const questionElement =  document.getElementById("question");
const answerButtons = document.getElementById("answers-buttons");
const nextButton = document.getElementById("next-btn");

let currenQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currenQuestionIndex =0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = question[currenQuestionIndex];
    let questionNo = currenQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}  

function resetState(){
    nextButton.style.display = "none";
    answerButtons.innerHTML = "";

}

function selectAnswer(e){
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct==="true";
    if(correct){
        selectedButton.classList.add("correct");
        score++;

    }else{
    selectedButton.classList.add("incorrect");
    }     
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct ==="true"){
            button.classList.add("correct");

        }
        button.disabled = "true";
    })  ;
    nextButton.style.display = "block"
}

function showNextQuestion(){
    currenQuestionIndex++;
    if(currenQuestionIndex >= question.length){
        questionElement.innerHTML = "Quiz finished! Your score is " + score + "/" + question.length;
        answerButtons.innerHTML = "";
        nextButton.style.display = "none";
    } else {
        showQuestion();
    }
}

nextButton.addEventListener("click", showNextQuestion);

startQuiz();