function getTimesLeftToSecond() {
  const Xmas = new Date("2022-12-25T00:00:00");
  const now = new Date();
  const timesLeft = Xmas - now;
  const timesLeftToSecond = Math.floor(timesLeft / 1000);

  return timesLeftToSecond;
} 

function getEachTimeToDday(timesLeftToSecond) {
  const minute = 60;
  const hour = 60 * minute;
  const day = 24 * hour;

  const secondsLeft = Math.floor(timesLeftToSecond % minute);
  const minutesLeft = Math.floor(timesLeftToSecond % hour / minute);
  const hoursLeft = Math.floor(timesLeftToSecond % day / hour);
  const daysLeft = Math.floor(timesLeftToSecond / day);

  return {secondsLeft, minutesLeft, hoursLeft, daysLeft}
}

function setDigit({secondsLeft, minutesLeft, hoursLeft, daysLeft}) {
  const secondText = String(secondsLeft).padStart(2,'0');
  const minuteText = String(minutesLeft).padStart(2,'0');
  const hourText = String(hoursLeft).padStart(2,'0');
  const daysText = String(daysLeft);

  return {secondText, minuteText, hourText, daysText}
}

function setClockText({secondText, minuteText, hourText, daysText}) {
  const clockTextH2 = document.querySelector(".js-clock");
  clockTextH2.innerText =
    `${daysText}d ${hourText}h ${minuteText}m ${secondText}s`;
}

function showClock() {
  const timesLeftToSecond = getTimesLeftToSecond();
  const eachTimeToDday = getEachTimeToDday(timesLeftToSecond);
  const eachTimeUnitText = setDigit(eachTimeToDday);
  
  setClockText(eachTimeUnitText);
  
  console.log(timesLeftToSecond);
  console.log(eachTimeToDday);
  console.log(eachTimeUnitText);
}

showClock();
setInterval(showClock, 1000);