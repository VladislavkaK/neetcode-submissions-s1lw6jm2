class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        nums.sort((a, b) => a - b);

        const res = [];

        const dfs = (i, currentList, total) => {
            if (total === target) {
                res.push([...currentList]);
                return;
            }

            for (let j = i; j < nums.length; j++) {
                if (total + nums[j] > target) {
                    return;
                }

                currentList.push(nums[j]);
                dfs(j, currentList, total + nums[j]);
                currentList.pop();
            }
        };

        dfs(0, [], 0);

        return res;
    }
}
