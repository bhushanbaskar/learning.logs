//5. Check if a year is a Leap Year
// if it is divisible by 400 then it is a leap year
/*const year = prompt("Enter a Year : ");
if(year % 400 === 0 || (year % 4 === 0 &&  year % 100 !== 0)){
    console.log('it is a LEAP YEAR !!');
}else{
     console.log('it is NOT a leap year !!');
}*/
const isLeapYear = year =>
  (year % 400 === 0) || 
  (year % 4 === 0 && year % 100 !== 0);

// 1. Take input from user
let year = prompt("Enter a year:");

// Convert string → number
year = Number(year);

// 2. Check and show non-technical output
if (isLeapYear(year)) {
  alert(year + " is a leap year 🎉");
} else {
  alert(year + " is NOT a leap year.");
}
console.log(typeof(isLeapYear))