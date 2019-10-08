const operations = {
    EUR: {
      smallestUnit: 0.01, // how much of the biggest unit is contained in the smallest unit
      biggestUnit: 100, // e.g. how much of the smallest unit is contained in the biggest unit
    },
    logic: {
      cashIn: {
        percents: 0.03, // constant value
        max: { amount: 5, currency: 'EUR' }, // EURO value // 500 cents = 5 euro
      },
      cashOut: {
        natural: {
            percents: 0.3, // constant value
            week_limit: { amount: 1000, currency: 'EUR' }, // Euro value
        },
        legal: {
            percents: 0.3, // constant value
            min: { amount: 0.5, currency: 'EUR' }, // 0.50 Euro value // 50 cents = 0.5 euro
        },
      },
    }
}

module.exports = operations;