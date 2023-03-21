
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  var sumBal = 0;
  var sumDep = 0;
  var sumWith = 0;

  var acct = [];

  for (var elem in array) {
    for (var unit1 in array[elem].deposits) {
      sumDep += array[elem].deposits[unit1];
    }
    for (var unit1 in array[elem].withdrawals) {
      sumWith += array[elem].withdrawals[unit1];
    }
    sumBal = sumDep - sumWith;
    if (sumBal != array[elem].balance) {
      acct.push(array[elem]);
    }
    sumBal = 0;
    sumDep = 0;
    sumWith = 0;
  }
  return acct;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
