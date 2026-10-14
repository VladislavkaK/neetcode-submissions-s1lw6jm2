class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        const res = [];

        const dfs = (start, comb) => {
            if (comb.length === k) {
                res.push([...comb]);
                return;
            }

            for (let i = start; i <= n; i++) {
                comb.push(i);
                dfs(i + 1, comb);
                comb.pop();
            }
        };

        dfs(1, []);

        return res;
    }
}
