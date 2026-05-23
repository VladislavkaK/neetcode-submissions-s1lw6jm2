class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {
        const n = nums.length;
        let l = 0;
        let r = n - 1;
        let res = n;

        while (l <= r) {
            let mid = Math.floor((r + l) / 2);

            if (nums[mid] === target) {
                return mid;
            } else if (nums[mid] > target) {
                res = mid;
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }

        return res;
    }
}
