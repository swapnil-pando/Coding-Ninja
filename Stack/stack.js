
class Stack {
    constructor(n = Number.MAX_SAFE_INTEGER) {
        this.size = n;
        this.top = -1;
        this.arr = [];
    }

    push(element) {
        if(this.getCurrentSize() === this.size) {
            console.log(`Stack is Already full, so cannot add element ${element}`);
        }
        else {
            try {
                this.top += 1;
                this.arr.push(element);
            } catch(e) {
                throw new Error(e);
            }
        }
    }
    pop() {
        if(this.getCurrentSize() === 0){
            console.log("Stack is Already Empty");
            return -1;
        } else {
            try {
                this.top -= 1;
                return this.arr.pop();
            } catch(e){
                throw new Error(e);
            }
        }

    }
    getCurrentSize(){
        return this.top + 1;
    }
    printStack() {
        for(let i = this.getCurrentSize()-1; i >= 0; i--) {
            console.log(this.arr[i]);
        }
    }
    getTop() {
        return this.arr[this.top];
    }
}

const stack = new Stack(5);
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.printStack();

module.exports = Stack;