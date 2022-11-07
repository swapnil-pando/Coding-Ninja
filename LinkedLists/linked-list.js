class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    insertInBeginning(val) {
        const newNode = new Node(val);
        if (!this.head){
        this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    // This can be done in 0(1) if we use a tail pointer
    insertInEnd(val) {
        const newNode = new Node(val);
        if (!this.head){
        this.head = newNode;
        } else {
            let currNode = this.head;
            while(currNode.next){
                currNode = currNode.next;
            }
            currNode.next = newNode;
        }
    }

    printLinkedList(){
        let currNode = this.head;
        while(currNode) {
            console.log(currNode.val);
            currNode = currNode.next;
        }
    }

    printLinkedListRecursive(currNode) {
        if(currNode){
            console.log(currNode.val);
            this.printLinkedListRecursive(currNode.next);
        }
    }
    deleteFirstNode(){
        if(!currNode){
            console.log('The linked list is empty boss');
            return;
        } 
        const deletedNode = this.head;
        this.head = this.head.next;
        return deletedNode.val;
    }
    deleteLastNode(){
        if(!currNode){
            console.log('The linked list is empty boss');
            return;
        } 
        let currNode = this.head;
        if(!currNode.next){
            this.head = null;
            return;
        }
        while(currNode.next && currNode.next.next) {
            currNode = currNode.next;
        }
        currNode.next = null;
    }
    searchInLinkedListIterative(element) {
        let currNode = this.head;
        let position = 0;
        while(currNode) {
            if(currNode.val === element){
                return position;
            }
            currNode = currNode.next;
            position += 1;
        }
        return -1;
    }
    // Send the initial position as 0. If element not found will get -1
    searchInLinkedListRecursive(currNode, position, element) {
        if(!currNode || position === -1) {
            return -1;
        } else if(currNode.val !== element) {
            return searchInLinkedListRecursive(currNode.next, position + 1, element);
        } else {
            return position;
        }
    }

    countNodesInLinkedList(){
        let currNode = this.head;
        let no = 0;
        while(currNode){
            no += 1;
            currNode = currNode.next;
        }
        return no;
    }

    /*
    let the length travelled by fast pointer is  x - 1;
    speed of fast = 2y;
    time = (x-1)/2y
    distance travelled by slow = y * (x-1)/2y = (x-1)/2
    */

    middleOfLinkedList() {
        if(!this.head){
            return null;
        }
        if(!this.head.next){
            return this.head;
        }
        let slow = this.head;
        let fast = this.head.next;
        while(!fast && !fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }

    /*
    Total distance = x ;
    distance travelled by fast = x - n 
    Speed = y 
    time = (x - n)/y 
    distance travelled by slow = (x - n)
    */
    nthNodeFromEndOfLinkedList(n) {
        let aheadNode = this.head;
        let currNode = this.head;
        let count = 0;
        while(aheadNode && count !== n) {
            aheadNode = aheadNode.next;
            count += 1;
        }
        if(count !== n){
            return null;
        }
        while(aheadNode) {
            currNode = currNode.next;
            aheadNode = aheadNode.next;
        }
        return currNode;
    }

    insertElementInMiddleOfLinkedList(x) {
        if(!this.head){
            this.head = new Node(x);
        }
        if(!this.head.next){
            const newNode = new Node(x);
            this.head.next = newNode;
        }
        let slow = this.head;
        let fast = this.head.next;
        while(fast.next && fast.next.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        if(fast.next) {
            slow = slow.next;
        }
        const newNode = new Node(x);
        newNode.next = slow.next;
        slow.next = newNode;
    }

    reverseALinkedList() {
        let prevNode = null;
        let currNode = this.head;
        while(currNode) {
            const nextNode = currNode.next;
            currNode.next = prevNode;
            prevNode = currNode;
            currNode = nextNode;
        }
        this.head = prevNode;
    }
    reverseALinkedListRecursive(currNode, prevNode) {
        if(!currNode){
            return prevNode;
        }
        const nextNode = currNode.next;
        currNode.next = prevNode;
        return this.reverseALinkedListRecursive(nextNode, currNode);
    }
    removeDuplicatesFromSorted() {
        let currNode = this.head;
        let nextNode = this.head && this.head.next || null;
        if(!currNode || !nextNode){
            return this.head;
        }
        while(this.head.val === this.head.next.val){
            this.head = this.head.next;
        }
        while(nextNode) {
            if(currNode.val === nextNode.val){
                nextNode = nextNode.next;
                currNode.next = nextNode;
            } else {
                currNode = currNode.next;
                nextNode = nextNode.next;
            }
        }
    }
    removeDuplicatesFromUnSorted() {}
    
    //Function to check whether two linked lists are identical or not.
    areIdentical(head1, head2)
    {
        while(head1 && head2) {
            if(head1.data !== head2.data){
                return false;
            }
            head1 = head1.next;
            head2 = head2.next;
        }
        return !(head1 || head2);
    }
}