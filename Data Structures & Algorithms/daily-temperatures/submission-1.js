class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const result = new Array(temperatures.length).fill(0);
        const stack = []; // pair: [temp, index]

        for (let i = 0; i < temperatures.length; i++) {
            let currentTemp = temperatures[i];

            while (stack.length > 0 && currentTemp > stack[stack.length - 1][0]) {
                const [stackT, stackIdx] = stack.pop();
                result[stackIdx] = i - stackIdx;
            }

            stack.push([currentTemp, i]);
        }

        return result;
    }
}
