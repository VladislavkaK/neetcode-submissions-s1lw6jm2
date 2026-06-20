class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    splitArray(nums, k) {
        const canSplit = (largest) => {
            let subarray = 1,
                curSum = 0;
            for (const num of nums) {
                curSum += num;
                if (curSum > largest) {
                    subarray++;
                    if (subarray > k) return false;
                    curSum = num;
                }
            }
            return true;
        };

        let l = Math.max(...nums);
        let r = nums.reduce((a, b) => a + b, 0);
        let res = r;

        while (l <= r) {
            const mid = Math.floor(l + (r - l) / 2);
            if (canSplit(mid)) {
                res = mid;
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }
        return res;
    }
}
