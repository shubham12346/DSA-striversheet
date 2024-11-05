/**
 * This is the very first article of the Binary Search series. Until now, we have learned the linear search algorithm. Now, in this article, we will discuss another search algorithm i.e. the Binary Search algorithm. The flow of this article will be the following:

A real-life example of Binary Search
Coding problem example
Iterative code implementation of Binary Search
Recursive code implementation of Binary Search
Time complexity
Overflow case
A real-life example of Binary Search:
Problem statement: Assume there is a dictionary and we have to find the word “raj”.

Method 1: One of the many ways is to check every possible page of the entire dictionary and see if we can find the word “raj”. This technique is known as linear search.
Basically, we can traverse from the first till the end to find the target value in the search space i.e. the entire dictionary in our example.

Method 2: In this case, we will optimize our search by using the property of a dictionary i.e. a dictionary is always in the sorted order.

We will first try to open the dictionary in such a way that it is roughly divided into two parts. Then, we will check the left page. Now, assume the words on the left page starts with ‘s’. We can certainly say that our target word i.e. “raj” definitely comes before the words start with ‘s’. So, now, we need not search in the entire dictionary rather we will only search in the left half.
Now, we will do the same thing with the left half. First, we will divide it into 2 halves and then try to locate which half contains the word “raj”. Eventually, after certain steps, we will end up finding the word “raj”.
This is a typical real-life example of binary search. 

Note:

Binary search is only applicable in a sorted search space. The sorted search space does not necessarily have to be a sorted array. It can be anything but the search space must be sorted.
In binary search, we generally divide the search space into two equal halves and then try to locate which half contains the target. According to that, we shrink the search space size.
Coding problem example:
Problem statement: You are given a sorted array of integers and a target, your task is to search for the target in the given array. Assume the given array does not contain any duplicate numbers.

Let’s say the given array is = {3, 4, 6, 7, 9, 12, 16, 17} and target = 6.
 */

// Iterative code implementation of Binary Search

let test = [3, 4, 6, 7, 9, 12, 16, 17],
  target = 6;
let search = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
};

// Recursive Approach

const sortColorRecursive = (nums, start, end, target) => {
  if (start > end) {
    return -1;
  }
  let mid = Math.floor((start + end) / 2);

  if (nums[mid] === target) {
    return mid;
  } else if (nums[mid] < target) {
    return sortColorRecursive(nums, mid + 1, end, target);
  } else {
    return sortColorRecursive(nums, start, mid - 1, target);
  }
};

console.log("Iterative Approach ", search(test, target));
console.log(
  "Recursive Approach ",
  sortColorRecursive(test, 0, test.length - 1, target)
);
