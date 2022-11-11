var MyQueue = function() {
    this.in = [];
    this.out = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.in.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if (this.out.length === 0) {
        while(this.in.length > 0) {
            this.out.push(this.in.pop());
        }
    }
    return this.out.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (this.out.length === 0) {
        while(this.in.length > 0) {
            this.out.push(this.in.pop());
        }
    }
    return this.out[this.out.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.in.length === 0 && this.out.length === 0;
};