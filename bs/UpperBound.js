// Implement Upper Bound

// 73

// 5
// Problem Statement: Given a sorted array of N integers and an integer x, write a program to find the upper bound of x.

// Pre-requisite: Binary Search algorithm

// Examples
// Practice:
// Solve Problem
// code-studio
// Disclaimer: Don’t jump directly to the solution, try it out yourself first.

// Solution:
// In the preceding article, we comprehensively explored the implementation of the Binary Search algorithm and the lower bound algorithm.

// The primary objective of the Binary Search algorithm is to efficiently determine the appropriate half to eliminate, thereby reducing the search space by half. It does this by determining a specific condition that ensures that the target is not present in that half.

// In this article, we will learn how to implement the upper bound algorithm using a slight modification of the Binary Search algorithm.

// What is Upper Bound?
// The upper bound algorithm finds the first or the smallest index in a sorted array where the value at that index is greater than the given key i.e. x.

// The upper bound is the smallest index, ind, where arr[ind] > x.

// But if any such index is not found, the upper bound algorithm returns n i.e. size of the given array. The main difference between the lower and upper bound is in the condition. For the lower bound the condition was arr[ind] >= x and here, in the case of the upper bound, it is arr[ind] > x.

let arr = [3, 5, 8, 9, 15, 19];
let n = 6,
  x = 9;

const upperBound = (nums, x) => {
  let left = 0;
  let right = n - 1;
  let result = -1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] > x) {
      result = nums[mid];
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return result;
};

console.log(
  "upper bound  for x : ",
  x,
  "in array: ",
  arr,
  " is : ",
  upperBound(arr, x)
); // Output: 4

function upperBound1(arr, x, n) {
  let low = 0,
    high = n - 1;
  let ans = n;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    // maybe an answer
    if (arr[mid] > x) {
      ans = mid;
      //look for smaller index on the left
      high = mid - 1;
    } else {
      low = mid + 1; // look on the right
    }
  }
  return ans;
}

let arr1 = [3, 5, 8, 9, 15, 19];
let n1 = 6,
  x1 = 9;
let ind = upperBound1(arr1, x1, n1);
console.log("The upper bound is the index:", ind);
