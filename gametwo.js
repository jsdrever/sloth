var msgDiv = document.querySelector("#msg");
function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
  }

var questionArr = {
    title: 'gato?',
    alternatives: ['dog', 'cat', 'bird', 'fish'],
    correctAnswer: 1
  };
  
  function showQuestion(q) {
    
    let titleDiv = document.getElementById("title");
    titleDiv.textContent = q.title;
    
   
    let alts = document.querySelectorAll('.alternative');
    
    
    alts.forEach(function(element, index){
      
      element.textContent = q.alternatives[index];
      
      element.addEventListener('click', function(){
        if (q.correctAnswer == index) {
          console.log('Correct Answer!');
        } else {
            displayMessage('wrong answer');
          console.log('Wrong Answer!');
        }
      });
    });
  }
  showQuestion(questionArr);
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
// var buttonEl = document.querySelector('#btn');
// btn.addEventListener('click', showQuestion(question));
// console.log(question);