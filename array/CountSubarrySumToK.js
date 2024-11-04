/**
 * Example 1:
Input Format:
 N = 4, array[] = {3, 1, 2, 4}, k = 6
Result:
 2
Explanation:
 The subarrays that sum up to 6 are [3, 1, 2] and [2, 4].

Example 2:
Input Format:
 N = 3, array[] = {1,2,3}, k = 3
Result:
 2
Explanation:
 The subarrays that sum up to 3 are [1, 2], and [3].
 */

// Approach One

const countSumToK = (input, k) => {
  let count = 0;
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    sum = 0;
    for (let j = i; j < input.length; j++) {
      sum += input[j];
      if (sum == k) {
        count++;
      }
    }
  }
  return count;
};

let input = [1, 2, 3],
  k = 3;
console.log("Approach one t.c O(n^2)", countSumToK(input, k));

const countSumToKOptimize = (input, k) => {
  let count = 0;
  let prefix_Sum = 0;
  let mapArr = new Map();
  mapArr.set(0, 1);
  for (let ele of input) {
    prefix_Sum += ele;

    if (mapArr.has(prefix_Sum - k)) {
      count += mapArr.get(prefix_Sum - k);
    }

    if (mapArr.has(prefix_Sum)) {
      let prevCount = mapArr.get(prefix_Sum);
      mapArr.set(prefix_Sum, prevCount++);
    } else {
      mapArr.set(prefix_Sum, 1);
    }
  }
  return count;
};

console.log(
  "countSumToKOptimize t.c O(N) , ",
  countSumToKOptimize([1, 2, 3], 3)
);
