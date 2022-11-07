const Deque = require('./deque');

function printKMaxSliding(k) {
    const deque = new Deque();
    const arr = [20,40,30,10,60];
    for(let i = 0; i < k; i+=1) {
        while(!deque.isEmpty() && arr[i] >= arr[deque.peekBack()]){
            deque.popBack();
        }
        console.log(deque.print());
        console.log('***********');
        deque.pushBack(i);
    }
    console.log(deque.print());
    for(let i = k; i < arr.length; i+=1) {
        console.log(arr[deque.peekFront()]);
        while(!deque.isEmpty() && deque.peekFront() <= i-k){
            deque.popFront();
        }
        while(!deque.isEmpty() && arr[i] >= arr[deque.peekBack()]){
            deque.popBack();
        }
        deque.pushBack(i);
    }
    console.log(arr[deque.peekFront()]);
}

printKMaxSliding(3);