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
     * @return {number}
     */
    goodNodes(root) {
        const dfs = (node, maxSoFar) => {
            if (node === null) return 0;

            let res = node.val >= maxSoFar ? 1 : 0;

            maxSoFar = Math.max(maxSoFar, node.val);
            res += dfs(node.left, maxSoFar);
            res += dfs(node.right, maxSoFar);

            return res;
        };

        return dfs(root, root.val);
    }
}
