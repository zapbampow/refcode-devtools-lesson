const form = document.querySelector("#trivia_form");
console.log(form);

async function getTrivia() {
  const url =
    "https://opentdb.com/api.php?amount=1&category=18&difficulty=easy&type=boolean";

  const res = await fetch(url);
  const data = await res.json();
  const question = data.results[0].question;

  const trivia = document.querySelector("#trivia");
  trivia.innerHTML = "";

  // add h3 with text "Question"
  const questionEl = document.createElement("h3");
  questionEl.textContent = "Question";
  trivia.appendChild(questionEl);

  // add p with text of question
  const triviaEl = document.createElement("p");
  triviaEl.textContent = question;
  trivia.appendChild(triviaEl);

  // add h3 with text "Answer"
  const answerEl = document.createElement("h3");
  answerEl.textContent = "Answer";
  answerEl.classList.add("hide");
  trivia.appendChild(answerEl);

  // add p with text of answer
  const answer = data.results[0].correct_answer;
  const answerTextEl = document.createElement("p");
  answerTextEl.textContent = answer;
  answerTextEl.classList.add("hide");
  trivia.appendChild(answerTextEl);

  // add button with text "Show Answer"
  const button = document.createElement("button");
  button.textContent = "Show Answer";
  button.addEventListener("click", () => {
    answerEl.classList.toggle("hide");
    answerTextEl.classList.toggle("hide");
  });
  trivia.appendChild(button);
}
