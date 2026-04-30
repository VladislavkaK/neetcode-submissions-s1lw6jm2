class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        people.sort((a, b) => a - b);

        let res = 0;
        let left = 0;
        let right = people.length - 1;

        while (left <= right) {
            let remain = limit - people[right--];

            res++;

            if (left <= right && remain >= people[left]) {
                left++;
            }
        }

        return res;
    }
}
