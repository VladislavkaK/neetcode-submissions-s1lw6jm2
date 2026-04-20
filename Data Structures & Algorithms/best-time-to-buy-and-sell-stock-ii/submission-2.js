class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let nextBuy = 0, nextSell = 0;
        let curBuy = 0, curSell = 0;

        for (let i = prices.length - 1; i >= 0; i--) {
            curBuy = Math.max(nextBuy, -prices[i] + nextSell);
            curSell = Math.max(nextSell, prices[i] + nextBuy);
            nextBuy = curBuy;
            nextSell = curSell;
        }

        return curBuy;
    }
}
