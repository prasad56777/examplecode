//Write a program to find all pairs of an integer array whose sum is equal to a given number?
function findPairsWithSum(arr, Sum) {
    var pairs = [];
    var seen = new Set();
  
    for (let num of arr) {
      const complement = Sum - num;
      if (seen.has(complement)) {
        pairs.push([num, complement]);
      }
      seen.add(num);
    }
  
    return pairs;
  }
  
  // Example usage:
  const arr = [1, 2, 3, 4, 5, 6];
  const Sum = 5;
  const result = findPairsWithSum(arr, Sum);
  console.log(result); // Output: [ [ 3, 4 ], [ 2, 5 ], [ 1, 6 ] ]
  