// Peak element in Array

// 121

// 5
// Problem Statement: Given an array of length N. Peak element is defined as the element greater than both of its neighbors. Formally, if 'arr[i]' is the peak element, 'arr[i - 1]' < 'arr[i]' and 'arr[i + 1]' < 'arr[i]'. Find the index(0-based) of a peak element in the array. If there are multiple peak numbers, return the index of any peak number.

// Note: For the first element, the previous element should be considered as negative infinity as well as for the last element, the next element should be considered as negative infinity.

// Pre-requisite: Binary Search Algorithm

// Examples
// Example 1:
// Input Format: arr[] = {1,2,3,4,5,6,7,8,5,1}
// Result: 7
// Explanation: In this example, there is only 1 peak that is at index 7.

// Example 2:
// Input Format: arr[] = {1,2,1,3,5,6,4}
// Result: 1
// Explanation: In this example, there are 2 peak numbers that are at indices 1 and 5. We can consider any of them.

// Example 3:
// Input Format: arr[] = {1, 2, 3, 4, 5}
// Result: 4
// Explanation: In this example, there is only 1 peak that is at the index 4.

let input = [1, 2, 3, 4, 5, 6, 7, 8, 5, 1];

function findPeakElement(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  if (arr[0] > arr[1]) return arr[0];
  if (arr[arr.length - 1] > arr[arr.length - 2]) return arr[arr.length - 1];

  let left = 1;
  let right = arr.length - 2;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
      return arr[mid];
    } else if (arr[mid] > arr[mid - 1]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
}

console.log("Peak element in sorted array ", findPeakElement(input));
