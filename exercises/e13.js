
// EXERCISE 13
// Return an array of bank accounts that have a sum of deposits less than 2000 or no deposits at all
// Array example: bankAccounts in /data/data.js
// getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) => [3432, 43242.34, 23432]

export function getAllAccountsWithSumsOfDepositsLess2000(array) {
  // Your code goes here...
  var acct = [];
  var sum = 0;

  for (var elem in array) {
    if (array[elem].deposits == 0) {
      acct.push(array[elem]);
    } 
    else {
      for (var unit in array[elem].deposits) {
        sum += array[elem].deposits[unit];
      }
      if (sum < 2000) {
        acct.push(array[elem]);
      }
      sum = 0;
    }
  }
  return acct;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
