class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let res = [];

        const dfs = (perm, nums, pick) => {
            if (perm.length === nums.length) {
                res.push([...perm]);
                return;
            }

            for (let i = 0; i < nums.length; i++) {
                if (!pick[i]) {
                    perm.push(nums[i]);
                    pick[i] = true;
                    dfs(perm, nums, pick);
                    perm.pop();
                    pick[i] = false;
                }
            }
        };

        dfs([], nums, new Array(nums.length).fill(false));

        return res;
    }
}
