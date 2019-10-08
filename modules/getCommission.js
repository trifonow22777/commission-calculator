const hardcodedConfig = require('./operationsEur'); // if we are to test this function seperately, we will mock the cofiguration api, since it can produce its own mistakes

const getCommission = function calculateCommission(amount, operationType, personType, config = hardcodedConfig) {  

  switch (operationType) {
    case 'cash_in': {
      let {percents, max} = config.logic.cashIn; // destructure properties from configuration object for readability purposes
      let commission = (amount * percents); 

      if (commission > (max.amount * config[max.currency].biggestUnit)) return (max.amount * config[max.currency].biggestUnit);
      return commission;
    }
    case 'cash_out': {
      let {natural, legal} = config.logic.cashOut;
      
      switch (personType) {
        case 'natural': {
            let commission = (amount * natural.percents);

            return commission;
          }
        case 'juridical': {
          let commission = (amount * legal.percents);

          if (commission < (legal.min.amount * config[legal.min.currency].biggestUnit)) {
            return (legal.min.amount * config[legal.min.currency].biggestUnit);
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

// diff with previous version - Removed the Math.ceil() from final commission calculation (numbers must be passed in raw format [not ceiled] to function "formatValue()")
