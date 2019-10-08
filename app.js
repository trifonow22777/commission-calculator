const operate = require('./modules/operation.js');
const fs = require('fs');
const fetchConfigApi = require('./modules/fetchConfiguration');

const iterate = async function iterateData(fileName) {
  const file = fs.readFileSync(fileName);
  const content = JSON.parse(file);
  const operationsConfig = await fetchConfigApi(); // fetch the api configuration which the logic will be bound to
  const processed = await operate(content, operationsConfig);

  for (let i = 0; i < processed.length; i += 1) {
      process.stdout.write(processed[i] + '\n')
  }
}

iterate(process.argv[2]);