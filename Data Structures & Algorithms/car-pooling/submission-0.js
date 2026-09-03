class Solution {
    /**
     * @param {number[][]} trips
     * @param {number} capacity
     * @return {boolean}
     */
    carPooling(trips, capacity) {
        const points = [];

        for (const [passengers, start, end] of trips) {
            points.push([start, passengers]);
            points.push([end, -passengers]);
        }

        points.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));

        let curPass = 0;

        for (const [point, passengers] of points) {
            curPass += passengers;

            if (curPass > capacity) {
                return false;
            }
        }

        return true;
    }
}
