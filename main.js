
// QuerySelectors
let gameBoard = document.querySelector('#gameBoard');
let submitAnswer = document.querySelector('.btn');
let question = document.querySelector('#question');
let answer = document.querySelector('#answer');
let scoreBoard = document.querySelector('#score');
let q101 = document.querySelector("#cat-1-100")


// Question groups
let group100 = [];
let group200 = [];
let group400 = [];
let group600 = [];
let group800 = [];


// Category Groups
let cat1 = [];
let cat2 = [];
let cat3 = [];
let cat4 = [];
let cat5 = [];


// Question, answer and score
let currentQuestion = "";
let score = 0;
let totalScore = 0;


// Read the questions and set them in their own groups

let readJeopardyData = async () => {
    let rawJeopardy = await fetch('jeopardy.json');
    let data = await rawJeopardy.json();

    // Grouping by value
    let groupData = _.groupBy(data, 'value');
    group100 = groupData.$100;
    group200 = groupData.$200;
    group400 = groupData.$400;
    group600 = groupData.$600;
    group800 = groupData.$800;

    // Grouping by category
    let categories = _.groupBy(data, 'category');
    cat1 = categories;
    cat2 = categories;
    cat3 = categories;
    cat4 = categories;
    cat5 = categories;
    
}
readJeopardyData();


// Get a random question
    // the variable is in each question group below

let randQ = (totalQuestions) => {
    let res = (Math.ceil(Math.random() * totalQuestions));
    return res;
}


// Establish the click for each element on the board
    // Group into different values 
    // Keep track of the score value
        // Need to figure out a way to get the score updated

gameBoard.addEventListener('click', function (event){

    let q100 = 0;
    q100 = randQ(group100.length);
    if (event.target.innerText === '$100'){
        question.innerText = group100[q100].question;
        score = 100;
        currentQuestion = group100[q100];
    }

    let q200 = 0;
    q200 = randQ(group200.length);
    if (event.target.innerText === '$200'){
        question.innerText = group200[q200].question;
        score = 200;
        currentQuestion = group200[q200];
    }

    let q400 = 0;
    q400 = randQ(group400.length);
    if (event.target.innerText === '$400'){
        question.innerText = group400[q400].question;
        score = 400;
        currentQuestion = group400[q400];
    }

    let q600 = 0;
    q600 = randQ(group600.length);
    if (event.target.innerText === '$600'){
        question.innerText = group600[q600].question;
        score = 600;
        currentQuestion = group600[q600];
    }

    let q800 = 0;
    q800 = randQ(group800.length);
    if (event.target.innerText === '$800'){
        question.innerText = group800[q800].question;
        score = 800;
        currentQuestion = group800[q800];
    }
})


// Button setup and answer space.
    // Still need to work on the scoring.

submitAnswer.addEventListener('click', function(){
    if (answer.value === currentQuestion.answer){
        answer.value = ''; 
        question.value = 'The Question!';
        alert(`Correct`);
        if (score === 100){
            totalScore += score;
        } else if (score == 200){
            totalScore += score;
        } else if (score === 400){
            totalScore += score;
        } else if (score === 600){
            totalScore += score;
        } else if (score === 800){
            totalScore += score
        }
        scoreBoard.innerText = `Your Score: $${totalScore}`; 
    } else if (answer.value !== currentQuestion.answer) {
        answer.value = '';
        question.innerText = 'The Question!';
        alert(`Incorrect:
The correct answer is: ${currentQuestion.answer}.`)

    }
})


