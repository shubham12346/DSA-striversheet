// Get 1:1 Mentorship

// User
// Koko Eating Bananas

// 155

// 3
// Problem Statement: A monkey is given ‘n’ piles of bananas, whereas the 'ith' pile has ‘a[i]’ bananas. An integer ‘h’ is also given, which denotes the time (in hours) for all the bananas to be eaten.

// Each hour, the monkey chooses a non-empty pile of bananas and eats ‘k’ bananas. If the pile contains less than ‘k’ bananas, then the monkey consumes all the bananas and won’t eat any more bananas in that hour.

// Find the minimum number of bananas ‘k’ to eat per hour so that the monkey can eat all the bananas within ‘h’ hours.

// Examples
// Example 1:
// Input Format:
//  N = 4, a[] = {7, 15, 6, 3}, h = 8
// Result:
//  5
// Explanation:
//  If Koko eats 5 bananas/hr, he will take 2, 3, 2, and 1 hour to eat the piles accordingly. So, he will take 8 hours to complete all the piles.

// Example 2:
// Input Format:
//  N = 5, a[] = {25, 12, 8, 14, 19}, h = 5
// Result:
//  25
// Explanation:
//  If Koko eats 25 bananas/hr, he will take 1, 1, 1, 1, and 1 hour to eat the piles accordingly. So, he will take 5 hours to complete all the piles.

let N = 5,
  a = [25, 12, 8, 14, 19],
  h = 5;

const find_max_bananas_per_hour = (arr, h) => {
  let max_bananas_per_hour = Number.MIN_VALUE;
  for (let ele of arr) {
    max_bananas_per_hour = Math.max(max_bananas_per_hour, ele);
  }
  console.log("max_bananas_per_hour", max_bananas_per_hour);
  for (let i = 1; i <= max_bananas_per_hour; i++) {
    let lowestMaximumBananasPerHour = findLowestMax(arr, i);
    console.log("lowestMaximumBananasPerHour", lowestMaximumBananasPerHour);

    if (lowestMaximumBananasPerHour <= h) {
      return i;
    }
  }
};

const findLowestMax = (arr, k) => {
  let hour = 0;
  for (let ele of arr) {
    hour += Math.ceil(ele / k);
  }
  return hour;
};

console.log("find_max_bananas_per_hour(a,h) ", find_max_bananas_per_hour(a, h));
