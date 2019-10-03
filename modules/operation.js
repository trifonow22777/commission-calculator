const getDate = require('./date.js'); // date object (*no 'new Date-s' used) (for stateful purposes) Shall be used to compare transaction dates as to determine whether the user exceeded its week limit
const getCommission = require('./getCommission'); // calculate commmission from incoming data
const formatValue = require('./formatValue.js'); // formats the commission to a string representative
const operationsEur = require('./operationsEur'); // operations logic for Eur

const operate = function operateInput(input) {
  let usersData = new Map(); // create a state object (map is best suitable)
  let commissions = []; // create an array that will be used to push the commission values

  for (let i = 0; i < input.length; i++) {
    let {date, operation, type, user_id, user_type} = input[i];
    
    if (type === 'cash_out' && user_type === 'natural') {
        let [yy, mm, dd] = date.split('-');
        let week = getDate(Number(yy), Number(mm), Number(dd)).weeksSinceAnchor;
        
        if (usersData.has(`${week}-${user_id}`)) { // if theres already a log fot this week
          let state = usersData.get(`${week}-${user_id}`); // fetch the state of this user in this week
          let lastFreeLimit = state[state.length - 1].freeLimitLeft; // fetch the latest free limit amount left
          let newFreeLimitLeft = lastFreeLimit - operation.amount; // calculate the new free limit
          let exceededAmount = (newFreeLimitLeft < 0) ? (operation.amount - lastFreeLimit) : 0; // calculate exceeding amount *if any
          let commission = getCommission(exceededAmount >= 0 ? exceededAmount : operation.amount, type, user_type, operationsEur); // calculate commission
          let newState = [{freeLimitLeft: newFreeLimitLeft < 0 ? 0 : newFreeLimitLeft}]; // generate new state
        
          usersData.set(`${week}-${user_id}`, state.concat(newState)); // concatenate the new state to the log // No direct mutations
          
          commissions.push(formatValue(commission)); // push log to the array
          continue;
        }
        let freeLimitLeft = operationsEur.cashOut.natural.weekLimit - operation.amount; // calculate free limit
        let exceededAmount = (freeLimitLeft < 0) ? (operation.amount - operationsEur.cashOut.natural.weekLimit) : 0; // calculate exceeding amount if any
        let commission = getCommission(exceededAmount >= 0 ? exceededAmount : operation.amount, type, user_type, operationsEur); // calculate commission
       
        usersData.set(`${week}-${user_id}`, [{freeLimitLeft: freeLimitLeft < 0 ? 0 : freeLimitLeft}]); // save a state // make freeLimitLeft: 0 if it is exceeded with a negative number
        
        commissions.push(formatValue(commission)); /// push log to the array
        continue;
      }
    // normal case
    
    let commission = getCommission(operation.amount, type, user_type, operationsEur); // calculate commision for a stateless case
    commissions.push(formatValue(commission)); // push log to the array
  }
  return commissions;
}

module.exports = operate;
