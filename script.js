// let question = {
//     title: 'gato',
//     alternatives: ['dog', 'cat', 'bird', 'fish'],
//     correctAnswer: 1
//   };
  
//   function showQuestion(q) {
    
//     let titleDiv = document.getElementById("title");
//     titleDiv.textContent = q.title;
    
   
//     let alts = document.querySelectorAll('.alternative');
    
    
//     alts.forEach(function(element, index){
      
//       element.textContent = q.alternatives[index];
      
//       element.addEventListener('click', function(){
//         if (q.correctAnswer == index) {
//           console.log('Correct Answer!');
//         } else {
//           console.log('Wrong Answer!');
//         }
//       });
//     });
//   }
//   showQuestion(question);

//! this is lucky try number 4
// todo - make a timer
//timer function @

var timeEl = document.querySelector(".time");

// Selects element by id
// var mainEl = document.getElementById("main");

var secondsLeft = 100;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
     
    //   sendMessage();
    }

  }, 1000);
}

setTime();


// todo - start btn
var generateQuiz = document.querySelector('.btn')
generateQuiz.addEventListener('click', fucntion() {
    getQuestion();

    if(correct)

    for (var i = 0; i < testLength; i++) {
        var randomItem = randomCharacter(characterTypes)
        password = password + randomItem
    }
    getScore();

});
// todo - collect score
// var score = 0
// var correct = 0
// let correctAns = true

// if(userChoice() === correctAns); {
//     correct++
// }


//todo - make a quiz
// incorrect / correct prompts
// var questions = [
//     {
//         question: "what is 2 + 2?",
//         choice1: "2",
//         choice2: "4",
//         choice3: "5",
//         choice4: "8",
//         answer: 2,
//     },
//     {
//         question: "what is my dogs name?",
//         choice1: "Riley",
//         choice2: "Dogmeat",
//         choice3: "Pookie",
//         choice4: "Cuddle-Bug",
//         answer: 1,
//     },
//     {
//         question: "Is my dog a good boy?",
//         choice1: "nah, he's fat",
//         choice2: "ew, I don't like him",
//         choice3: "He's ok, I guess...",
//         choice4: "OMG! Yes. I love him.",
//         answer: 4,
//     },
//     {
//         question: "what this educational?",
//         choice1: "91.412 million miles",
//         choice2: "7.837 billion as of 2021",
//         choice3: "It was educational for you to build this and that's what really mattered",
//         choice4: "The Triassic Period",
//         answer: 3,
//     },
// ]
// todo - end game after timer is out or no questions remain

// todo - save initials and score


// var counter = document.querySelector("#counter");
// var addButton = document.querySelector("#add");
// var subtractButton = document.querySelector("#subtract");

// var count = localStorage.getItem("count");

// counter.textContent = count;

// addButton.addEventListener("click", function() {
//   if (count < 24) {
//     count++;
//     counter.textContent = count;
//     localStorage.setItem("count", count);
//   }
// });