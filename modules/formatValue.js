const formatValue = function formatOutput(value, currency = 'EUR') { // its only job is to format the value recieved
  let currencies = { // config of currencies
    EUR: {
    smallestUnit: 0.01, // smallest item of currecncy
    biggestUnit: 100, // how much of smallest item are contained in the biggest item e.g how much of euro-cents in a cent
    },
  };
  if (Object.keys(currencies).some(cur => cur !== currency)) throw new Error('Unknown currency format in argument 2 of function "formatOutput"');

  let {smallestUnit} = currencies[currency];
  if (value < 10) return (Math.ceil(value) * smallestUnit).toFixed(2);
  return (Math.ceil(value * 0.1) * 10 * smallestUnit).toFixed(2);    
};

module.exports = formatValue;
