const Queue = require('./queue');

function printFirstNDigits(n) {
    const queue = new Queue();
    queue.enqueue("5");
    queue.enqueue("6");
    for(let count = 0; count < n; count++) {
        const val = queue.dequeue();
        console.log(val);
        queue.enqueue(val + '5');
        queue.enqueue(val + '6');
    }
}

printFirstNDigits(10);