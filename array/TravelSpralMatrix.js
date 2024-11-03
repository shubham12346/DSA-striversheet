// Spiral Traversal of Matrix

// 188

// 2
// Problem Statement: Given a Matrix, print the given matrix in spiral order.

// Examples:

// Example 1:
let Matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

// Outhput: 1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10.
// Explanation: The output of matrix in spiral form.

// Example 2:
// Input: Matrix[][] = { { 1, 2, 3 },
// 	              { 4, 5, 6 },
// 		      { 7, 8, 9 } }

// Output: 1, 2, 3, 6, 9, 8, 7, 4, 5.
// Explanation: The output of matrix in spiral form.

/**
 * Approach
 * we will check top<= bottom and left <= right so to check if it is not a singular row or column matrix
 * we will use four variable top bottom, left and right pointing four sides of matrix
 * we will travel form row start to row end using top and right pointer
 * we will travel from column last top to end using right and bottom pointer
 * we will travel last row using  bottom and left pointer also check if top<= bottom
 * similarly we will travel  first column using left and top pointer and check if(left<= right) , so it does not cross already traversed element
 */

const spiralOrder = (matrix) => {
  let row = matrix.length;
  let top = 0,
    left = 0,
    right = row - 1,
    bottom = row - 1;
  let traverseInput = [];
  while (top <= bottom && left <= right) {
    // traverse from start to end first row

    for (let i = left; i <= right; i++) {
      traverseInput.push(matrix[top][i]);
    }
    top++;

    // traverse from last column second top to bottom element

    for (let i = top; i <= bottom; i++) {
      traverseInput.push(matrix[i][bottom]);
    }
    right--;
    // traveling reverse from right to left in last column
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        traverseInput.push(matrix[bottom][i]);
      }
      bottom--;
    }
    // traversing first column form bottom to top

    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        traverseInput.push(matrix[i][left]);
      }
      left++;
    }
  }
  return traverseInput;
};

// Test Cases
console.log("spiralOrder", spiralOrder(Matrix));
