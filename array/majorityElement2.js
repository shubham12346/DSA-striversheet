let nums = [2, 2, 1, 1, 1, 2, 2];

let maxNumCount = {};

for (let num of nums) {
  if (maxNumCount[nums[num]]) {
    maxNumCount[nums[num]]++;
  } else {
    maxNumCount[nums[num]] = 1;
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
