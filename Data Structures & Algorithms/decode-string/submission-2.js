class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
        let stringStack = [];
        let countStack = [];
        let cur = '';
        let k = 0;

        for (let c of s) {
            if (!isNaN(c)) {
                k = k * 10 + parseInt(c, 10);
            } else if (c === '[') {
                stringStack.push(cur);
                countStack.push(k);
                cur = '';
                k = 0;
            } else if (c === ']') {
                const temp = cur;
                cur = stringStack.pop();
                const count = countStack.pop();
                cur += temp.repeat(count);
            } else {
                cur += c;
            }
        }

        return cur;
    }
}
