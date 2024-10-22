let nums = [2, 2, 1, 1, 1, 2, 2];

let maxNumCount = {};

for (let num of nums) {
  if (maxNumCount[num]) {
    maxNumCount[num]++;
  } else {
    maxNumCount[num] = 1;
  }
}
console.log("maxNumCount", maxNumCount);
let key, value;
for (let [key, value] of Object.entries(maxNumCount)) {
  if (value > 3) {
    console.log("Number:", key, "Count:", value);
    break;
  }
}

// designing an optimal solutions

// we will loop through the array , we will have two element count and element
// starting with first element , count  will be 1 and element will be first one ,
//  now in each iteration if element is same then count will increase , if different then decrease
// and if 0 , then it will change the element to current element and increase count to 1

const returnMaxCountElement = (arr) => {
  let count = 0,
    element;
  for (let ele of arr) {
    if (count === 0) {
      count++;
      element = ele;
    } else if (ele === element) {
      count++;
    } else {
      count--;
    }
  }

  let checkCountOfElement = 0;
  for (let ele of arr) {
    if (ele === element) {
      checkCountOfElement++;
    }
  }
  console.log("element", element);
  if (checkCountOfElement > Math.floor(arr.length / 2)) {
    return element;
  }
  return -1;
};

const ans = returnMaxCountElement(nums);
