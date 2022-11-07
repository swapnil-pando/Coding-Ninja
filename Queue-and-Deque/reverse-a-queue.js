const Queue = require('./queue');


function reverse(queue) {
    if(!queue.size()){
        return;
    }
    const val = queue.dequeue();
    reverse(queue);
    queue.enqueue(val);
}

const queue = new Queue();
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
reverse(queue);
queue.print();
