// Variety-1

// Problem Statement:

// There’s an array ‘A’ of size ‘N’ with an equal number of positive
//and negative elements. Without altering the relative order of
// positive and negative elements, you must return an array of alternately
//positive and negative values.

// Input:
// arr[] = {1,2,-4,-5}, N = 4
// Output:
// 1 -4 2 -5

// Explanation:

// Positive elements = 1,2
// Negative elements = -4,-5
// To maintain relative ordering, 1 must occur before 2, and -4 must occur before -5.

// Example 2:
// Input:
// arr[] = {1,2,-3,-1,-2,-3}, N = 6
// Output:
// 1 -3 2 -1 3 -2
// Explanation:

// Positive elements = 1,2,3
// Negative elements = -3,-1,-2
// To maintain relative ordering, 1 must occur before 2, and 2 must occur before 3.
// Also, -3 should come before -1, and -1 should come before -2.

let input1 = [1, 2, -4, -5];
let input2 = [1, 2, -3, -1, -2, 3];

//

const reArrangeArray = (input) => {
  const posNums = [];
  const negNums = [];
  for (let ele of input) {
    if (ele > 0) {
      posNums.push(ele);
    } else {
      negNums.push(ele);
    }
  }

  for (let i = 0; i < input.length / 2; i++) {
    input[2 * i + 0] = posNums[i];
    input[2 * i + 1] = negNums[i];
  }
  return input;
};

// console.log("reArrange Maximum array", reArrangeArray(input1));
// console.log("reArrange Maximum array", reArrangeArray(input2));

//  O(N) + 2 * O (N/2) ~~ O(N)

// optimal solution we will only travel the array once only

const reArrangedArrayOptimized = (input) => {
  const reArrangedArray = new Array(input.length).fill(0);
  let posIndex = 0;
  let negIndex = 1;
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      reArrangedArray[posIndex] = input[i];
      posIndex += 2;
    } else {
      reArrangedArray[negIndex] = input[i];
      negIndex += 2;
    }
  }
  return reArrangedArray;
};

console.log("rearrangedArrayOptimized", reArrangedArrayOptimized(input1));
console.log("rearrangedArrayOptimized", reArrangedArrayOptimized(input2));
