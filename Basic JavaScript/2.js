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
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  );
  return weekdays[a];
}

function combine(date, arr) {
  const SEPARATOR = ", ";
  var dayNumber = arr[1];
  var numberOfDays = arr[0];

  return date.toString() + SEPARATOR + getDayName(dayNumber) + SEPARATOR + numberOfDays + " days";
}
//2.4
var array3 = new Array(2);
for (let i = 0; i < array3.length; i++) {
  array3[i] = combine(array1[i], array2[i]);
}
