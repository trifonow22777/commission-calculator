const getDate = require('../../modules/date');

let [yy, mm, dd] = process.argv[2].split('-');
// console.log(yy, mm, dd);
console.log('day of week is', getDate(Number(yy), Number(mm), Number(dd)).weekday);

