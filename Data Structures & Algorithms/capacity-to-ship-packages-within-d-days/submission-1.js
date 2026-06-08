class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        let l = Math.max(...weights);
        let r = weights.reduce((a, b) => a + b, 0);
        let res = r;

        const canShip = capacity => {
            let ships = 1;
            let currCap = capacity;

            for (const w of weights) {
                if (currCap - w < 0) {
                    ships++;

                    if (ships > days) {
                        return false;
                    }

                    currCap = capacity;
                }

                currCap -= w;
            }

            return true;
        };

        while (l <= r) {
            const capacity = Math.floor((l + r) / 2);

            if (canShip(capacity)) {
                res = Math.min(res, capacity);
                r = capacity - 1;
            } else {
                l = capacity + 1;
            }
        }

        return res;
    }
}
