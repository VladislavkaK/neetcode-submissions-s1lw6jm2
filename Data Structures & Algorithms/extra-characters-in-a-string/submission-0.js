class Solution {
    /**
     * @param {string} s
     * @param {string[]} dictionary
     * @return {number}
     */
    minExtraChar(s, dictionary) {
        const n = s.length;
        const dp = new Array(n + 1).fill(0);

        for (let i = n - 1; i >= 0; i--) {
            dp[i] = 1 + dp[i + 1];

            for (const word of dictionary) {
                if (i + word.length <= n && s.slice(i, i + word.length) === word) {
                    dp[i] = Math.min(dp[i], dp[i + word.length]);
                }
            }
        }

        return dp[0];
    }
}
