/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let counter = 0;
  for (let i = 0; i < nums.length - counter; ) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
      ++counter;
    } else {
      ++i;
    }
  }
};
