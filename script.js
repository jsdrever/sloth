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

// todo - start btn

// todo - collect score
var score = 0
var correct = 0
let correctAns = true

if(userChoice() === correctAns); {
    correct++
}


//todo - make a quiz
// incorrect / correct prompts
let questions = [
    {
        question: "what is 2 + 2?",
        choice1: "2",
        choice2: "4",
        choice3: "5",
        choice4: "8",
        answer: 2,
    },
    {
        question: "what is my dogs name?",
        choice1: "Riley",
        choice2: "Dogmeat",
        choice3: "Pookie",
        choice4: "Cuddle-Bug",
        answer: 1,
    },
    {
        question: "Is my dog a good boy?",
        choice1: "nah, he's fat",
        choice2: "ew, I don't like him",
        choice3: "He's ok, I guess...",
        choice4: "OMG! Yes. I love him.",
        answer: 4,
    },
    {
        question: "what this educational?",
        choice1: "91.412 million miles",
        choice2: "7.837 billion as of 2021",
        choice3: "It was educational for you to build this and that's what really mattered",
        choice4: "The Triassic Period",
        answer: 3,
    },
]
// todo - end game after timer is out or no questions remain

// todo - save initials and score
