// list of questions
let quizQuestions = [
  {
    question: 'What does HTML stand for?',
    answers: ['How The Mall Looks', 'Hyper Text Markup Language', 'Helping Teach My Language', 'How To Make Languages'],
    correct: 'Hyper Text Markup Language'
  },
  {
    question: 'The # symbol specifies that the selector is what?',
    answers: ['class', 'tag', 'first', 'id'],
    correct: 'id'
  },
  {
    question: 'What tag is used for an internal style sheet?',
    answers: ['style', 'css', 'script', 'html'],
    correct: 'style'
  },
  {
    question: 'What tag is used to insert a blank line?',
    answers: ['line', 'blank', 'hr', 'space'],
    correct: 'hr'
  },
  {
    question: 'Items in a(n)___ list are preceded by numbers?',
    answers: ['ordered', 'unorded', 'bulleted', 'grocery'],
    correct: 'ordered'
  },
];

let currentQuestion = 0
let score = 0
let countDownInterval = null
let seconds = 60
document.getElementById('start').addEventListener('click', () => {

  // timer 
  countDownInterval = setInterval(() => {
    seconds--
    document.getElementById('timer').textContent = `Timer: ${seconds}`
    if (seconds <= 0) {
      document.getElementById('question-container').textContent = 'Time is up!'
      clearInterval(countDownInterval)
      document.getElementById('question').textContent = 'Game Over!'
      document.getElementById('answers').innerHTML = `
        <div>
          <h2>Final Score</h2>
            <p>${score}</p>
        </div>   
        <div>
          <label>Enter Initials</label>
          <input type="text"/> 
          <button type="submit" id = "submit" class="btn-primary btn">Submit</button>
      `
    }
  }, 1000);

  // question selector
  document.getElementById('question').textContent = quizQuestions[0].question
  document.getElementById('answers').innerHTML = `
  <button class="answer" value="${quizQuestions[0].answers[0]}">${quizQuestions[0].answers[0]}</button>
  <button class="answer" value="${quizQuestions[0].answers[1]}">${quizQuestions[0].answers[1]}</button>
  <button class="answer" value="${quizQuestions[0].answers[2]}">${quizQuestions[0].answers[2]}</button>
  <button class="answer" value="${quizQuestions[0].answers[3]}">${quizQuestions[0].answers[3]}</button>
  `
})

// when start button is first clicked
document.addEventListener('click', event => {
  if (event.target.className === 'answer') {
    // is answer correct or not
    if (event.target.value === quizQuestions[currentQuestion].correct) {
      ++score
    } else {
      seconds = seconds - 5

    }
    currentQuestion++

    // am i at the end?
    if (currentQuestion >= 5) {
      document.getElementById('question').textContent = 'Game Over!'
      document.getElementById('answers').innerHTML = `
        <div>
          <h2>Final Score</h2>
          <p>${score}</p>
        </div>   
        <div>
          <label>Enter Initials</label>
          <input type="text" id="initials"/> 
          <button type="submit" id="submit" class="btn-primary btn">Submit</button>
        </div>
      `

      clearInterval(countDownInterval)
    } else {
      document.getElementById('question').textContent = quizQuestions[currentQuestion].question
      document.getElementById('answers').innerHTML = `
        <button class="answer" value="${quizQuestions[currentQuestion].answers[0]}">${quizQuestions[currentQuestion].answers[0]}</button>
        <button class="answer" value="${quizQuestions[currentQuestion].answers[0]}">${quizQuestions[currentQuestion].answers[1]}</button>
        <button class="answer" value="${quizQuestions[currentQuestion].answers[0]}">${quizQuestions[currentQuestion].answers[2]}</button>
        <button class="answer" value="${quizQuestions[currentQuestion].answers[0]}">${quizQuestions[currentQuestion].answers[3]}</button>
      `
    }
    // submitting score and initials to local storage
  } else if (event.target.id === 'submit') {
    // score
    // initials
    // store in local storage
    // display it
    let myInitials = document.getElementById('initials').value
    let highScoreList = localStorage.getItem('highScoreListKey')
    if (!highScoreList) {
      highScoreList = ''
    }
    highScoreList = `${highScoreList} ${myInitials} ${score}`
    localStorage.setItem('highScoreListKey', highScoreList)
    document.getElementById('answers').innerHTML = `
        <div>
          <h2>${highScoreList}</h2>
        </div>
        <div>
          <button id="clearScores">Clear High Scores</button> 
        </div>
      `
      // clearing local storage
  } else if (event.target.id === 'clearScores') {
    localStorage.removeItem('highScoreListKey')
  }
})

