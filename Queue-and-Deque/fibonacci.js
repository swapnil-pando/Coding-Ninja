const Queue = require('./queue');

function Fibonacci(n) {
    const queue = new Queue();
    queue.enqueue(0);
    queue.enqueue(1);
    for(let i = 0; i < n; i += 1) {
        const val1 = queue.dequeue();
        const val2 = queue.dequeue();
        queue.enqueue(val2);
        queue.enqueue(val1 + val2);
        console.log(val1);
    }
}

Fibonacci(6);