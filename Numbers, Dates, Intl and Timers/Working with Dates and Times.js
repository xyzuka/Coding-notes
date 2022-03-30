// CREATE DATES AND TIMES

// METHOD 1: new Date();
const now = new Date();
console.log(now); // Date Wed Mar 30 2022 13:36:40 GMT+1100 (Australian Eastern Daylight Time)

// METHOD 2: Parse the date from a date string
// JS will automatically parse the data in a string
// Generally not recommended
const now2 = new Date('Mar 30 2022 13:36:40');
console.log(now2); // Date Wed Mar 30 2022 13:36:40 GMT+1100 (Australian Eastern Daylight Time)

console.log(new Date('2019-11-18T21:31:17.178Z')); // Tue Nov 19 2019 08:31:17 GMT+1100 (Australian Eastern Daylight Time)

// Dates also have their own methods
// 1. getFullYear()
console.log(now.getFullYear());

// 2. getMonth()
//* Note: Months are 0 based
console.log(now.getMonth());

// 3. getDate()
console.log(now.getDate());

// 4. getDay()
console.log(now.getDay());

// 5. getHours()
console.log(now.getHours());

// 6. getMinutes()
console.log(now.getMinutes());

// 7. getSeconds()
console.log(now.getSeconds());

// 8. getTime();
// It is a time stamp how of many milliseconds have passed since 1 January 1970 00:00:00
console.log(now.getTime()); // 1648609048880
console.log(new Date(1648609048880));
// This method is used for getting time stamps, Date.now() can also be used

// 9. Date.now();
console.log(Date.now()); // 1648609147327

// 10. setFullYear();
const now3 = new Date('Mar 30 2022 13:36:40');
now3.setFullYear(3000);
console.log(now3); // Date Sun Mar 30 3000 13:36:40 GMT+1100 (Australian Eastern Daylight Time)
