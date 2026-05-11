class FreqStack {
    constructor() {
        this.cnt = new Map();
        this.stacks = [[]];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        const valCnt = (this.cnt.get(val) || 0) + 1;
        this.cnt.set(val, valCnt);

        if (valCnt === this.stacks.length) {
            this.stacks.push([]);
        }

        this.stacks[valCnt].push(val);
    }

    /**
     * @return {number}
     */
    pop() {
        const topStack = this.stacks[this.stacks.length - 1];
        const res = topStack.pop();

        this.cnt.set(res, this.cnt.get(res) - 1);

        if (topStack.length === 0) {
            this.stacks.pop();
        }

        return res;
    }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
