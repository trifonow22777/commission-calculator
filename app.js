const operate = require('./modules/operation.js');
const fs = require('fs');

const iterate = function iterateData(fileName) {
  const file = fs.readFileSync(fileName);
  const content = JSON.parse(file);
  const processed = operate(content);

  for (let i = 0; i < processed.length; i++) {
      process.stdout.write(processed[i] + '\n')
  }
}

iterate(process.argv[2])