// Problem Statement: Given an array, print all the elements which are leaders. A Leader is an element that is greater than all of the elements on its right side in the array.

// Examples
// Example 1:
// Input:

//  arr = [4, 7, 1, 0]
// Output
// :
//  7 1 0
// Explanation:

//  Rightmost element is always a leader. 7 and 1 are greater than the elements in their right side.

/*
Approach 
I will use two loop (nested ) traverse first loop to all element 
inside first loop initialize a boolean variable and on the iteration inside 
second loop  compare first element with all the element , if any element greater 
than first element , make flag as false and break that loop else 
after the lop end just check if flag is true , if it is then push the answer and the last answer will be the leader 
*/

let input = [4, 7, 1, 0];
let input2 = [10, 22, 12, 3, 0, 6];
const findRightMostGreatest = (input) => {
  let greatest = [];
  for (let i = 0; i < input.length; i++) {
    let flag = true;
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] < input[j]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      greatest.push(input[i]);
    }
  }
  return greatest;
};

console.log("find Right Greatest ", findRightMostGreatest(input));
console.log("find Right Greatest ", findRightMostGreatest(input2));

// optimal solution
/* 
we can optimized it and remove the nested loop 
since last element is always the leader we store max as last element 
we traverse the array in reverse 
we start with n-2 , compare with current max , current is greater we store it as max on the max variable 
and push the max variable to our leader   
*/
const findRightMostGreatestOptimized = (input) => {
  let maxEle = input[input.length - 1];
  let leader = [];
  leader.push(maxEle);
  for (let i = input.length - 2; i >= 0; i--) {
    if (input[i] > maxEle) {
      maxEle = input[i];
      leader.push(maxEle);
    }
  }

  return leader;
};

console.log(
  "find Right Greatest Optimized ",
  findRightMostGreatestOptimized(input)
);
console.log(
  "find Right Greatest Optimized",
  findRightMostGreatestOptimized(input2)
);
