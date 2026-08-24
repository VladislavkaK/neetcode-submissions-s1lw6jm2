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
    rob(root) {
        if (!this.memo) this.memo = new Map();

        if (root === null) return 0;

        if (this.memo.has(root)) {
            return this.memo.get(root);
        }

        let res = root.val;

        if (root.left) {
            res += this.rob(root.left.left) + this.rob(root.left.right);
        }

        if (root.right) {
            res += this.rob(root.right.left) + this.rob(root.right.right);
        }

        res = Math.max(
            res,
            this.rob(root.left) + this.rob(root.right)
        );

        this.memo.set(root, res);

        return res;
    }
}
