





let questions = [{
    question: 'gato?',
    alternatives: ['dog', 'cat', 'bird', 'fish'],
    correctAnswer: 1
},
        {
    question: "what is 2 + 2?",
    alternatives:["2", '4', '6', '7'], 
    correctAnswer: 2,
},
{
    question: "what is my dogs name?",
    alternatives: ["Riley","Dogmeat","Pookie","Cuddle-Bug"],
    correctAnswer: 1
},
{
    question: "Is my dog a good boy?",
    alternatives: ["nah, he's fat", "ew, I don't like him","He's ok, I guess...","OMG! Yes. I love him"],
    correctAnswer: 3

},

{
    question: "what this educational?",
    alternatives: ["91.412 million miles","7.837 billion as of 2021", "It was educational for you to build this and that's what really mattered","The Triassic Period"],
    correctAnswer: 3,
},
]

function showQuestion(q) {

    let titleDiv = document.getElementById("question");
    titleDiv.textContent = q.title;


    let alts = document.querySelectorAll('.alternative');


    alts.forEach(function (element, index) {

        element.textContent = q.alternatives[index];

        element.addEventListener('click', function () {
            if (q.correctAnswer == index) {
                console.log('Correct Answer!');
            } else {
                console.log('Wrong Answer!');
            }
        });
    });
}
showQuestion(questions);