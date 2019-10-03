const formatValue = require('../../modules/formatValue');

let formated = formatValue(Number(process.argv[2]));

console.log('formated it to: ', formated);