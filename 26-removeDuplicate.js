/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length === 0) return 0;

    let idx = 1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < nums[i + 1]) {
            nums[idx] = nums[i + 1];
            idx++;
        }
    }
    // return idx;
    return nums;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
