class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let res = 0;
        let count = 0;

        for (let i = 0; i < nums.length; i++) {
            if (count === 0) {
                res = nums[i];
            }

            if (nums[i] === res) {
                count++;
            } else {
                count--;
            }
        }

        return res;
    }
}
