// bubble sort
let input = [13, 46, 24, 52, 20, 9];
let input2 = [2, 4, 8, 9, 0];

// for (let i = input.length - 1; i >= 1; i--) {
//   for (let j = 0; j < i; j++) {
//     if (input[j] > input[j + 1]) {
//       let temp = input[j];
//       input[j] = input[j + 1];
//       input[j + 1] = temp;
//     }
//   }
//   console.group(input);
// }

// console.log(input);

// tc

// n + n-1+n-2 + n-3 + ...3+2+1 == n*(n+1)/2 ~ n^2

// after optimization

function BubbleSortWithOptimization(input) {
  for (let i = input.length - 1; i >= 1; i--) {
    let swap = 0;

    for (let j = 0; j < i; j++) {
      if (input[j] > input[j + 1]) {
        let temp = input[j];
        input[j] = input[j + 1];
        input[j + 1] = temp;
        swap = 1;
      }
    }
    if (swap === 0) {
      break;
    }
    console.group(input);
  }
}

// let z = [2, 4, 5, 6, 7, 8, 9];
// BubbleSortWithOptimization(z);
// BubbleSortWithOptimization(input);
// console.log("z", z);

function InsertionSort(input) {
  for (let index = 0; index < input.length; index++) {
    let sortIndexUpperLimit = index;
    while (
      sortIndexUpperLimit > 0 &&
      input[sortIndexUpperLimit - 1] > input[sortIndexUpperLimit]
    ) {
      let temp = input[sortIndexUpperLimit - 1];
      input[sortIndexUpperLimit - 1] = input[sortIndexUpperLimit];
      input[sortIndexUpperLimit] = temp;

      sortIndexUpperLimit--;
      console.log(input);
    }
  }
  console.log("input ", input);
}
InsertionSort(input2);

// time complexity  worst n^2
// average n^2
// best case n
