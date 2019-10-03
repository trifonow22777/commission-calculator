const operationsEur = {
    currency: 'EUR',
    smallestUnit: 0.01, // how much of the biggest unit is contained in the smallest unit
    biggestUnit: 100, // e.g. how much of the smallest unit is contained in the biggest unit
    cashIn: {
      percents: 0.03, // constant value
      maxLimit: 5, // EURO value // 500 cents = 5 euro
    },
    cashOut: {
      natural: {
          percents: 0.3, // constant value
          weekLimit: 1000, // Euro value
      },
      juridical: {
          percents: 0.3, // constant value
          minLimit: 0.50, // 0.50 Euro value // 50 cents = 0.5 euro
      },
    },
}

module.exports = operationsEur;