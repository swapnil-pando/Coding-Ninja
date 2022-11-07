const Queue = require('./queue');


function reverse(queue, k) {
    if(!queue.size() || k === 0){
        return queue;
    }
    const val = queue.dequeue();
    const reversedQueue = reverse(queue, k-1);
    queue.enqueue(val);
    return reversedQueue;
}

function modifyReversedQueue(queue, k) {
    const diffSize = queue.size() - k;
    for(let i = 0; i < diffSize; i++) {
        const val = queue.dequeue();
        queue.enqueue(val);
    }
    return queue;
}

const queue = new Queue();
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
const k = 2;
const reversedQueue = reverse(queue, k);
const modifiedQueue = modifyReversedQueue(reversedQueue, k);
modifiedQueue.print();
