// CALCULATING WITH DATES
// We can use the date time stamps to perform calculations

const future = new Date(2037, 10, 19, 15, 23);

// Converting the future date to a time stamp
console.log(future.getTime()); // 2142217380000
console.log(+future); // 2142217380000

// We can do operations with these milliseconds and convert it back to days or hours etc

// Eg. A function that takes in two dates and will return the number of days that pass between these two dates

const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
// 1000 mil in a sec => 60sec in a min =>  60min in a hr => 24hrs in a day

const daysPassed = calcDaysPassed(new Date(2022, 7, 22), new Date(2022, 7, 24));
console.log(daysPassed); // // 2 days
