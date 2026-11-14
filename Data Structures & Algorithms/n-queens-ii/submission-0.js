class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    totalNQueens(n) {
        const col = new Set();
        const posDiag = new Set();
        const negDiag = new Set();
        let res = 0;

        const backtrack = (r) => {
            if (r === n) {
                res++;
                return;
            }

            for (let c = 0; c < n; c++) {
                if (col.has(c) || posDiag.has(r + c) || negDiag.has(r - c)) {
                    continue;
                }

                col.add(c);
                posDiag.add(r + c);
                negDiag.add(r - c);

                backtrack(r + 1);

                col.delete(c);
                posDiag.delete(r + c);
                negDiag.delete(r - c);
            }
        };

        backtrack(0);

        return res;
    }
}
