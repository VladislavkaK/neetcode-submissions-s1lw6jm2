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
     * @return {number[]}
     */
    preorderTraversal(root) {
        const res = [];
        const stack = [];
        let cur = root;

        while (cur !== null || stack.length > 0) {
            if (cur) {
                res.push(cur.val);
                stack.push(cur.right);
                cur = cur.left;
            } else {
                cur = stack.pop();
            }
        }

        return res;
    }
}
