// Rotate Image by 90 degree

// 196

// 8
// Problem Statement: Given a matrix, your task is to rotate the matrix 90 degrees clockwise.

// Note: Rotate matrix 90 degrees anticlockwise

// Examples
// Example 1:
// Input:
//  [[1,2,3],[4,5,6],[7,8,9]]

// Output
// : [[7,4,1],[8,5,2],[9,6,3]]

// Explanation:
//  Rotate the matrix simply by 90 degree clockwise and return the matrix.

// Example 2:
// Input:
//  [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]

// Output:
// [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

// Explanation:
//  Rotate the matrix simply by 90 degree clockwise and return the matrix

/**
 *
 * Brute force approach
 * we will a create  a matrix of n*n size , we will copy first row of matrix to last column of new matrix
 * second to middle to middle and similarly all
 */

input = [
  [15, 13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7, 10, 11],
];

const rotateMatrix = (input) => {
  let newMatrix = Array.from({ length: 4 }, () =>
    new Array({ length: input[0].length }).fill(0)
  );

  let row = input.length;
  let col = input[0].length;
  for (let rowIndex = 0; rowIndex < row; rowIndex++) {
    for (let colIndex = 0; colIndex < col; colIndex++) {
      newMatrix[colIndex][col - rowIndex - 1] = input[rowIndex][colIndex];
    }
  }

  console.log("newMatrix", newMatrix);
};
console.log("input", input);
rotateMatrix(input);

/**
 * we will optimize the above solution's space complexity
 * instead of creating a new array of , we will directly modify the
 * array
 */

/**
 * Approach 
 * input [
  [ 15, 13, 2, 5 ],
  [ 14, 3, 4, 1 ],
  [ 12, 6, 8, 9 ],
  [ 16, 7, 10, 11 ]
]
output  [
  [ 16, 12, 14, 15 ],
  [ 7, 6, 3, 13 ],
  [ 10, 8, 4, 2 ],
  [ 11, 9, 1, 5 ]
]
  from the output we can see we can get the same result by transposing the same 
  matrix and reversing each row 

Approach 
for creating a transpose which we can do by using two loops 
second loop j start with 0  to i 
swap element arr[i][j] ,arr[j][i]


after the transpose , we need to reverse each row 
 */

const optimizedMatrixSolution = (input) => {
  let row = input.length;
  let col = input[0].length;
  for (let rowIndex = 0; rowIndex < row; rowIndex++) {
    for (let colIndex = rowIndex; colIndex < col; colIndex++) {
      let temp = input[rowIndex][colIndex];
      input[rowIndex][colIndex] = input[colIndex][rowIndex];
      input[colIndex][rowIndex] = temp;
    }
  }
  for (let rowIndex = 0; rowIndex < row; rowIndex++) {
    input[rowIndex].reverse();
  }
  console.log("optimizedMatrixSolution", input);
};

let input1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log("input", input1);
optimizedMatrixSolution(input1);
