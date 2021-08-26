let level = ['easy','medium','hard']
let subject = ['general', 'science', 'history', 'economics', 'math']
const question = document.getElementById('question');
const choices = Array.from(document.querySelectorAll('.choice-text'))
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');

/*let currentQuestion = 0;
let acceptingAnswers = true;

let questionCounter = 0;
let allQuestions = []; // calling availableQuestions as allQuestions*/

const scorePoints = 10;
const maxQuestions = 10;
let score = 0;


class Quiz {
    constructor () {
        this.currentQuestion = 0
        this.score = 0
        this.correctAnswer = correctAnswer     
    }
    updateQuestion (){
        question.innerText = questions[this.currentQuestion].question // acessando o objeto 
    }
    updateChoices (){
       /* for (i = 0; i < choices.length; i++){
            choices.innerText = questions[this.currentQuestion].answer
        }*/
        choices[0].innerText = questions[this.currentQuestion].answer1
        choices[1].innerText = questions[this.currentQuestion].answer2
        choices[2].innerText = questions[this.currentQuestion].answer3
        choices[3].innerText = questions[this.currentQuestion].answer4
    }
    wrongOrRight (event){
        if (event.target.firstChild.innerText == questions[this.currentQuestion].correctAnswer){
            return event.target.classList.add("bar-color-right")
        } 
        else {
            return event.target.classList.add("bar-color-wrong")
    }
}
    nextQuestion (nextQuestion){ //proxima questao
        nextQuestion = currentQuestion +=1
        

    }
    timer (){ //temporizador
        setTimeout(function() {
            let 
        })
    }
    incDecScore (increaseScore) { //pontuação
        if (this.wrongOrRight() === true) {
            increaseScore = score +=1
        } 
        else {
            return score
        }
    }
    endGame (){ //condição de fim de jogo
        if (this.currentQuestion > 10) {
            
        }

    }
    
}

function startGame () {
let quiz = new Quiz
quiz.updateQuestion()
quiz.updateChoices()
}

startGame()

document.addEventListener ('click', (event) => { //document para detectar o click addEventListener
if (event.target.classList.contains("choice-container")) {
    quiz.wrongOrRight()
    quiz.nextQuestion()
}


})

function endGame () {
    let btnRestart = " ";
    if (score >= 90){
    score.textContent = 'Parabéns, ganhou bolsa na Ironhack!'
   
    }
    else if (score <= 89 && score >=55) {
    score.textContent = 'Muito bom... continue assim, mas não ganhou bolsa na Ironhack, quem sabe na próxima.'

    }
    else {
    score.textContent = 'Vc pode melhorar...'
   
    }
    btnRestart = document.createElement('button-restart');
    btnRestart.textContent = 'Iniciar novo jogo';
}2


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
