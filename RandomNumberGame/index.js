const playBtn = document.querySelector("#playBtn");
playBtn.addEventListener("click", checkInput);

let maxRandomNumber;
let yourPick;
let maxRandomNumberToInteger;
let randomNumber;

const MAX_RANDOM_NUMBER = ".maxRandomNumber"
const YOUR_PICK = ".yourPick"

function checkInput(e) {
  e.preventDefault();
  forceDisplayNone();

  maxRandomNumber = parseInt(document.querySelector(MAX_RANDOM_NUMBER).value);
  yourPick = parseInt(document.querySelector(YOUR_PICK).value);

  if ( yourPick < 0 || maxRandomNumber < 0) {
    alert("Please input positive number");
  } else if (yourPick > maxRandomNumber) {
    alert("Your pick is bigger than max random number")
  } else if (Number.isInteger(maxRandomNumber) && Number.isInteger(yourPick)) { 
    gameStart();
  } else if (!maxRandomNumber) {
    alert("Please input positive max random number range")
  } else if (!yourPick) {
    alert("Please input positive number you picked")
  } else {
    return false;
  }
}

function forceDisplayNone() {
  document.querySelector("h4#showPick").classList.add("hidden");
  document.querySelector("h3#showResult").classList.add("hidden");
}

function gameStart() {
  getRandomNumber();
  showPick();
  showResult();

  console.log(`maxRandomNumber = ${maxRandomNumber}`);
  console.log(`yourPick = ${yourPick}`);
  console.log(`randomNumber = ${randomNumber}`);
}

function getRandomNumber() {
  maxRandomNumberToInteger = Math.floor(Math.random() * Math.pow(10,maxRandomNumber.toString().length));
  randomNumber =  maxRandomNumberToInteger % (maxRandomNumber + 1);
}

function showPick() {
    document.querySelector("#showPick").classList.remove("hidden");
    document.querySelector("#showResult").classList.remove("hidden");
    document.querySelector("#showPick span:first-child").innerText = yourPick;
    document.querySelector("#showPick span:last-child").innerText = randomNumber;
}

function showResult() {
  if (yourPick === randomNumber) {
    document.querySelector("#showResult").innerText = "You Win!"
  } else {
    document.querySelector("#showResult").innerText = "You Lost!"
  }
}
