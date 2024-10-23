// Example 1:
// Input:
// Problem Statement: Given an integer array arr, find the contiguous subarray (containing at least one number) which
// has the largest sum and returns its sum and prints the subarray.
let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let maxSum = Number.MIN_VALUE;
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    let sum = 0;
    for (let k = i; k <= j; k++) {
      sum += arr[k];
    }

    maxSum = Math.max(sum, maxSum);
  }
}

console.log("Maximum sum: using 3 loop , tc O(N^3) , max sum", maxSum);

// optimizing above solution using only two loops we are removing third loop
let maxSum2 = Number.MIN_VALUE;
for (let i = 0; i < arr.length; i++) {
  let sum = 0;
  for (let j = i; j < arr.length; j++) {
    sum += arr[j];
    maxSum2 = Math.max(maxSum2, sum);
  }
}

console.log("Maximum sum: using 2 loop , tc O(N^2) , max sum", maxSum2);

// now using an optima solution
// We are going to use a sing loop only
// on each iteration we will add the element if element sums goes negative we will assign  sum =0

let maxSum3 = Number.MIN_VALUE;
let currentSum = 0;
for (let ele of arr) {
  currentSum += ele;

  if (currentSum > maxSum3) {
    maxSum3 = currentSum;
  }
  if (currentSum < 0) {
    currentSum = 0;
  }
}

console.log("lMaximum sum: using single loop , tc O(N)", maxSum3);
