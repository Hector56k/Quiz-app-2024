const quizData = [{
    question: "Where do I go when I need to pee?",
    a: "Bathroom",
    b: "Restroom",
    c: "PP Palace",
    d: "PP Dungeon",
    correct: "c"
},{
    question: "What do you call it when I ask for some of your food?",
    a: "Treat Troll",
    b: "Fanum Tax",
    c: "Goodie Tax",
    d: "Boyfriend Goblin",
    correct: "b"
}, {
    question: "What do I order from the coffee shop?",
    a: "Iced matcha skibidi",
    b: "Iced caramel skibidi toilet latte",
    c: "Iced caramel skibidi latte",
    d: "Black coffee panic attack",
    correct: "b"
},{
    question:  "What do you say when my fit is on point?",
    a: "Wowza You Look Like A Snackky",
    b: "*YOU START HITTING THE GRIDDY*",
    c: "You Ate!",
    d: "Dank Fit Playa!",
    correct: "c"
},{
    question: "How much do you love me?",
    a: "10000",
    b: "1 Million",
    c: "Infinity",
    d: "Sigma Billion",
    correct: "d"
}];

const correctSound = new Audio('sounds/holy moly sound effect youtubers use for video editing.mp3');
const wrongSound = new Audio('/sounds/Vine boom sound effect.mp3');

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const answerEls = document.querySelectorAll('.answer');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEls => answerEls.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    
    if (answer) {
        if (currentQuiz < quizData.length) {
            if (answer === quizData[currentQuiz].correct) {
                score++;
                correctSound.play(); // Play correct answer sound
            } else {
                wrongSound.play(); // Play wrong answer sound
            }

            currentQuiz++;
            
            if (currentQuiz < quizData.length) {
                loadQuiz(); // Load next question
            } else {
                // End of quiz, show results
                quiz.innerHTML = `
                    <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                    <button onclick="location.reload()">Reload</button>
                `;
            }
        }
    }
});
