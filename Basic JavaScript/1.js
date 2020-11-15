// 1.1
function printArray(arr) {
  arr.forEach((item, i) => {
    console.log(item);
  });
}

// 1.2
function doubleArr(arr) {
  var len = arr.length;
  var double = new Array(len);

  for (let i = 0; i < len; i++) {
    double[i] = 2 * arr[i];
  }

  return double;
}

// 1.3 - helper
function isEven(a) {
  return a % 2 === 0;
}
//1.3
function filterOnlyEven(arr) {
  var tmp = [];

  for (let i = 0; i < arr.length; i++) {
    if (isEven(arr[i])) {
      tmp.push(arr[i]);
    }
  }
  return tmp;
}

//1.4
function hasSmallerNumThan10(arr) {
  const limit = 10;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < limit) {
      return true;
    }
  };
  return false;
}

//1.5 -helper
function isDivisibleBy(a, b) {
  return a % b === 0;
}
//1.5
function filterOnlyDivisibleBy3(arr) {
  const divisor = 3;
  var tmp = [];

  arr.forEach(item => {
    if (isDivisibleBy(item, divisor)) {
      tmp.push(item);
    }
  });
  return tmp;
}

//1.6
function sumElements(arr) {
  return arr.reduce(function(a, b) {
    return a + b;
  });
}

//1.7
function getLast2(arr){
  return arr.slice(-2);
}

var A = [10, 5, 13, 18, 51];
