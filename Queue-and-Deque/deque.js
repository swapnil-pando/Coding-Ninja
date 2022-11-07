
class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}
class Deque {
    constructor() {
        this.front = null;
        this.rear = null;
    }

    pushBack(val) {
        const newNode = new Node(val);
        if (this.front === null) {
            this.front = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = this.tail.next;
        }
    }

    pushFront(val) {
        const newNode = new Node(val);
        if (this.front === null) {
            this.front = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.front;
            this.front.prev = newNode;
            this.front = newNode;
        }
    }
    popBack() {
        if(!this.front){
            return -1;
        }
        this.rear = this.rear.prev;
        if(!this.rear) {
            this.front = null;
        } else {
            this.rear.next = null;
        }

    }
    popFront() {
        if(!this.front){
            return -1;
        }
        this.front = this.front.next;
        if(this.front === null){       
             this.rear = null;
        } else {
            this.front.prev = null;
        }
    }
    isEmpty() {
        return !this.front;
    }

    peekFront() {
        if(this.front) {
        return this.front.val;
        } else {
            return -1;
        }
    }

    peekBack() {
        if(this.rear) {
        return this.rear.val;
        } else {
            return -1;
        }
    }
    print() {
        let temp = this.front;
        while(temp) {
            console.log(temp.val);
            temp = temp.next;
        }
    }
}

module.exports = Deque;