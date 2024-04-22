function hasTargetSum(arr, target) {
  const seen = new Set();
    for (const num of arr) {
        const diff = target - num;
        if (seen.has(diff)) {
            return true;
        }
        seen.add(num);
    }
    return false;
}
// Additional test cases
console.log(hasTargetSum([3, 8, 12, 4, 11, 7], 10)); // true
console.log(hasTargetSum([22, 19, 4, 6, 30], 25)); // true
console.log(hasTargetSum([1, 2, 5], 4)); // false
console.log(hasTargetSum([5, 5], 10)); // true
console.log(hasTargetSum([-1, 0, 1, 2, -2], 0)); // true
/* 
  Write the Big O time complexity of your function here
    Time Complexity: The time complexity of this solution is O(n), 
    where n is the number of elements in the input array. 
    This is because we iterate through the array once.
    Space Complexity: The space complexity is also O(n) because, 
    in the worst case, we might store all elements of the array in the set.

*/
  
/* 
  Add your pseudocode here
      Create an empty set to store the seen numbers.
    Iterate through the array.
    For each number num in the array:
        Calculate the difference diff between the target and the current number (target - num).
        If diff is already in the set, return true.
        Otherwise, add num to the set.
    If no pair is found, return false.
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
