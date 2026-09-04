class Solution {
    /**
     * @param {number} k
     * @param {number} w
     * @param {number[]} profits
     * @param {number[]} capital
     * @return {number}
     */
    findMaximizedCapital(k, w, profits, capital) {
        const minCapital = new PriorityQueue((a, b) => capital[a] - capital[b]);
        const maxProfit = new PriorityQueue((a, b) => profits[b] - profits[a]);

        for (let i = 0; i < capital.length; i++) {
            minCapital.enqueue(i);
        }

        for (let i = 0; i < k; i++) {
            while (!minCapital.isEmpty() && capital[minCapital.front()] <= w) {
                maxProfit.enqueue(minCapital.dequeue());
            }
            if (maxProfit.isEmpty()) {
                break;
            }
            w += profits[maxProfit.dequeue()];
        }

        return w;
    }
}