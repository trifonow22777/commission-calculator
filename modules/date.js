const getDate = function getCalendarTime (yy, mm, dd) {
  const countDays = function countDaysOfThisYear(yy, mm, dd) {
    if (mm === 1) return dd; // if the month is below February - theres no sese in further computing
    let avgDays = (mm - 1) * 30; // for every month before the input month we give them 30 days, later we will offset them
    let offset = mm < 9 ? Math.floor(mm / 2) : Math.ceil(mm / 2); // offset the months that has 31 days
    let february = mm > 2 ? ((yy % 4 === 0) && (!(yy % 100 === 0) || (yy % 400 === 0)) ? 1 : 2) : 0; // offset February depending on whether the year is leap
    let result = ((avgDays + offset) - february) + dd; // compute the result (!!!! INPUT DATE INCLUDED !!!! *note that as it could lead to confusion)
    return result;
  }

  const diffLeap = function leapYearsDifference(yy) {
    // function that calculates how many leap years are between anchorDate.year and the input year
    // the result shall be used to offset the total days of non leap years between the two dates (including the input date)
    let year = yy - 1; // yy - 1 (yy - 1 important, so as to exclude the current year)
    let leapAnchor = ((Math.floor(anchorDate.year / 4) - Math.floor(anchorDate.year / 100)) + Math.floor(anchorDate.year / 400)); // leap years from beginnig of Gregorian calendar to the anchor
    let leapInput = ((Math.floor(year / 4) - Math.floor(year / 100)) + Math.floor(year / 400)); // leap yaers from beginning of Gregorian calendar to the input date
    return leapInput - leapAnchor; // return the difference in days between anchor date and the input date
  }

  let anchorDate = { // Anchor date neccessary!
    year: 1582, // number must be not less than 1582 for accurate calculations // data below this date may be inaccurate, sorry..
    month: 1,
    day: 1,
    weekday: 5, // starts at Friday (5th weekday) in a Gregorian calendar
  };
  
  let daysOfYear = countDays(yy, mm, dd); // how many days have passed until the beginning of the input year to the input date (input date included)
  let leapYears = diffLeap(yy); // how many leap years (including the input year) are between the anchor and input date (for offseting purposes)
  let equalYears = yy - anchorDate.year; // how many years (leap years neglected) are between the anchor and input date
  let daysBetween = (equalYears * 365) + leapYears + daysOfYear;
  let weekday = (daysBetween + 3) % 7; // calculate the week day in 0 based indexing e.g. 0 = Monday; 1 = Tuesday...
  let weeks = Math.ceil(((daysBetween - weekday)) / 7) // get how much weeks have passed since beginning of year (current week included)
  let weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  
  return {
    year: yy,
    weekday: weekdays[weekday],
    weeksSinceAnchor: weeks, // since anchor date (current week included) !! Not since beginning of the year because Tuesday of the same week in this year may be the same week for Monday previous year
  }
}

module.exports = getDate;
