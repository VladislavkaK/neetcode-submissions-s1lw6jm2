/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        const res = [];

        const dfs = (node, arr) => {
            if (!node) return;

            dfs(node.left, arr);
            arr.push(node.val);
            dfs(node.right, arr);
        };

        dfs(root, res);

        return res[k - 1];
    }
}
