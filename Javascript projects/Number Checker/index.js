// my code
function isPositive(number) {
  if (number > 0) {
    return true;
  } else {
    return false;
  }
}
function isNegative(number) {
  if (number < 0) {
    return true;
  } else {
    return false;
  }
}
function isZero(number) {
  if (number === 0) {
    return true;
  } else {
    return false;
  }
}
function isEven(number) {
  if (number % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
function isOdd(number) {
  if (number % 2 != 0) {
    return true;
  } else {
    return false;
  }
}
function describeNumber(number) {
  return (
    "{positive: " +
    isPositive(number) +
    ", negative: " +
    isNegative(number) +
    ", zero: " +
    isZero(number) +
    ", even: " +
    isEven(number) +
    ", odd: " +
    isOdd(number)
  );
}
console.log(describeNumber(8));
console.log(describeNumber(-3));
console.log(describeNumber(0));
console.log(describeNumber(7));

// Roadmap.sh code
// function isPositive(number) {
//   return number > 0;
// }
// function isNegative(number) {
//   return number < 0;
// }
// function isZero(number) {
//   return number === 0;
// }
// function isEven(number) {
//   return number % 2 === 0;
// }
// function describeNumber(number) {
//   return {
//     positive: isPositive(number),
//     negative: isNegative(number),
//     zero: isZero(number),
//     even: isEven(number),
//     odd: !isEven(number),
//   };
// }
// console.log(describeNumber(8));
// console.log(describeNumber(-3));
// console.log(describeNumber(0));
// console.log(describeNumber(7));
