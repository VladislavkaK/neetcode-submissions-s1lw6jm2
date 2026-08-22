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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        let head = new TreeNode(null);
        let curr = head;
        let i = 0,
            j = 0,
            n = preorder.length;

        while (i < n && j < n) {
            curr.right = new TreeNode(preorder[i], null, curr.right);
            curr = curr.right;
            i++;

            while (i < n && curr.val !== inorder[j]) {
                curr.left = new TreeNode(preorder[i], null, curr);
                curr = curr.left;
                i++;
            }

            j++;

            while (curr.right && j < n && curr.right.val === inorder[j]) {
                let prev = curr.right;
                curr.right = null;
                curr = prev;
                j++
            }
        }

        return head.right;
    }
}
