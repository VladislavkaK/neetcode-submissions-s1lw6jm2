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
    maxDepth(root) {
        if (root === null) return 0;

        const queue = [root];
        let level = 0;

        while (queue.length > 0) {
            let size = queue.length;
            
            for (let i = 0; i < size; i++) {
                let node = queue.shift();
                if (node.left !== null) queue.push(node.left);
                if (node.right !== null) queue.push(node.right);
            }

            level++;
        }

        return level;
    }
}
