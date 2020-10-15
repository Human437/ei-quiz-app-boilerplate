const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'An air-standard Diesel cycle has a compression ratio of 16 and a cutoff ratio of 2. At the beginning of the compression process, air is at 95 kPa and 27°C. Using constant specific heats at room temperature, determine the temperature after the heat-addition process.',
      answers: [
        '1725K',
        '1819K',
        '2200K',
        '1673K'
      ],
      correctAnswer: '1819K'
    },
    {
      question: 'An air-standard Diesel cycle has a compression ratio of 16 and a cutoff ratio of 2. At the beginning of the compression process, air is at 95 kPa and 27°C. Accounting for the variation of specific heats with temperature, determine the temperature after the heat-addition process.',
      answers: [
        '1854K',
        '1725K',
        '2200K',
        '1673K'
      ],
      correctAnswer: '1725K'
    },
    {
      question: 'An ideal diesel engine has a compression ratio of 20 and uses air as the working fluid. The state of air at the beginning of the compression process is 95 kPa and 20°C. If the maximum temperature in the cycle is not to exceed 2200 K, determine the thermal efficiency.',
      answers: [
        '65.8%',
        '54.6%',
        '62.1%',
        '63.5%'
      ],
      correctAnswer: '63.5%'
    },
    {
      question: 'An air-standard Diesel cycle has a compression ratio of 20.910. The cylinder contains 0.075 kg of air. At the beginning of the compression the pressure and temperature are 101 kPa and 298 K, respectively. The maximum temperature in the cycle is 1900 K. Accounting for the variation of specific heats with temperature, determine the cutoff rato.',
      answers: [
        '2.021',
        '2.21',
        '20.021',
        '20.21'
      ],
      correctAnswer: '2.021'
    },
    {
      question: 'An air-standard Diesel cycle has a compression ratio of 16 and a cutoff ratio of 2. At the beginning of the compression process, air is at 95 kPa and 27°C. Using constant specific heats at room temperature, determine the thermal efficiency.',
      answers: [
        '64.7%',
        '63.6%',
        '62.5%',
        '61.4%'
      ],
      correctAnswer: '61.4%'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

function questionGenerator(){
  console.log('questionGenerator has ran');
};


/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

function generateStartPage(){
  $('main').html('<div class="wrapper"><p>This quiz will assess your knowledge of the Diesel Cycle, please have your ideal gas table ready.</p><button>Start Quiz</button></div>');
};

function getQuestionNumber(){
  return store.questionNumber;
}

function getQuestion(num){
  return store.questions[num-1].question;
}

function getAnswers(num){
  let answers = '';
  for(i=0;i<store.questions[num-1].answers.length;i++){
    answers += `<input type="radio" id=${store.questions[num-1].answers[i]} name="temp" value="${store.questions[num-1].answers[i]}"> <label for="${store.questions[num-1].answers[i]}">${store.questions[num-1].answers[i]}</label><br>`
  }
  return answers;
}


function generateQuestion(num){
  let question = getQuestion(num);
  let answers = getAnswers(num);
  $('main').html(`<h2>Question ${num} of ${store.questions.length}</h2> 
  <h2>Current Score: ${store.score}/${store.questions.length}</h2>
  <div class="wrapper">
    <form>
        <h3>${question}</h3>
        ${answers}
        <br>
        <input class = "submit" type="submit" value="Submit">
    </form>
  </div>`)
}

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)
// On button click in main, check to see what kind of button it is and calls the corresponding function to generate stuff


//grab id instead of walking through the dom for the submit and next button


$(generateQuestion(1))
