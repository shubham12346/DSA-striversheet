/**
 * Implement Lower Bound
Problem Statement: Given a sorted array of N integers and an integer x, write a program to find the lower bound of x.

Pre-requisite: Binary Search algorithm

Examples
Practice:
Solve Problem
code-studio
Disclaimer: Don’t jump directly to the solution, try it out yourself first.

Solution:
In the preceding article, we comprehensively explored the implementation of the Binary Search algorithm. 

The primary objective of the Binary Search algorithm is to efficiently determine the appropriate half to eliminate, thereby reducing the search space by half. It does this by determining a specific condition that ensures that the target is not present in that half.

In this article, we will learn how to implement the lower bound algorithm using a slight modification of the Binary Search algorithm. 

Let’s start.

What is Lower Bound?
The lower bound algorithm finds the first or the smallest index in a sorted array where the value at that index is greater than or equal to a given key i.e. x.

The lower bound is the smallest index, ind, where arr[ind] >= x. But if any such index is not found, the lower bound algorithm returns n i.e. size of the given array.

Brute Force Approach
Algorithm / Intuition
Naive approach (Using linear search): 

Let’s understand how we can find the answer using the linear search algorithm. With the knowledge that the array is sorted, our approach involves traversing the array starting from the beginning. During this traversal, each element will be compared with the target value, x. The index, i, where the condition arr[i] >= x is first satisfied, will be the answer.
 */

let arr = [3, 5, 8, 15, 19];
let n = 5,
  x = 9;

const lowerBound = (arr, x) => {
  let low = 0;
  let high = n - 1;
  let result = arr.length;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] >= x) {
      result = arr[mid];
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return result;
};

console.log(
  "lowerBound for x ",
  x + " in arr",
  arr,
  " is : ",
  lowerBound(arr, x)
);
