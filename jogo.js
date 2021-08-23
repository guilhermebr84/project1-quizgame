const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'))
const progressText = document.querySelector('#progessText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {};
