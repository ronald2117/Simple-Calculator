const clearButton = document.querySelector('#clear-btn');
const deleteButton = document.querySelector('#delete-btn');
const equalButton = document.querySelector('#equal-btn');
const numberButton = document.querySelectorAll('.num-btn');
const operatorButton = document.querySelectorAll('.operator-btn');
const pointButton = document.querySelector('#point-btn');
let previousOperandTextElement = document.querySelector('#upper-output');
let currentOperandTextElement = document.querySelector('#lower-output');

let previousOperand = '';
let currentOperand = '';
let currentOperator = undefined;

numberButton.forEach((button) => {
  button.addEventListener('click', () => {
  if (currentOperand.length == 11) return
  appendNumber(button.innerText)
  updateDisplay();
  })
})
operatorButton.forEach((button) => {
  button.addEventListener('click', () => {
    if(currentOperand == '' && button.innerText == "-" && !currentOperand.includes("-") && previousOperand >= 0) {
      appendNumber("-");
      updateDisplay();
      return
    }
    if(currentOperand == '' || currentOperand == '-') return
    if(currentOperand != "" && previousOperand != ""){
      previousOperand = ` ${getProduct()}  ${button.innerText}`;
      currentOperand = ""
      updateDisplay();
      currentOperator = button.innerText;
      return
    }
    previousOperand = currentOperand + " " + button.innerText;
    currentOperand = '';
    updateDisplay();
    currentOperator = button.innerText;
  })
})
pointButton.addEventListener('click', () => {
  if(currentOperand == "" || currentOperand.includes(".")) return
  appendNumber(pointButton.innerText)
  updateDisplay()
})
equalButton.addEventListener('click', () => {
  if(currentOperand == ""  || previousOperand == "" || previousOperandTextElement.innerText.includes('=')) return
  previousOperandTextElement.innerText += ` ${currentOperand} =`
  currentOperandTextElement.innerText = getProduct();
  updateDisplay;
})
clearButton.addEventListener('click', clearDisplay)
deleteButton.addEventListener('click', deleteNumber)

function updateDisplay(){
  currentOperandTextElement.innerText = currentOperand;
  previousOperandTextElement.innerText = previousOperand;
}
function appendNumber(num){
  currentOperand += num
}
function clearDisplay(){
  currentOperand = ''
  previousOperand = ''
  updateDisplay();
}
function deleteNumber(){
  currentOperand = currentOperand.slice(0, -1)
  updateDisplay()
}

function getProduct(){
  let convertedPreviousOperand = parseFloat(previousOperand);
  let convertedCurrentOperand = parseFloat(currentOperand);
  let product;
  switch(currentOperator){
    case "+":
      product = convertedCurrentOperand +
      convertedPreviousOperand;
      break;
    case "-":
      product = convertedPreviousOperand -
      convertedCurrentOperand;
    break;
    case "×":
      product = convertedCurrentOperand *
      convertedPreviousOperand;
      break;
    case "÷":
      product = convertedPreviousOperand /
      convertedCurrentOperand;
    break;
    default:
      return
  }
  return product
}
