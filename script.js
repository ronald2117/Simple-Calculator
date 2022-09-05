const clearButton = document.querySelector('#clear-btn');
const deleteButton = document.querySelector('#delete-btn');
const equalButton = document.querySelector('#equal-btn');
const previousOperandTextElement = document.querySelector('#upper-output');
const currentOperandTextElement = document.querySelector('#lower-output');
const numberButton = document.querySelectorAll('.num-btn');
const operatorButton = document.querySelectorAll('.operator-btn');

class Calculator {
  constructor (currentOperandTextElement, previousOperandTextElement){
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.operation = '';
  }
  updateDisplay() {
    this.currentOperandTextElement.innerText = this.currentOperand;
  }
  appendNumber(number){
    this.currentOperand = this.currentOperand + number;
  }
  
}

const calculator = new Calculator(currentOperandTextElement, previousOperandTextElement);

numberButton.forEach((button) => {
  button.addEventListener('click', () => {
    console.log(calculator.operand)
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  })
})
