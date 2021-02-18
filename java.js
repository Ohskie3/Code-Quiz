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
    correct: '<style>'
  },
  {
    question: 'What tag is used to insert a blank line?',
    answers: ['line', 'blank', 'hr', 'space'],
    correct: '<hr>'
  },
  {
    question: 'Items in a(n)___ list are preceded by numbers?',
    answers: ['ordered', 'unorded', 'bulleted', 'grocery'],
    correct: 'ordered'
  },
];

let count = 0

document.getElementById('start').addEventListener('click', () => {
  let seconds = 60
  let countDown = setInterval(() => {
    seconds--
document.getElementById('timer').textContent = `Timer: ${seconds}`
    if (seconds <= 0){
      document.getElementById('question-container').textContent = 'Time is up'
      clearInterval(countDown)
    }

  },1000);
  document.getElementById('question').textContent = quizQuestions[0].question
  document.getElementById('answers').innerHTML = `
  <button class="answer">${quizQuestions[0].answers[0]}</button>
  <button class="answer">${quizQuestions[0].answers[1]}</button>
  <button class="answer">${quizQuestions[0].answers[2]}</button>
  <button class="answer">${quizQuestions[0].answers[3]}</button>
  `
})

document.addEventListener('click', event => {
  if (event.target.className === 'answer'){
    count++
    document.getElementById('question').textContent = quizQuestions[count].question 
    document.getElementById('answers').innerHTML = `
  <button class="answer">${quizQuestions[count].answers[0]}</button>
  <button class="answer">${quizQuestions[count].answers[1]}</button>
  <button class="answer">${quizQuestions[count].answers[2]}</button>
  <button class="answer">${quizQuestions[count].answers[3]}</button>
  `
  }
})
