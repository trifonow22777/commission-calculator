
# Commission calculator from assignment



## Environment:

nodeJs 10.16.0 or higher

  

  

## Running the program

(no 3rd party libraries & modules required except for the testing suite). Open your os terminal and run:

`$ node app [path to input.json]`
(result shall be written to stdout)

Program accepts input as json format only

## Testing

To run test suits. Install Jest 24.9.0 locally

  

`$ npm install --save-dev jest`
(installs Jest on your dev environment)

to execute test suits, open the terminal on the project directory & run:

`$ npm run test`
(shall lookup your directory for "`..test.js`" files and execute the tests)

  

  

### Making custom unit tests

  

Create a file with the name of the function you want to test followed by `.test.js` e.g. `getCommission.test.js`

**.test.js is important !**  

Inside the file, require the function you want to be tested using the CommonJs syntax for NodeJs e.g.

`const <NameOfFunction> = require("...path");`

To make a simple test with matching against expected result type:

```
test("describe what the test is about", () => {
let result = \your function return value or expression to test e.g. getCommission(1000, 'cash_in', 'natural');
let expected = \expected value e.g. 30
expect(result).toBe(expected);
});
```


`test` binding is available globally in Jest

  

For more custom properties, refer to the Jest docs: https://jestjs.io/docs/en/getting-started

  

  

# Detailed explanation of functions:

  
`/modules` - directory which contains all of the modules used by `app.js`

The only tangledness of this program is the configuration object which is used by 3 functions: `app.js`, `operate()` & `getCommission()`. Without that configuration object, the program will not operate. Apart from that every other module used for pure calculations can operate without the need of this config object.
There are 2 versions of it - the hardcoded one which is found in `/modules/operationsEur.js` and the api called found in `/modules/fetchConfiguration` which is called when typing `$ node app [path to input.json]`. The test suits use the hardcoded version to mock the config.

- Data flow

  - `app.js` - asynchronous function used as a mediator between the input file, the configuration logic, and the computed results. It's job is to print computed commission from function 'operate' to stdout using side effects (this function cant be tested with pure return values)

  - `operate()` - loops over each transaction | stores state for "cash_out" operation | builds up array of results | uses external configuration logic

  - `getDate()` - returns the week for the transaction date (since an anchor date)

  - `getCommission()` - calculates commission based on conditions & values contained in the configuration object (either fetched or hardcoded)

  - `formatValue()` - formats value to a string representative
  
`app.js` is is called first when running `$ node app [path to input.json]`. It works asynchronously because it relies on external data api call, which uses as a configuration object to pass for function `operate()`.
Function `operate()` makes use for a part of the logic that is contained in the configuration object. It prepares an array for the results of each operation & a state object to remember week limits of specific users & operations types. It then loops over the input transactions. In the loop, each transaction key-values are passed to `getCommission()` function along with the configuration object to calculate the commission fee based on logical conditions. Function `operate()` stores a state for a "cash_out" operation of a "natural" person and uses the `getDate()` function to determine the week of the transaction date . The commission value is then passed to `formatValue()` to be formatted to a string representative and then pushed to the result array. The resulting array is returned
  

## Functions:

  

#### `getTime()`:

* description:
used for determining the week or week day for an arbitrary date
  

- arguments:
  - yy [`Number`], (year)

  - mm [`Number`], (month)

  - dd [`Number`] (day)

  

* dependencies:
none

  

* return value:
[`Object`]
```
{
year: [Number], (Input year)
weekday: [String], (which day of the week corresponds to the input date)
weeksSinceAnchor: [Number] (how many weeks have passed between the input date and the anchor date which is 1582)
}
```

  

#### `getCommission()`:

  

* description:
calculates commission based on conditions

  

* arguments:
  * value: [`Number`], (amount of money "EUR" only supported for now)

  * operationType: [`String`], (cash_in or cash_out)

  * personType: [`String`], (natural or juridical)

  * config: [`Object`] `[optional]` default: `hardcodedConfig` (config file for the currency and logic)

  

* dependencies:
  * configuration object (either fetched from external source or hardcoded)

  

* return value:
[`Number`] (calculated commission fee based on conditions)

  

  

#### `formatValue()`:

* description:
rounds commission amount to the smallest currency item and formats it to a string representative

  

* arguments:

  * value: [`Number`], (commission value)

  * currency [`optional`]: [`String`]  `default: "EUR"` (currency format)

  

  

* dependencies:
none

  

* return value:
[`String`] (string representative for the commission fee)

  

#### `operate()`: (Wrapper function)

  

* description:
loops over the input data and calculates commission for each transaction
Stores a state for "cash_out" operation of a natural person

  

* arguments:
  * input: [`Array`] (array with objects representing transactions with key values)
  * operationsConfig: [`Object`] [`optional`] | default: `hardcodedConfig` (object representing logical conditions & values)

  

* dependencies:

  * formatValue [Function]

  * getDate [Function]

  * getCommission [Function]

  * operationConfig [Object] (configuration object)  

* return value:
[`Array`] (Array with String values representing commission fees for each operation)

#### `fetchConfigApi()`:

* description:
Asynchronous function which fetches external data source through the built-in `http` module of NodeJs. The resolved call is used for building the configuration object

* arguments:
    none

* dependencies:
  * `http` module

* return value:
[`Object`] (Object representing values of the logical conditions)
```
{
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
}
```

-------------------

Pepi Trifonov