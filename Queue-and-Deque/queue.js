// We can use circular arrays as well


class Queue {
    constructor() {
        this.queue = {};
        this.tail = 0;
        this.head = 0;
    }

    enqueue(val) {
        this.queue[this.tail] = val;
        this.tail += 1;
    }

    dequeue() {
        const size = this.tail - this.head;
        if(size <= 0) {
            console.log('Queue is Empty Boss !!!')
            return -1;
        }
        const val = this.queue[this.head];
        delete this.queue[this.head];
        this.head += 1;
        if(this.head === this.tail){
            this.head = 0;
            this.tail = 0;
        }
        return val;
    }

    size() {
        return this.tail - this.head;
    }

    peek() {
        return this.queue[this.head];
    }

    print() {
       for(let key in this.queue) {
        console.log(this.queue[key]);
       } 
    }

}

module.exports = Queue;