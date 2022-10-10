const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
console.log(choices);

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
  {
    question: "What is your name?",
    choice1: "Varun Dev",
    choice2: "Indra Dev",
    choice3: "Ganesh Yadav",
    choice4: "Himanshu Gola",
    answer: 4
  },
  {
    question: "What is your age?",
    choice1: "22",
    choice2: "21",
    choice3: "23",
    choice4: "20",
    answer: 2
  },
  {
    question: "What is your birth month?",
    choice1: "july",
    choice2: "october",
    choice3: "august",
    choice4: "march",
    answer: 3
  },
  {
    question: "What are you persuing right now?",
    choice1: "Graduation",
    choice2: "Schooling",
    choice3: "Post Graduation",
    choice4: "Employed",
    answer: 1
  }
];

//  constants 

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 4;

startGame = ()=> {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
};

getNewQuestion = () => {
    if(availableQuestions.length == 0 || questionCounter>= MAX_QUESTIONS){
        // go to end page
        return window.location.assign('/end.html');
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;
    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });
    availableQuestions.splice(questionIndex,1);
    acceptingAnswers = true;
};
choices.forEach(choice=> {
    choice.addEventListener( "click", e => {
        if (!acceptingAnswers) returns;

        acceptingAnswers = false ;
        const selectedChoice  = e.target;
        const selectedAnswers = selectedChoice.dataset["number"];
        console.log(selectedAnswers);
        getNewQuestion();
    });
});

console.log(questions.length);
startGame();
