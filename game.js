let level = ['easy','medium','hard']
let subject = ['general', 'science', 'history', 'economics', 'math']
const question = document.getElementById('question');
const choices = Array.from(document.querySelectorAll('.choice-text'))
const scoreText = document.getElementById('score');

const soundRight = document.getElementById('right');
const soundWrong = document.getElementById('wrong');

const themeSong = document.getElementById('theme');

const scorePoints = 10;
const maxQuestions = 10;
let score = 0;

themeSong.play()

class Quiz {
    constructor (database) {
        this.currentQuestion = 0
        this.score = 0
        this.correctAnswer = ' '  
        this.database = [...questions]   
    }
    shuffle (){
        let ramdomIndex
        let currentIndex = questions.length

        while (currentIndex != 0) {
            ramdomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex -=1
            let backup = this.database [currentIndex]
            this.database [currentIndex] = this.database [ramdomIndex]
            this.database [ramdomIndex] = backup
            
        }
    }
    updateQuestion (){
        if (this.currentQuestion <= 15) {
            question.innerText = this.database[this.currentQuestion].question 
    } else {

    }
    
    }
    updateChoices (){
        choices[0].innerText = this.database[this.currentQuestion].answer1
        choices[1].innerText = this.database[this.currentQuestion].answer2
        choices[2].innerText = this.database[this.currentQuestion].answer3
        choices[3].innerText = this.database[this.currentQuestion].answer4
    }
    wrongOrRight (event){
        if (event.target.innerText == this.database[this.currentQuestion].correctAnswer){
            event.target.classList.add("bar-color-right")
            this.score += 10
            scoreText.innerText = this.score
            soundRight.play()
            setTimeout(() => {
                this.nextQuestion()
                this.updateQuestion()
                this.updateChoices()
                event.target.classList.remove("bar-color-right")
            }, 2500)
        } 
        else {
            event.target.classList.add("bar-color-wrong")
            scoreText.innerText = this.score
            soundWrong.play()
            setTimeout(() => {
                this.nextQuestion()
                this.updateQuestion()
                this.updateChoices()
                event.target.classList.remove("bar-color-wrong")
            }, 2500)
    }
}
    nextQuestion (){ 
        return this.currentQuestion +=1
        

    }
    timer (){ 
        setTimeout(function() {
            let answerTime
        })
    }

}



let quiz = new Quiz()
quiz.shuffle()
quiz.updateQuestion()
quiz.updateChoices()


document.addEventListener ('click', (event) => { //document para detectar o click addEventListener
if (event.target.classList.contains("choice-text")) {
    quiz.wrongOrRight(event)
}
})