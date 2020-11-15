// Напишете функция, която изчислява дните до Коледа.

function convertMillisecondsToDays(a){
  console.log(a);
  return Math.round(a / (1000*60*60*24));
}
function getDaysBetween(a,b){
  var millisecondsBetween=b.getTime()-a.getTime();
  if(millisecondsBetween<0){
    return -1;
  }
  return convertMillisecondsToDays(millisecondsBetween);
}

var christmasDate=new Date(2020,11,25);
var currentDate=new Date();

var difference=getDaysBetween(currentDate,christmasDate);
if(difference===-1){
  difference=getDaysBetween(currentDate,new Date(2021,11,25));
}

console.log(difference);
