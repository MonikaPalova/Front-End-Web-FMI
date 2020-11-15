var array1 = [];

//2.1
array1.push(new Date());

//2.2
array1.push(new Date(2018, 11, 8));
array1[1].setHours(21, 0, 0);

//2.3-helpers
function getDayNumber(date) {
  return date.getDay();
}

function getNumberOfDaysInMonth(date) {
  return new Date(date.getYear(), date.getMonth(), 0).getDate();
}

//2.3
var array2 = [];
array1.forEach((item) => {
  array2.push(new Array(getNumberOfDaysInMonth(item), getDayNumber(item)));
});

//2.4-helpers
function getDayName(a) {
  var weekdays = new Array(
    "неделя", "понеделник", "вторник", "сряда", "четвъртък", "петък", "събота"
  );
  return weekdays[a];
}

function formatDigit(a) {
  return a >= 10 ? a : "0" + a;
}

function formatDate(date) {
  const DATE_DIVISOR = ".";
  const TIME_DIVISOR = ":";
  return "Дата: " + formatDigit(date.getDate()) + DATE_DIVISOR + formatDigit(date.getMonth() + 1) + DATE_DIVISOR + date.getFullYear() +
    ", час: " + formatDigit(date.getHours()) + TIME_DIVISOR + formatDigit(date.getMinutes()) + TIME_DIVISOR + formatDigit(date.getSeconds());
}

function combine(date, arr) {
  const SEPARATOR = ", ";
  var dayNumber = arr[1];
  var numberOfDays = arr[0];
  return formatDate(new Date(date)) + SEPARATOR + getDayName(dayNumber) + SEPARATOR + numberOfDays + " дни";
}
//2.4
var array3 = new Array(2);
for (let i = 0; i < array3.length; i++) {
  array3[i] = combine(array1[i], array2[i]);
}
