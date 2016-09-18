/**
 * Solving Experience E26
 * Created by Egan Nakano on 9/17/2016.
 */

const testList = [1, 2, 3, 4];

function sumFour(nums) {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
}

console.log(sumFour(testList));

function sumWhile(nums) {
  let total = 0;
  let i = 0;
  while (i < nums.length) {
    total += nums[i];
    i += 1;
  }
  return total;
}

console.log(sumWhile(testList));


function sumRecursion(nums) {
  if (nums.length === 0) {
    return 0;
  }
  return nums[0] + sumRecursion(nums.slice(1, nums.length));
}

console.log(sumRecursion(testList));

function sumTheSimpleWay(nums) {
  return _.reduce(nums, function memoizer(memo, num) { return memo + num; }, 0);
}

console.log(sumTheSimpleWay(testList));

