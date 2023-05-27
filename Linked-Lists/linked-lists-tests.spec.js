const assert = require('assert');
const LinkedList = require('./linked-list');

describe("Check for correct working of  Linked List Code", () => {
  let linkedList;
  before(() => {
    linkedList = new LinkedList();
  });
  
  // after(() => {
  // });
  it("Should insert 5 to the head of the linked-list", () => {
    linkedList.insertNodeAtFront(5);
    const arr = linkedList.addLinkedListValuesToArray();
    assert.deepEqual(arr, [5])
  });

  it("Should insert 2 to the head of the linked-list", () => {
    linkedList.insertNodeAtFront(2);
    const arr = linkedList.addLinkedListValuesToArray();
    assert.deepEqual(arr, [2, 5])
  });
  it("Should insert 15 to the end of the linked-list", () => {
    linkedList.insertNodeAtEnd(15);
    const arr = linkedList.addLinkedListValuesToArray();
    assert.deepEqual(arr, [2, 5, 15])
  });

  it("Should print the linked-list recursively", () => {
     const arr = linkedList.recursiveTraverseLinkedList(linkedList.head, []);
     assert.deepEqual(arr, [2, 5, 15])
  });

  it("Should print the linked-list recursively in reverse order", () => {
    const arr = linkedList.recursiveTraverseLinkedListInReverse(linkedList.head, []);
    console.log('arr ----->', arr);
    assert.deepEqual(arr, [15, 5, 2])
  });

  it("Should find the middle of the linked-list of with values 2, 5, 15", () => {
    const middle = linkedList.middleOfLinkedList();
    assert.equal(middle, 5);
  });

  it("Should find the nth node of the linked-list when n is 2", () => {
    const nthnode = linkedList.nthNodeFromEndOfLinkedList(2);
    assert.equal(nthnode, 5);
  });

  it("Should find the nth node of the linked-list when n is 1", () => {
    const nthnode = linkedList.nthNodeFromEndOfLinkedList(1);
    assert.equal(nthnode, 15);
  });

  it("Should find the nth node of the linked-list when n is 3", () => {
    const nthnode = linkedList.nthNodeFromEndOfLinkedList(3);
    assert.equal(nthnode, 2);
  });

  it("Should delete first node of the linked-list", () => {
    linkedList.deleteFirstNode();
    const arr = linkedList.addLinkedListValuesToArray();
    assert.deepEqual(arr, [5, 15])
  });

  it("Should find the middle of the linked-list of with values 5, 15", () => {
    const middle = linkedList.middleOfLinkedList();
    assert.equal(middle, 15);
  });

  it("Should delete last node of the linked-list", () => {
    linkedList.deleteLastNode();
    const arr = linkedList.addLinkedListValuesToArray();
    assert.deepEqual(arr, [5])
  });

  it("Should find the middle of the linked-list of with value 5", () => {
    const middle = linkedList.middleOfLinkedList();
    assert.equal(middle, 5);
  });

  it("Should find the nth node of the linked-list when n is 1", () => {
    const nthnode = linkedList.nthNodeFromEndOfLinkedList(1);
    assert.equal(nthnode, 5);
  });

  it("Should find the nth node of the linked-list when n is 2", () => {
    const nthnode = linkedList.nthNodeFromEndOfLinkedList(2);
    assert.equal(nthnode, 5);
  });

  it("Should delete last node of the linked-list", () => {
    linkedList.deleteLastNode();
    const arr = linkedList.addLinkedListValuesToArray();
    assert.deepEqual(arr, [])
  });

  it("Should find the nth node of the linked-list when n is 1 and linked list is empty", () => {
    const nthnode = linkedList.nthNodeFromEndOfLinkedList(1);
    assert.equal(nthnode, -1);
  });

  it("Should delete first node of the linked-list", () => {
    linkedList.deleteFirstNode();
    const arr = linkedList.addLinkedListValuesToArray();
    assert.deepEqual(arr, [])
  });

});