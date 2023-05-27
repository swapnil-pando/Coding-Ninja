class Node {
	constructor(val) {
		this.data = val;
		this.next = null;
	}
}

/*
 ---------- Applications of Linked List -----------------

 1. Worst case insertion and deletion at end and beginning at 0(n).
 2. Round Robin Implementation ( Cicular Linked List)
 3. Merging two sorted linked lists is faster
 4. Easier implementation of queue and deque
 5. Implementation of simple memory manager where we need to link free blocks.

*/


class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}
	insertNodeAtFront(val) {
		const newNode = new Node(val);
		if (this.head) {
			newNode.next = this.head;
			this.head = newNode;
		} else {
			this.head = newNode;
			this.tail = this.head;
		}
	}

	insertNodeAtEnd(val) {
		const newNode = new Node(val);
		if (this.head) {
			this.tail.next = newNode;
			this.tail = newNode;
		} else {
			this.head = newNode;
			this.tail = this.head;
		}
	}

	printLinkedList() {
		let curr = this.head;
		while(curr) {
			console.log(curr.data);
			curr = curr.next;
		}
	}

	addLinkedListValuesToArray() {
		const arr = [];
		let curr = this.head;
		while(curr) {
			arr.push(curr.data);
			curr = curr.next;
		}
		return arr;
	}

	recursiveTraverseLinkedList(head, arr) {
		if (!head) {
			return arr;
		} 
		arr.push(head.data);
		return this.recursiveTraverseLinkedList(head.next, arr);
	}

	recursiveTraverseLinkedListInReverse(head, arr) {
		if (!head) {
			return arr;
		} 
		return this.recursiveTraverseLinkedListInReverse(head.next, arr);
		arr.push(head.data);
	}

	deleteFirstNode() {
		if (!this.head || !this.head.next) {
			this.head = null;
			this.tail = null;
			return;
		}

		this.head = this.head.next;
	}

	deleteLastNode() {
		if (!this.head || !this.head.next) {
			this.head = null;
			this.tail = null;
			return;
		}
		// Why this.tail = null doesnot work
		let curr = this.head;
		while(curr.next.next) {
			curr = curr.next;
		}
		this.tail = curr.next;
		curr.next = null;
	}

	// k = 2 
	// val = 6
	// i = 0
	// 1 -> 2 -> 3 -> 4 -> 5
	insertAtGivenPosition(val, k) {
		let curr = this.head;
		const newNode = new Node(val);
		let i = 0;
		if (k < 1) {
			return;
		}
		if (k === 1) {
			newNode.next = this.head;
			this.head = newNode;
		}
		while (curr.next && i < k - 2) {
			curr = curr.next;
			i += 1;
		}
		if (!curr.next) {
			this.tail = newNode;
		}
		curr.next = newNode;
	}

	sortedInsert(val) {
		let curr = this.head;
		const newNode = new Node(val);
		if (!curr || val < this.head.val) {
			newNode.next = this.head;
			this.head = newNode;
		}
		while (curr.next && this.head.next.data < val) {
			curr = curr.next;
		}
		if (!curr.next) {
			this.tail = newNode;
		}
		curr.next = newNode;
	}

	// Two Pointers Technique -> Slow and Fast Pointer

	// 1 -> 2 -> 3 -> 4
	// 1 -> 2 -> 3 -> 4 -> 5

	middleOfLinkedList() {
		let slow = this.head;
		let fast = this.head;
		while (fast && fast.next) {
			fast = fast.next.next;
			slow = slow.next;
		}
		return slow.data;
	}

	// 1  -> 2 -> 3 -> 4
	// 1 -> 2 -> 3 -> 4 -> 5

	nthNodeFromEndOfLinkedList(n) {
		if (!this.head) {
			return -1;
		}
		let aheadNode = this.head;
		let behindNode = this.head;
		let i = 0;
		while ( i < n && aheadNode) {
			i += 1;
			aheadNode = aheadNode.next;
		}

		if (!aheadNode) {
			return behindNode.data;
		}

		while(aheadNode) {
			aheadNode = aheadNode.next;
			behindNode = behindNode.next;
		}

		return behindNode.data;
	}

}


module.exports = LinkedList;