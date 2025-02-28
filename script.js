document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
  });

let questionNumber = 0;
let score = 0;

const questions = [
    // Q1
    {id: 1, question: "How do you handle stressful situations?", 
        answers: [
            {id: 1, text: "Stay calm and find a logical solution.", weight: 4},
            {id: 2, text: "Get overwhelmed but push through.", weight: 3},
            {id: 3, text: "Seek support from friends or family.", weight: 2},
            {id: 4, text: "Procrastinate and hope for the best.", weight: 1}
        ]
    },
    // Q2
    {id: 2, question: "What is your ideal weekend plan?", 
        answers: [
            {id: 1, text: "Exploring a new city or going on an adventure.", weight: 4},
            {id: 2, text: "Staying in with a good book or TV show.", weight: 3},
            {id: 3, text: "Hanging out with friends at a café or bar.", weight: 2},
            {id: 4, text: "Working on a personal project or hobby.", weight: 1}
        ]
    },
    // Q3
    {id: 3, question: "How do you usually make decisions?", 
        answers: [
            {id: 1, text: "Based on logic and facts.", weight: 4},
            {id: 2, text: "By trusting my gut feeling.", weight: 3},
            {id: 3, text: "I ask for advice from others.", weight: 2},
            {id: 4, text: "I overthink until the last minute.", weight: 1}
        ]
    },
    
    // Q4
    {id: 4, question: "If you could have any superpower, which one would you choose?", 
        answers: [
            {id: 1, text: "Super intelligence.", weight: 4},
            {id: 2, text: "Invisibility.", weight: 3},
            {id: 3, text: "Time travel.", weight: 2},
            {id: 4, text: "Mind reading.", weight: 1}
        ]
    },

    // Q5
    {id: 5, question: "What motivates you the most?", 
        answers: [
            {id: 1, text: "Achieving personal success.", weight: 4},
            {id: 2, text: "Helping others and making a difference.", weight: 3},
            {id: 3, text: "Seeking new experiences and excitement.", weight: 2},
            {id: 4, text: "Finding peace and balance in life.", weight: 1}
        ]
    },

    // Q6
    {id: 4, question: "How do you approach meeting new people?", 
        answers: [
            {id: 1, text: "I love it! I enjoy making new connections.", weight: 4},
            {id: 2, text: "I am friendly but prefer small groups.", weight: 3},
            {id: 3, text: "I get nervous but try to be social.", weight: 2},
            {id: 4, text: "I avoid it when possible.", weight: 1}
        ]
    },

    // Q7
    {id: 4, question: "What is your dream job like?", 
        answers: [
            {id: 1, text: "High-paying and prestigious.", weight: 4},
            {id: 2, text: "Creative and fulfilling.", weight: 3},
            {id: 3, text: "Something that allows me to help others.", weight: 2},
            {id: 4, text: "One that gives me freedom and flexibility.", weight: 1}
        ]
    },

    // Q8
    {id: 4, question: "Which animal do you relate to the most?", 
        answers: [
            {id: 1, text: "Lion: Confident and ambitious.", weight: 4},
            {id: 2, text: "Owl: Wise and introspective.", weight: 3},
            {id: 3, text: "Dolphin: Social and fun-loving.", weight: 2},
            {id: 4, text: "Cat: Independent and mysterious.", weight: 1}
        ]
    },

    // Q9
    {id: 4, question: "What is your biggest fear?", 
        answers: [
            {id: 1, text: "Failure.", weight: 4},
            {id: 2, text: "Loneliness.", weight: 3},
            {id: 3, text: "The unknown.", weight: 2},
            {id: 4, text: "Losing control.", weight: 1}
        ]
    },

    // Q10
    {id: 4, question: "How would your friends describe you?", 
        answers: [
            {id: 1, text: "Determined and hardworking.", weight: 4},
            {id: 2, text: "Thoughtful and kind.", weight: 3},
            {id: 3, text: "Fun and spontaneous.", weight: 2},
            {id: 4, text: "Independent and reserved.", weight: 1}
        ]
    }


]


document.getElementById("start-button").addEventListener("click", function () {
    document.getElementById("starting-screen").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    console.log("click")
    answers(questions[questionNumber]);

});



function answers(question) {

    document.getElementById("question").textContent = question.question;

    question.answers.forEach(answer => {
        const answerButton = document.getElementById(answer.id);   
        answerButton.textContent = answer.text;
        answerButton.onclick = () => handleAnswer(answer.weight);
        
    });
    
}

function handleAnswer(weight) {

    if (questionNumber < 9)  {
        score += weight;
        questionNumber += 1;
        console.log("score: " + score);
        console.log("q# " + questionNumber)
        answers(questions[questionNumber]);
    } else if (questionNumber = 10) {
        score += weight;
        document.getElementById("quiz-container").style.display = "none";
        document.getElementById("results-screen").style.display = "block";
        console.log("Finished " + score);
        handleResult(score);
    }

}

function handleResult() {
    switch(true) {
        case score >= 10 && score <= 14:
            document.getElementById("result").textContent = "The Free Spirit: You prefer independence and freedom. You value your personal space and enjoy doing things on your own terms.";
            break;
        case score >= 15 && score <= 24:
            document.getElementById("result").textContent = "The Social Butterfly: You thrive on connection and experiences! You love being around people and making memories.";
            break;
        case score >=25 && score <= 34:
            document.getElementById("result").textContent = "The Thinker: You are introspective, thoughtful, and creative. You value deep conversations and personal growth.";
            break;
        case score >=35 && score <=40:
            document.getElementById("result").textContent = "The Leader: You are confident, ambitious, and driven. You like taking charge and pushing yourself to succeed. People look up to you for guidance!";
            break;

        default:
            document.getElementById("result").textContent = "Something went wrong.... please try again";
            break;
    }
}






