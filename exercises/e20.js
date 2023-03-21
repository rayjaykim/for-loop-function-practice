
// EXERCISE 20
// Return and array of 2 arrays
// (1 - an array of names that contain "a" in name, 2 - an array of names that don't have 'a' in name)
// separateNamesWithAFromRest(["jon", "alice", "andrew", "mark", "jimmy"]) -> [["alice", "andrew", "mark"], ["jon", "jimmy"]]
// NOTE: You MUST use double/nested FOR loop to solve this exercise. The array.includes() method is NOT allowed.

export function separateNamesWithAFromRest(array) {
  // Your code goes here...
  var aName = [];
  var otherName = [];
  var newNames = [];
  var count = 0;

  for (var elem in array) {
    for (var unit in array[elem]) {
      if (array[elem][unit] == 'a' || array[elem][unit] == 'A' && count == 0) {
        aName.push(array[elem]);
        count = 1;
      }
    }
    if (count == 0) {
      otherName.push(array[elem]);
    }
    count = 0;
  }
  newNames.push(aName);
  newNames.push(otherName);
  return newNames;
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-20"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
