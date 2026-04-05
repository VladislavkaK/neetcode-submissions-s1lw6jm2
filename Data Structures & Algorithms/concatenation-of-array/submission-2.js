class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const newArr = [];

        for (let i = 0; i < 2; i++) {
            for (const num of nums) {
                newArr.push(num);
            }
        }

        return newArr;
    }
}
