// Beginner javascript bug

const num1 = document.querySelector("#number-input-1");
const num2 = document.querySelector("#number-input-2");
const answer = document.querySelector("#sum");
const equalsTen = document.querySelector("#equals10");

function addNumbers() {
  // uncomment the next line to see what the values are
  // console.log({ firstNumber: num1.value, secondNumber: num2.value });
  const sum = num1.value + num2.value;
  answer.textContent = sum;

  const isTen = numberEqualsTen(sum);
  equalsTen.textContent = isTen;

  // This might help https://www.freecodecamp.org/news/how-to-convert-a-string-to-a-number-in-javascript/
}

function numberEqualsTen(num) {
  // Why does this always return true?
  if ((num = 10)) {
    return true;
  } else {
    return false;
  }
}

const currentTab = localStorage.getItem("bugsTab");
if (currentTab) {
  setTab(currentTab);
}
