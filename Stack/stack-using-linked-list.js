class Node {
    constructor(element) {
        this.val = element;
        this.next = null;
    }
};

class Stack_Using_Linked_List{
    constructor() {
        this.head = null;
    }
    push(element){
        const node = new Node(element);
        node.next = this.head;
        this.head = node;
    }
    pop(){
        if(!this.head){
            return -1;
        }
        const element = this.head.val;
        this.head = this.head.next;
        return element;
    }
    empty(){
        return this.head === null;
    }
    top(){
        return this.head.val;
    }
}

const stack = new Stack_Using_Linked_List();
stack.push(2);
stack.push(3);
stack.pop();