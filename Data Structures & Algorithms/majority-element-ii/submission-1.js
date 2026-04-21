class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        const n = nums.length;
        let num1 = -1;
        let num2 = -1;
        let cnt1 = 0;
        let cnt2 = 0;

        for (const num of nums) {
            if (num === num1) {
                cnt1++;
            } else if (num === num2) {
                cnt2++;
            } else if (cnt1 === 0) {
                num1 = num;
                cnt1 = 1;
            } else if (cnt2 === 0) {
                num2 = num;
                cnt2 = 1;
            } else {
                cnt1--;
                cnt2--;
            }
        }

        cnt1 = cnt2 = 0;

        for (const num of nums) {
            if (num === num1) cnt1++;
            else if (num === num2) cnt2++;
        }

        const res = [];

        if (cnt1 > Math.floor(n / 3)) res.push(num1);

        if (cnt2 > Math.floor(n / 3)) res.push(num2);

        return res;
    }
}
