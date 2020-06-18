/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const store = {};
    for (let i = 0; i < nums.length; i++) {
        store[nums[i]] = i;
    }

    for (let i = 0; i < nums.length; i++) {
        const rest = target - nums[i];
        if (store.hasOwnProperty(rest) && store[rest] != i) {
            return [i, store[rest]];
        }
    }
};
