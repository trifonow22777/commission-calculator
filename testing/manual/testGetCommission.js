const getCommission = require('../../modules/getCommission');
const config = require('../../modules/operationsEur.js'); 

let number = process.argv[2];
let operationType = process.argv[3];
let personType = process.argv[4];

console.log(getCommission(number, operationType, personType, config));