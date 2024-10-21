let arr = [0, 2, 1, 0, 0, 0, 1, 2, 2, 1];

// using dutch national flag algorithm
function SortArrayWithDutcuhNationalFlagAlog(arr) {
  let low = 0,
    mid = 0,
    high = arr.length - 1;
  while (mid <= high) {
    if (arr[mid] === 0) {
      swap(arr, mid, low);
      mid++;
      low++;
    } else if (arr[mid] == 1) {
      mid++;
    } else {
      swap(arr, mid, high);
      high--;
    }
  }

  return arr;
}

function swap(arr, left, right) {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
}

const sortedArray = SortArrayWithDutcuhNationalFlagAlog(arr);
console.log(sortedArray);
