questions.map

let level = ['easy','medium','hard']
let subject = ['general', 'science', 'history', 'economics', 'math']
const question = document.getElementsById('question');
const choices = Array.from(document.querySelectorAll('.choice-text'))
const progressText = document.getElementsById('#progessText');
const scoreText = document.getElementsById('#score');
const progressBarFull = document.getElementsById('#progressBarFull');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let jump = 3;

const scorePoints = 10;
const maxQuestions = 10;

class Quiz {
    constructor () {
        
    }
}

/*// TENTATIVA 01

questions.map

let level = ['easy','medium','hard']
let subject = ['general', 'science', 'history', 'economics', 'math']
const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'))
const progressText = document.querySelector('#progessText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

const scorePoints = 10;
const maxQuestions = 10;
startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions];
    getNewQuestion();
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > maxQuestions) {
        localStorage.setItem('mostRecentScore', score);

        return window.location.assign('/end.html');
    }

    questionCounter++;
    progressText.innerText = `Questão ${questionCounter} de ${maxQuestions}`;
    progressBarFull.style.width = `${(questionCounter/maxQuestions) * 100}%`;

    const questionsIndex = Math.floor(Math.ramdom() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion; 

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion
    })
availableQuestions.splice(questionsIndex, 1);

acceptingAnswers = true;
}

choices.forEach(choice =>
    choice.addEventListener('click', i => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = i.target
        const selectedAnswer = selectedChoice.dataset('number');

        let classToApply = selectedAnswer == currentQuestion.asnwer ? 'correct' : 'incorrect'

        if (classToApply === 'correct') {
            incrementScore(scorePoints);
        }

        selectedChoice.parentElement.classList.add(classToApply);
        
        setTimeout(() => { 
        selectedChoice.parentElement.classList.remove(classToApply)
        getNewQuestion()
        }, 1000)
    }))

incrementScore = num => {
    score += num
    scoreText.innerText = score
}

startGame()

*/
