var readlineSync = require('readline-sync');

var score = 0;

var userName = readlineSync.question("May I have your Name?");

console.log("Welcome " + userName + ", let's see how well you know me, buddy.");


var questions = [{
    question: "Am I an Introvert? ",
    answer: "yes"
}, {
    question: "what is my favorite movie franchise?",
    answer: "marvel"
}, {
    question: "Where do i live? ",
    answer: "marlanhalli"
}, {
    question: "what day is celebrated on 'May the 4th'? ",
    answer: "starwars day"
}, {
    question: "who is creator of spider-man comics? ",
    answer: "stan lee"
}];

function play(question, answer) {
    var input = readlineSync.question(question)
    if (input === answer) {
        console.log("You were Right!")
        score++
    } else {
        console.log("you were Wrong :( ")
    } console.log("your score is now " + score)
    console.log("------------------------------")
};

for (var i = 0; i < questions.length; i++) {
    currentQuestion = questions[i];
    play(currentQuestion.question,
        currentQuestion.answer)
};

if (score <= (questions.length / 2)) {
    console.log("you have scored " + score + " shame on you, I expected better. ")
} else { console.log("yippe! you have scored " + score + " Congratulations!, Bestie.") }

console.log("here are the high score. ")
console.log("------------------------------")
console.log("1.NA")
console.log("2.NA")
console.log("------------------------------")
console.log("P.s: if you, by any chance, beat these scores ping me so that i can update it and give you a certificate.")