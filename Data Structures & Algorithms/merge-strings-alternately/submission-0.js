class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let i = 0;
        let j = 0;
        const res = [];
        const n = word1.length;
        const m = word2.length;

        while (i < n || j < m) {
            if (i < n) {
                res.push(word1[i++]);
            }

            if (j < m) {
                res.push(word2[j++]);
            }
        }

        return res.join('');
    }
}
