class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const ROWS = board.length;
        const COLS = board[0].length;
        const path = new Set();

        const dfs = (row, col, i) => {
            if (i === word.length) return true;

            if (
                row < 0 ||
                col < 0 ||
                row >= ROWS ||
                col >= COLS ||
                board[row][col] !== word[i] ||
                path.has(`${row},${col}`)
            ) {
                return false;
            }

            path.add(`${row},${col}`);

            const res =
                dfs(row + 1, col, i + 1) ||
                dfs(row - 1, col, i + 1) ||
                dfs(row, col + 1, i + 1) ||
                dfs(row, col - 1, i + 1);

            path.delete(`${row},${col}`);

            return res;
        };

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (dfs(r, c, 0)) {
                    return true;
                }
            }
        }

        return false;
    }
}
