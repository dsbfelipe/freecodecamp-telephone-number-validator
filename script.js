const $checkButton = document.querySelector('button[id="check-btn"]');
const $clearButton = document.querySelector('button[id="clear-btn"]');
const $input = document.querySelector('input[id="user-input"]');
const $resultSpam = document.querySelector('div[id="results-div"]'); 
const $inputContainer = document.querySelector('div[id="input-container"]');

const regexOne = /^1 [1-9][1-9][1-9]-[1-9][1-9][1-9]-[1-9][1-9][1-9][1-9]$/;
const regexTwo = /^1 \([1-9][1-9][1-9]\) [1-9][1-9][1-9]-[1-9][1-9][1-9][1-9]$/;
const regexThree = /^1\([1-9][1-9][1-9]\)[1-9][1-9][1-9]-[1-9][1-9][1-9][1-9]$/;
const regexFour = /^1 [1-9][1-9][1-9] [1-9][1-9][1-9] [1-9][1-9][1-9][1-9]$/;
const regexFive = /^[1-9][1-9][1-9][1-9][1-9][1-9][1-9][1-9][1-9][1-9]$/;
const regexSix = /^[1-9][1-9][1-9]-[1-9][1-9][1-9]-[1-9][1-9][1-9][1-9]$/;
const regexSeven = /^\([1-9][1-9][1-9]\)[1-9][1-9][1-9]-[1-9][1-9][1-9][1-9]$/

const validFormats = [
  regexOne,
  regexTwo,
  regexThree,
  regexFour,
  regexFive,
  regexSix,
  regexSeven
]

function isValidNumber(input) {
  return validFormats.some((regex) => regex.test(input));
}
console.log(isValidNumber("1 456 789 4444"))

$checkButton.addEventListener("click", () => {
  if (!$input.value) {
    alert("Please provide a phone number");
    return;
  }

  if(isValidNumber($input.value)){
    $resultSpam.innerText = `Valid US number: ${$input.value}`;
    $inputContainer.style.border = "2px solid #8ae09f"
  } else {
    $resultSpam.innerText = `Invalid US number: ${$input.value}`
    $inputContainer.style.border = "2px solid #e68181"
  }
})

$clearButton.addEventListener("click", () => {
  $resultSpam.innerText = "";
  $input.value = "";
  $inputContainer.style.border = "2px solid #c6b5ff86"
})


