function convertMinuteToSecond(min) {
  let seconds = min * 60;
  return seconds;
}

let min = 5;
console.log(convertMinuteToSecond(min), "seconds");
