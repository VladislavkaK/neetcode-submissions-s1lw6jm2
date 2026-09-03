class MedianFinder {
    constructor() {
        this.data = [];
    }

    /**
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        let left = 0;
        let right = this.data.length;

        while (left < right) {
            const mid = Math.floor((left + right) / 2);

            if (this.data[mid] < num) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        this.data.splice(left, 0, num);
    }

    /**
     * @return {number}
     */
    findMedian() {
        let n = this.data.length;

        if (n & 1) {
            return this.data[Math.floor(n / 2)];
        } else {
            return (this.data[n / 2] + this.data[n / 2 - 1]) / 2;
        }
    }
}