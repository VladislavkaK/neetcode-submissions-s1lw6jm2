class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    islandPerimeter(grid) {
        const rows = grid.length;
        const cols = grid[0].length;

        const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

        const directions = [
            [0, 1],
            [1, 0],
            [0, -1],
            [-1, 0]
        ];

        const bfs = (r, c) => {
            const queue = new Queue([[r, c]]);

            visited[r][c] = true;

            let perimeter = 0;

            while (!queue.isEmpty()) {
                const [x, y] = queue.pop();

                for (const [dx, dy] of directions) {
                    const nx = x + dx;
                    const ny = y + dy;

                    if (
                        nx < 0 ||
                        ny < 0 ||
                        nx >= rows ||
                        ny >= cols ||
                        grid[nx][ny] === 0
                    ) {
                        perimeter++;
                    } else if (!visited[nx][ny]) {
                        visited[nx][ny] = true;
                        queue.push([nx, ny]);
                    }
                }
            }

            return perimeter;
        };

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (grid[i][j] === 1) {
                    return bfs(i, j);
                }
            }
        }

        return 0;
    }
}
