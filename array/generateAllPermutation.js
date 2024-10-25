// num =[1,2,3] == {1,2,3},{1,3,2},{2,1,3},{2,3,1},{3,1,2} ,{3,2,1}
//1. I will use recursion for generating all the possible sets
//2. create a function and pass and arrayOfarray for storing all answers,
//3. boolean with size of array of input and actual input array
// and a current list
//4.  base is  if current list size equal to arr length , we will put the list in our array of array ans list
//5.  and return back
//6. in the main logic we will iterate to input array length
//7. check if current element is not marked using freq[i]
//8. If not then mark ,put element in the ans list call  the recursion function
//9. and remove the element from ist and unmark it after recursion call ;

const GenerateAllPermutationAlgorithm = (input, ans, freq, result) => {
  if (ans.length === input.length) {
    console.log(ans);
    result.push(new Array(...ans));
    return;
  }

  for (let i = 0; i < input.length; i++) {
    if (!freq[i]) {
      freq[i] = true;
      ans.push(input[i]);
      GenerateAllPermutationAlgorithm(input, ans, freq, result);
      ans.pop();
      freq[i] = false;
    }
  }
};

const GenerateAllPermutation = (input) => {
  let ans = [];
  let freq = new Array(input.length).fill(false);
  let result = [];
  GenerateAllPermutationAlgorithm(input, ans, freq, result);
  console.log("All the permutation ", result);
};

GenerateAllPermutation([2, 1, 3]);
