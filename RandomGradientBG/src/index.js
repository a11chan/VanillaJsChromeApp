const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34"
];

//최댓값도 포함, 최솟값도 포함
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getColorRandomNumber() {
  const min = 0;
  const max = colors.length -1
  const colorRandomNumber = getRandomIntInclusive(min, max)
  
  return colorRandomNumber;
}

function getColorCode(colorRandomNumber) {
  const randomColorCode = colors[colorRandomNumber];
  
  return randomColorCode
}

function changeBg () {
  const colorRandomNumber1 = getColorRandomNumber();
  const colorRandomNumber2 = getColorRandomNumber();
  const colorCode1 = getColorCode(colorRandomNumber1);
  const colorCode2 = getColorCode(colorRandomNumber2);
  const body = document.querySelector("body");
  body.style.background = `linear-gradient(to right, ${colorCode1}, ${colorCode2})`;

  console.log(`
    총 색상수: ${colors.length}
    배열 내 색상주소1: ${colorRandomNumber1}
    배열 내 색상주소2: ${colorRandomNumber2}
    배열 내 색상코드1: ${colorCode1}
    배열 내 색상코드2: ${colorCode2}
  `);
}

const giveYouColor = document.querySelector("button");
giveYouColor.addEventListener("click",changeBg);