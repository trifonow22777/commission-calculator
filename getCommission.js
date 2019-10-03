const operationsConfig = require('./operationsEur');

const getCommission = function calculateCommission(amount, operationType, personType, config = operationsConfig) {
  if (!config) throw Error('Please provide a config object for operations');

  switch (operationType) {
    case 'cash_in': {
      let {percents, maxLimit} = config.cashIn;
      let commission = Math.ceil(amount * percents);

      if (commission > (maxLimit * config.biggestUnit)) return (maxLimit * config.biggestUnit);
      return commission;
    }
    case 'cash_out': {
      let {natural, juridical} = config.cashOut;
      
      switch (personType) {
        case 'natural': {
            let commission = Math.ceil(amount * natural.percents);

            return commission;
          }
        case 'juridical': {
          let commission = Math.ceil(amount * juridical.percents);

          if (commission < (juridical.minLimit * config.biggestUnit)) {
            return (juridical.minLimit * config.biggestUnit)
          };
          return commission;
        }
        default: {
          throw new Error('undefined person type as 3rd argument');
        }
      }

    }
    default: {
      throw new Error('undefined operation type as 2nd argument');
    }
  }
};

module.exports = getCommission;
