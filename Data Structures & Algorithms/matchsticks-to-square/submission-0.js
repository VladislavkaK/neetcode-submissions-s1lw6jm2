class Solution {
    /**
     * @param {number[]} matchsticks
     * @return {boolean}
     */
    makesquare(matchsticks) {
        const totalLength = matchsticks.reduce((a, b) => a + b, 0);

        if (totalLength % 4 !== 0) return false;

        const length = totalLength / 4;
        const sides = Array(4).fill(0);

        matchsticks.sort((a, b) => b - a);

        const dfs = (index) => {
            if (index === matchsticks.length) {
                return true;
            }

            for (let i = 0; i < 4; i++) {
                if (sides[i] + matchsticks[index] <= length) {
                    sides[i] += matchsticks[index];

                    if (dfs(index + 1)) return true;

                    sides[i] -= matchsticks[index];
                }

                if (sides[i] === 0) return false;
            }
        };

        return dfs(0);
    }
}
