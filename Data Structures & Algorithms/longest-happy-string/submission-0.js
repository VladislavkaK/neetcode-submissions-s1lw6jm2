class Solution {
    /**
     * @param {number} a
     * @param {number} b
     * @param {number} c
     * @return {string}
     */
    longestDiverseString(a, b, c) {
        const rec = (max1, max2, max3, char1, char2, char3) => {
            if (max1 < max2) {
                return rec(max2, max1, max3, char2, char1, char3);
            }
            if (max2 < max3) {
                return rec(max1, max3, max2, char1, char3, char2);
            }
            if (max2 === 0) {
                return Array(Math.min(2, max1)).fill(char1);
            }

            const use1 = Math.min(2, max1);
            const use2 = max1 - use1 >= max2 ? 1 : 0;

            const res = Array(use1).fill(char1).concat(Array(use2).fill(char2));
            return res.concat(
                rec(max1 - use1, max2 - use2, max3, char1, char2, char3),
            );
        };

        return rec(a, b, c, 'a', 'b', 'c').join('');
    }
}