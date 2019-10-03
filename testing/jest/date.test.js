const getDate = require('../../modules/date');

test('return Friday for 2019-01-11', () => {
  expect(getDate(2019, 1, 11).weekday).toBe('Fri')
});

test('return Tuesday for 2019-07-23', () => {
  expect(getDate(2019, 7, 23).weekday).toBe('Tue')
});

test('return Thursday for 2017-03-30', () => {
  expect(getDate(2017, 3, 30).weekday).toBe('Thu')
});

test('return Wednesday for 2005-11-09', () => {
  expect(getDate(2005, 11, 9).weekday).toBe('Wed')
});

test('return Tuesday for 2012-04-03', () => {
  expect(getDate(2012, 4, 3).weekday).toBe('Tue')
});

test('return Tuesday for 2000-12-05', () => {
  expect(getDate(2000, 12, 5).weekday).toBe('Tue')
});

test('return Thursday for 2018-02-15', () => {
  expect(getDate(2018, 2, 15).weekday).toBe('Thu')
});

test('return Friday for 2003-06-27', () => {
  expect(getDate(2003, 6, 27).weekday).toBe('Fri')
});

test('return Saturday for 2019-09-28', () => {
  expect(getDate(2019, 9, 28).weekday).toBe('Sat')
});

test('return Saturday for 1966-03-12', () => {
  expect(getDate(1966, 3, 12).weekday).toBe('Sat')
});

test('return Friday for 2016-08-05', () => {
  expect(getDate(2016, 8, 5).weekday).toBe('Fri')
});

// -- test whether a week is the same as the other week

test('date 2019-03-01 has to be the same week as 2019-03-03', () => {
  expect(getDate(2019, 3, 1).weeksSinceAnchor === getDate(2019, 3, 3).weeksSinceAnchor).toBe(true)
});

test('date 2019-03-03 has to be in a different week from 2019-03-04', () => {
   expect(getDate(2019, 3, 3).weeksSinceAnchor === getDate(2019, 3, 4).weeksSinceAnchor).toBe(false)
});

test('date 2019-03-04 has to be the same week as 2019-03-07', () => {
  expect(getDate(2019, 3, 4).weeksSinceAnchor === getDate(2019, 3, 7).weeksSinceAnchor).toBe(true)
});

test('date 2012-11-12 has to be the same week as 2012-11-17', () => {
  expect(getDate(2012, 11, 12).weeksSinceAnchor === getDate(2012, 11, 17).weeksSinceAnchor).toBe(true)
});

test('date 2012-11-17 has to be in a different week from 2012-11-22', () => {
  expect(getDate(2012, 11, 17).weeksSinceAnchor === getDate(2012, 11, 22).weeksSinceAnchor).toBe(false);
})

test('date 2012-11-22 has to be the same week as 2012-11-25', () => {
  expect(getDate(2012, 11, 22).weeksSinceAnchor === getDate(2012, 11, 25).weeksSinceAnchor).toBe(true);
});

test('date 2012-11-25 has to be in a different week from 2012-11-27', () => {
  expect(getDate(2012, 11, 25).weeksSinceAnchor === getDate(2012, 11, 27).weeksSinceAnchor).toBe(false);
});

test('date 2007-08-01 has to be the same week as 2007-08-05', () => {
  expect(getDate(2007, 8, 1).weeksSinceAnchor === getDate(2007, 8, 5).weeksSinceAnchor).toBe(true);
});

test('date 2007-08-05 has to be in a different week from 2007-08-20', () => {
  expect(getDate(2007, 8, 5).weeksSinceAnchor === getDate(2007, 8, 20).weeksSinceAnchor).toBe(false);
});

test('date 2007-08-20 has to be the same week as 2007-08-24', () => {
  expect(getDate(2007, 8, 20).weeksSinceAnchor === getDate(2007, 8, 24).weeksSinceAnchor).toBe(true);
});

test('date 2007-08-24 has to be the same week as 2007-08-25', () => {
  expect(getDate(2007, 8, 24).weeksSinceAnchor === getDate(2007, 8, 25).weeksSinceAnchor).toBe(true);
});

test('date 2007-08-25 has to be the same week as 2007-08-26', () => {
  expect(getDate(2007, 8, 25).weeksSinceAnchor === getDate(2007, 8, 26).weeksSinceAnchor).toBe(true);
});

//--- 2000 dates

test('date 2000-04-05 has to be the same week as 2000-04-07', () => {
  expect(getDate(2000, 4, 5).weeksSinceAnchor === getDate(2000, 4, 7).weeksSinceAnchor).toBe(true);
});

test('date 2000-04-07 has to be the same week as 2000-04-09', () => {
  expect(getDate(2000, 4, 7).weeksSinceAnchor === getDate(2000, 4, 9).weeksSinceAnchor).toBe(true);
});

test('date 2000-04-09 has to be different week from 2000-04-15', () => {
  expect(getDate(2000, 4, 9).weeksSinceAnchor === getDate(2000, 4, 15).weeksSinceAnchor).toBe(false);
});

test('date 2000-04-15 has to be different week from 2000-04-22', () => {
  expect(getDate(2000, 4, 15).weeksSinceAnchor === getDate(2000, 4, 22).weeksSinceAnchor).toBe(false);
});

test('date 2000-04-22 has to be the same week as 2000-04-23', () => {
  expect(getDate(2000, 4, 22).weeksSinceAnchor === getDate(2000, 4, 23).weeksSinceAnchor).toBe(true);
});

test('date 2000-04-23 has to be in a different week as 2000-04-27', () => {
  expect(getDate(2000, 4, 23).weeksSinceAnchor === getDate(2000, 4, 27).weeksSinceAnchor).toBe(false);
});

// --- 2018 year tests

test('date 2018-01-11 has to be the same week as 2018-01-13', () => {
  expect(getDate(2018, 1, 11).weeksSinceAnchor === getDate(2018, 1, 13).weeksSinceAnchor).toBe(true);
});

test('date 2018-01-13 has to be in a different week from 2018-01-17', () => {
  expect(getDate(2018, 1, 13).weeksSinceAnchor === getDate(2018, 1, 17).weeksSinceAnchor).toBe(false);
});

test('date 2018-01-17 has to the same week as 2018-01-20', () => {
  expect(getDate(2018, 1, 17).weeksSinceAnchor === getDate(2018, 1, 20).weeksSinceAnchor).toBe(true);
});

test('date 2018-01-20 has to be in a different week from 2018-01-24', () => {
  expect(getDate(2018, 1, 20).weeksSinceAnchor === getDate(2018, 1, 24).weeksSinceAnchor).toBe(false);
});

// year 1990 tests

test('date 1990-10-09 has to be the same week as 1990-10-11', () => {
  expect(getDate(1990, 10, 9).weeksSinceAnchor === getDate(1990, 10, 11).weeksSinceAnchor).toBe(true);
});

test('date 1990-10-11 has to be the same week as 1990-10-14', () => {
  expect(getDate(1990, 10, 11).weeksSinceAnchor === getDate(1990, 10, 14).weeksSinceAnchor).toBe(true);
});

test('date 1990-10-14 has to be in a different week from 1990-10-17', () => {
  expect(getDate(1990, 10, 14).weeksSinceAnchor === getDate(1990, 10, 17).weeksSinceAnchor).toBe(false);
});

test('date 1990-10-20 has to be the same week as 1990-10-20', () => {
  expect(getDate(1990, 10, 20).weeksSinceAnchor === getDate(1990, 10, 20).weeksSinceAnchor).toBe(true);
});