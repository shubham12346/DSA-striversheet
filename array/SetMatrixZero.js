// Problem Statement: Given a matrix if an element in the matrix is 0 then you will have to set its entire column and row to 0 and then return the matrix.

// Examples
// Examples 1:
// Input:
//  matrix=[[1,1,1],[1,0,1],[1,1,1]]

// Output:
//  [[1,0,1],[0,0,0],[1,0,1]]

// Explanation:
//  Since matrix[2][2]=0.Therefore the 2nd column and 2nd row wil be set to 0.

// Input:
//  matrix=[[0,1,2,0],[3,4,5,2],[1,3,1,5]]

// Output:
// [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

// Explanation:
// Since matrix[0][0]=0 and matrix[0][3]=0. Therefore 1st row, 1st column and 4th column will be set to 0

// Brute force approach

matrix = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];
let m1 = matrix;
let m2 = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];
const SetMatrixZero = (input) => {
  let row = input.length;
  let col = input[0].length;
  let rowZerosIndex = [];
  let colZerosIndex = [];

  for (let rowIndex = 0; rowIndex < row; rowIndex++) {
    for (let colIndex = 0; colIndex < col; colIndex++) {
      if (input[rowIndex][colIndex] === 0) {
        rowZerosIndex.push(rowIndex);
        colZerosIndex.push(colIndex);
      }
    }
  }
  for (let rowIndex = 0; rowIndex < row; rowIndex++) {
    for (let colIndex = 0; colIndex < col; colIndex++) {
      if (
        rowZerosIndex.includes(rowIndex) ||
        colZerosIndex.includes(colIndex)
      ) {
        input[rowIndex][colIndex] = 0;
      }
    }
  }

  return input;
};

console.log(
  "setMatrix zero bruteForce  with time complexity On2",
  SetMatrixZero(m1)
);

// optimal approach
/**
 * Create a empty array of same size and fill with zero
 * traverse te input matrix each element and put one in the zero matrix where element is 0 in given matrix
 * Now traverse again the original matrix
 * check if row[i] || col[i] == 1 then mark that element as zero
 *
 */

const setMatrixZeroOptimal = (input) => {
  let row = input.length;
  let col = input[0].length;
  let rowZeros = new Array(row).fill(0);
  let colZeros = new Array(col).fill(0);

  for (let rowIndex = 0; rowIndex < row; rowIndex++) {
    for (let colIndex = 0; colIndex < col; colIndex++) {
      if (input[rowIndex][colIndex] === 0) {
        rowZeros[rowIndex] = 1;
        colZeros[colIndex] = 1;
      }
    }
  }

  for (let rowIndex = 0; rowIndex < row; rowIndex++) {
    for (let colIndex = 0; colIndex < col; colIndex++) {
      if (rowZeros[rowIndex] || colZeros[colIndex]) {
        input[rowIndex][colIndex] = 0;
      }
    }
  }
  return input;
};

// console.log(
//   "setMatrix zero optimal  with time complexity O(n*m)",
//   setMatrixZeroOptimal(m2)
// );

// Optimized Appoach reducing the space complexity to O(1) we are
// going to use first row and first col as

const setMatrixZeroOptimized = (input) => {
  let row = input.length;
  let col = input[0].length;
  let firstRowZero = false;
  let firstColZero = false;
  for (let colIndex = 0; colIndex < col; colIndex++) {
    if (input[0][colIndex] === 0) {
      firstRowZero = true;
    }
  }
  for (let rowIndex = 0; rowIndex < row; rowIndex++) {
    if (input[rowIndex][0] === 0) {
      firstColZero = true;
    }
  }

  for (let rowIndex = 1; rowIndex < row; rowIndex++) {
    for (let colIndex = 1; colIndex < col; colIndex++) {
      if (input[rowIndex][colIndex] === 0) {
        input[rowIndex][0] = 0;
        input[0][colIndex] = 0;
      }
    }
  }
  for (let rowIndex = 1; rowIndex < row; rowIndex++) {
    for (let colIndex = 1; colIndex < col; colIndex++) {
      if (input[rowIndex][0] === 0 || input[0][colIndex] === 0) {
        input[rowIndex][colIndex] = 0;
      }
    }
  }

  if (firstRowZero) {
    for (let colIndex = 0; colIndex < col; colIndex++) {
      input[0][colIndex] = 0;
    }
  }
  if (firstColZero) {
    for (let rowIndex = 0; rowIndex < row; rowIndex++) {
      input[rowIndex][0] = 0;
    }
  }
  return input;
};

console.log(
  "setMatrix zero optimized  with time complexity O(n*m) and space complexity O(1)",
  setMatrixZeroOptimized(m2)
);
