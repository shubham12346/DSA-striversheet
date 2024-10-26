// Longest Consecutive Sequence in an Array

// 284

// 10
// Problem Statement: You are given an array of ‘N’ integers. You need to find the length of the longest sequence which contains the consecutive elements.

// Examples
// Example 1:
// Input:
//  [100, 200, 1, 3, 2, 4]

// Output:
//  4

// Explanation:
//  The longest consecutive subsequence is 1, 2, 3, and 4.

// Input:
//  [3, 8, 5, 7, 6]

// Output:
//  4

// Explanation:
//  The longest consecutive subsequence is 5, 6, 7, and 8.

/**
 * Approach 1
 * we will use two loop
 * first loop traverse to n and longestMax variable
 * In the second loop we will initialize count  variable 1
 * we start with i+1 , check condition  inside the loop
 * we will do a linear search to find arr[j] which is equal to arr[j]-1 increase the count
 * and compare with maxCount
 * else break the loop do it for second element
 */

// Input:
let input = [100, 200, 1, 3, 2, 4];

const linearSearch = (arr, currEle) => {
  for (let ele of arr) {
    if (ele === currEle) {
      return true;
    }
  }
  return false;
};

const longestConsecutive = (arr) => {
  let longestMax = 0;
  for (let ele of arr) {
    let count = 1;
    let currEle = ele;
    while (linearSearch(arr, currEle + 1)) {
      console.log("", currEle);
      count++;
      currEle++;
    }
    longestMax = Math.max(longestMax, count);
  }
  return longestMax;
};

// console.log(
//   "longest max with two loops , t.c O(N^2) ",
//   longestConsecutive(input)
// );

/**
 * Approach 2
 * We will sort the array first
 * We will initialize variable count and maxCount and lastElement  =arr[0]
 * we will traverse the array
 * since it is sorted we can check if arr[i]-1 === lastElement,count ++ ,lastElement = arr[i],
 * else lastElement = arr[i], count =1;
 * store the max by comparing the maxCount = Math.max(count,maxCount);
 */

const longestConsecutiveOptimized = (arr) => {
  arr.sort((a, b) => a - b);
  let count = 0;
  let maxCount = Number.MIN_VALUE;
  let lastElement = Number.MIN_VALUE;
  console.log("arr", arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] - 1 === lastElement) {
      count++;
      lastElement = arr[i];
    } else if (arr[i] !== lastElement) {
      count = 1;
      lastElement = arr[i];
    }
    maxCount = Math.max(maxCount, count);
  }

  return maxCount;
};

console.log(
  "longest max with sorted array , t.c O(N log N) ",
  longestConsecutiveOptimized(input)
);

/**
 * we will optimize the solution with the help of set data structure
 * we will create a set for input array
 * we will traverse the set and check if this current element is lowest to have a sequence
 * by checking if(!setE.has(currEll -1 )) ans inside this condition
 * we will initialize variable count =1, ele = currEle , now again
 * we will use i while loop to check while(set(ele+1))exist or not if exist replace ele with ele+1 and increase the pointer
 * this solution is similiar to approach 1st but here we using set instead of linear searching
 */

const longestConsecutiveSet = (arr) => {
  let setE = new Set(arr);
  let maxCount = 0;
  for (let ele of setE) {
    if (!setE.has(ele - 1)) {
      let count = 1;
      let currEle = ele;
      while (setE.has(currEle + 1)) {
        count++;
        currEle++;
      }
      maxCount = Math.max(maxCount, count);
    }
  }

  return maxCount;
};

console.log("longest max with set , t.c O(N) ", longestConsecutiveSet(input));
