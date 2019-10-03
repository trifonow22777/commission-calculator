
  

# Commission calculator from assignment

  

  

## Environment:

nodeJs 10.16.0 or higher

  

  

## Running the program

(no 3rd party libraries & modules required except for the testing suite). Open your os terminal and run:

`$ node app [path to input file]`
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

  

Create a file with the name of the function you want to test followed by `.test.js` e.g. `formatValue.test.js`

**.test.js is important !**  

Inside the file, require the function you want to be tested using the CommonJs syntax for NodeJs e.g.

`const <NameOfFunction> = require("...path");`

To make a simple test with matching against expected result type:

```
test("describe what the test is about", () => {
let result = \your function return value or expression to test e.g. formatValue(700);
let expected = \expected value e.g. "7.00"
expect(result).toBe(expected);
});
```

>Note:

**If you want to test the "getCommission" function separately, require the configuration file of the currency also!**

**Configuration file is `/modules/operationsEur.js`!**


  
  

`test` binding is available globally in Jest

  

For more custom properties, refer to the Jest docs: https://jestjs.io/docs/en/getting-started

  

  

# Detailed explanation of functions:

  

  

There are 4 functions and 1 configuration file.
1 main function which depends on the other 3 + the configuration object (the other 3 functions do not depend on the wrapper function and could operate separate from each other).
Configuration object is used by the wrapper function "operate" and "getCommission" function to calculate commission based on conditions.
  

- Data flow

  - `operate()` - loops over each transaction | stores state for "cash_out" operation | builds up array of results

  - `getDate()` - returns the week for the transaction date (since the anchor date)

  - `getCommission()` - calculates commission based on conditions

  - `formatValue()` - formats value to a string representative

  

Function `operate()` prepares an array for the results of each operation. It then loops over the input transactions. Then passes the key-values to `getCommission()` function to calculate the commission fee based on logical conditions. Function `operate()` stores a state for a "cash_out" operation of a "natural" person and uses the `getDate()` function to determine the week of the transaction date . The commission value is then passed to `formatValue()` to be formatted to a string representative and then pushed to the result array. The resulting array is returned

  

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

  * config: [`Object`] (config file for the currency and logic)

  

* dependencies:
none

  

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

  

* dependencies:

  * formatValue [Function]

  * getDate [Function]

  * getCommission [Function]

  * operationConfig [Object] (configuration for the currency)

  

* return value:
[`Array`] (Array with String values representing commission fees for each operation)

-------------------

Pepi Trifonov
