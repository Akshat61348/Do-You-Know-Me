var readlineSync = require('readline-sync');
var score = 0;
var userName = readlineSync.question("What is your name? ");


console.log("Welcome " + userName + " to DO YOU KNOW AKSHAT?");

//play function
function play(question,answer) {
  var userAnswer = readlineSync.question(question);

  if  (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("right!");
    score = score + 1;
  } else {
    console.log("wrong!");
  }
  console.log("current score: ",score);
  console.log("------------");
}

//array of objects
var questions = [{
  question: "Where do I Live? ",
  answer: "Aligarh"
}, {
  question: "Which brand's Laptop I'm Using, Hp or Dell? ",
  answer: "Hp"
}, {
  question: "I Like Tea or Coffee? ",
  answer: "Tea"
}, {
  question: "What course im pursuing?, B.tech or BCA  ",
  answer: "B.tech"
}];

//loop
for (var i = 0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question,
  currentQuestion.answer)
}

console.log("GREATTTT!!! YOU SCORED", score)