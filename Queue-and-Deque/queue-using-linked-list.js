class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


class QueueUsingLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    enqueue(val) {
        const newNode = new Node(val);
        this.size += 1;
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = this.tail.next;
        }
    }

    dequeue() {
        if(!this.head) {
            console.log('The queue is empty Boss !!!');
            return;
        }
        this.size -= 1;
        const val = this.head.val;
        this.head = this.head.next;
        return val;
    }

    print() {
        let currNode = this.head;
        while(currNode) {
            console.log(currNode.val);
            currNode = currNode.next;
        }
    }
}

// const queue = new QueueUsingLinkedList();
// queue.enqueue(2);
// queue.enqueue(3);
// queue.enqueue(4);
// queue.dequeue();
// queue.dequeue();
// queue.dequeue();
// queue.dequeue();
// queue.print();