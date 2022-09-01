// For displaying output
var upperOutputValue = '';
var lowerOutputValue = '0'; //max: 9
setInterval(function displayOutputValues() {
  lowerOutput.innerHTML = lowerOutputValue;
  upperOutput.innerHTML = upperOutputValue;
}, 10)

const clearButton = document.querySelector('#clear-btn');
const deleteButton = document.querySelector('#delete-btn');
const numSevenButton = document.querySelector('#num-7-btn');
const numEightButton = document.querySelector('#num-8-btn');
const numNineButton = document.querySelector('#num-9-btn');
const divideButton = document.querySelector('#divide-btn');
const numFourButton = document.querySelector('#num-4-btn');
const numFiveButton = document.querySelector('#num-5-btn');
const numSixButton = document.querySelector('#num-6-btn');
const multiplyButton = document.querySelector('#multiply-btn');
const numOneButton = document.querySelector('#num-1-btn');
const numTwoButton = document.querySelector('#num-2-btn');
const numThreeButton = document.querySelector('#num-3-btn');
const subtractButton = document.querySelector('#subtract-btn')
const pointButton = document.querySelector('#point-btn');
const numZeroButton = document.querySelector('#num-0-btn');
const equalButton = document.querySelector('#equal-btn');
const addButton = document.querySelector('#add-btn');
const allButtons = document.querySelectorAll('.buttons');
const upperOutput = document.querySelector('#upper-output');
const lowerOutput = document.querySelector('#lower-output');


