var readlineSync = require("readline-sync");

var score = 0;
var userName = readlineSync.question(" Whats your name? \n");
console.log("Welcome " + userName + " to HOW WELL DO YOU KNOW RAM...!, Can type quit to quiz quiz 😶\n");

function play(question, answer) {

  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Right");
    score = score + 1;
  }
  else {
    console.log("Wrong");
  }

  console.log("Your score is : " + score);
  console.log("--------------------------------------\n--------------------------------------");
}

//array of objects.
var questions = [
  {
    question: "1. where do i live?\nA: Finland\nB: Denmark\nC: Iceland\nD: Switzerland\n",
    answer: "D"
  },
  {
    question: "2. Do I prefer – A:sport  B:art?\n",
    answer: "B"
  },
  {
    question: "3. Do I cook well?– A:yes B:no?\n",
    answer: "B"
  },
  {
    question: "4. A: R >< M  B: R == M\n",
    answer: "B"
  },
  {
    question: "5. Can I swim well? -  A:yes B:no?\n",
    answer: "B"
  },
  {
    question: "6. A:True or B:False – I’ve never been abroad\n",
    answer: "A"
  },
  {
    question: "7. Skydiving –  A:yes B:no?\n",
    answer: "B"
  }
];

//loop

for (var i = 0; i < questions.length; i++) {
  var currentQues = questions[i];
  play(currentQues.question, currentQues.answer);
  if (result === "quit") {
    console.log("Ciao 🖐 ")
    break;
  }

  console.log("Your final score is ${score}. Hope you enjoyed 🖐");
}

