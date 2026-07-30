class ListNode {
    /**
     * @param {number} key
     * @param {number} val
     */
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.freq = 1;
        this.prev = null;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.left = new ListNode(0, 0);
        this.right = new ListNode(0, 0);
        this.left.next = this.right;
        this.right.prev = this.left;
        this.size = 0;
    }

    /**
     * @return {number}
     */
    length() {
        return this.size;
    }

    /**
     * @param {ListNode} node
     */
    pushRight(node) {
        const prev = this.right.prev;
        prev.next = node;
        node.prev = prev;
        node.next = this.right;
        this.right.prev = node;
        this.size++;
    }

    /**
     * @param {ListNode} node
     */
    pop(node) {
        const prev = node.prev;
        const next = node.next;
        prev.next = next;
        next.prev = prev;
        node.prev = null;
        node.next = null;
        this.size--;
    }

    /**
     * @return {ListNode}
     */
    popLeft() {
        const node = this.left.next;
        this.pop(node);
        return node;
    }
}

class LFUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.lfuCount = 0;
        this.nodeMap = new Map();
        this.listMap = new Map();
    }

    /**
     * @param {ListNode} node
     */
    counter(node) {
        const count = node.freq;
        this.listMap.get(count).pop(node);

        if (count === this.lfuCount && this.listMap.get(count).length() === 0) {
            this.lfuCount++;
        }

        node.freq++;
        if (!this.listMap.has(node.freq)) {
            this.listMap.set(node.freq, new LinkedList());
        }
        this.listMap.get(node.freq).pushRight(node);
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (!this.nodeMap.has(key)) {
            return -1;
        }
        const node = this.nodeMap.get(key);
        this.counter(node);
        return node.val;
    }

    /**
     * @param {number} key
     * @param {number} value
     */
    put(key, value) {
        if (this.capacity === 0) return;

        if (this.nodeMap.has(key)) {
            const node = this.nodeMap.get(key);
            node.val = value;
            this.counter(node);
            return;
        }

        if (this.nodeMap.size === this.capacity) {
            const toRemove = this.listMap.get(this.lfuCount).popLeft();
            this.nodeMap.delete(toRemove.key);
        }

        const node = new ListNode(key, value);
        this.nodeMap.set(key, node);
        if (!this.listMap.has(1)) {
            this.listMap.set(1, new LinkedList());
        }
        this.listMap.get(1).pushRight(node);
        this.lfuCount = 1;
    }
}