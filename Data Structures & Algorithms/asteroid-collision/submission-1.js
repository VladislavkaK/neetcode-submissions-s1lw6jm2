class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        const stack = [];

        for (let asteroid of asteroids) {
            while (stack.length && asteroid < 0 && stack[stack.length - 1] > 0) {
                const diff = asteroid + stack[stack.length - 1];

                if (diff < 0) {
                    stack.pop();
                } else if (diff > 0) {
                    asteroid = 0;
                } else {
                    asteroid = 0;
                    stack.pop();
                }
            }

            if (asteroid !== 0) {
                stack.push(asteroid);
            }
        }

        return stack;
    }
}
