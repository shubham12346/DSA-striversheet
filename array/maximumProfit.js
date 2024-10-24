// Example 1:
// Input:
// You want to maximize your profit by choosing a single day to buy one
//  stock and choosing a different day in the
// future to sell that stock. Return the maximum profit you can
// achieve from this transaction. If you cannot achieve any profit, return 0.

let prices = [7, 1, 5, 3, 6, 4];

// Example 2:
// Input:
let prices2 = [7, 6, 4, 3, 1];

// I have find maximum difference between two element in ascending order
// I will iterate a loop for each element and find the max difference
// I will start with first loop for each element
// In the second loop I will do calculation which is a[i]- a[j],i ,j =i+1,store it in
// max profit if no profit then return 0 ;

const calculateMaxPrice = (prices) => {
  let maxProfit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      maxProfit = Math.max(maxProfit, prices[j] - prices[i]);
    }
  }
  return maxProfit;
};

console.log("maxProfit : ", calculateMaxPrice(prices));
console.log("maxProfit : ", calculateMaxPrice(prices2));

// Optimal approach
// we will traverse the array , taking first one as minimum , if find greater than it then
// store the difference as max profit other wise update the minimum

const calculateMaxPriceOptimized = (prices) => {
  let minElement = prices[0],
    maxPrice;
  for (let i = 1; i < prices.length; i++) {
    if (minElement < prices[i]) {
      maxPrice = Math.max(maxPrice, prices[i] - minElement);
    }
    minElement = prices[i];
  }
  return maxPrice || 0;
};

console.log("max price optimized ", calculateMaxPrice(prices));
console.log("max price optimized2 ", calculateMaxPrice(prices2));
