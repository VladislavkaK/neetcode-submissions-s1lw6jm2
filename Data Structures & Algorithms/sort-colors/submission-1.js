class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let zero = 0;
        let one = 0;
        let two = 0;

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];

            if (num === 0) {
                nums[two++] = 2;
                nums[one++] = 1;
                nums[zero++] = 0;
            } else if (num === 1) {
                nums[two++] = 2;
                nums[one++] = 1;
            } else if (num === 2) {
                nums[two++] = 2;
            }
        }
    }
}
