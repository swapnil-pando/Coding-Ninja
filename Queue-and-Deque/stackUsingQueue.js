const Queue = require('./queue');
class StackUsingQueue {
    constructor() {
        this.queue1 = new Queue();
        this.queue2 = new Queue();
    }

    push(val) {
        this.queue2.enqueue(val);
        while(this.queue1.size()) {
            const popped = this.queue1.dequeue();
            if(val || val === 0) {
                this.queue2.enqueue(popped);
            } 
        }
        const temp = this.queue1;
        this.queue1 = this.queue2;
        this.queue2 = temp; 
    }
    pop() {
        return this.queue1.dequeue();
    }
}


// By making the pop operation costly
/*
push(s,  x)
  1) Enqueue x to q1 (assuming size of q1 is unlimited).

pop(s)  
  1) One by one dequeue everything except the last element 
     from q1 and enqueue to q2.
  2) Dequeue the last item of q1, the dequeued item 
     is the result, store it.
  3) Swap the names of q1 and q2
  4) Return the item stored in step 2.
// Swapping of names is done to avoid one more
// movement of all elements from q2 to q1.
*/