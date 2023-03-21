// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
  // Your code goes here...
  var Acct = [];
  var count = 0;
  
  for (var elem in array) {
    for (var unit in array[elem].name) {
      if (array[elem].name[unit] == letter.toUpperCase() || array[elem].name[unit] == letter.toLowerCase() && count == 0) {
        Acct.push(array[elem].name);
        count = 1;
      }
    }
    count = 0;
  }
  return Acct;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
