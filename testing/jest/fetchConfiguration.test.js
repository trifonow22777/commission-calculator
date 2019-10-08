const fetchConfigApi = require('../../modules/fetchConfiguration'); // include the module
const hardcodedConifg = require('../../modules/operationsEur'); // get the hardcoded config to compare it with the external api config


test('test the configuration api request whether it is the expected data structure', async () => {
    const configObject = await fetchConfigApi(); // fetch the configuration object
    expect(configObject).toEqual({
      EUR: {
        smallestUnit: 0.01,
        biggestUnit: 100,
      },
      logic: {
        cashIn: {
          percents: 0.03,
          max: { amount: 5, currency: 'EUR' },
          },
        cashOut: {
          natural: {
            percents: 0.3,
            week_limit: { amount: 1000, currency: 'EUR' },
          },
          legal: {
            percents: 0.3,
            min: { amount: 0.5, currency: 'EUR' },
          },
        },
      },
    });    
});

test('test whether the requested configuration api is the same as the hardcoded one', async () => {
    const configObject = await fetchConfigApi();
    expect(configObject).toEqual(hardcodedConifg);
});
