const rev = (number) => {
  if (number > 0) {
    let reversedNumber = 0;
    while (number > 0) {
      let remainder = number % 10;
      number = Math.round(number / 10);
      reversedNumber = reversedNumber * 10 + remainder;
    }
    return reversedNumber;
  } else {
    number = -number;
    let reversedNumber = 0;
    while (number > 0) {
      let remainder = number % 10;
      number = Math.round(number / 10);
      reversedNumber = reversedNumber * 10 + remainder;
    }
    return -reversedNumber;
  }
};

console.log(rev(123));
console.log(rev(-123));
