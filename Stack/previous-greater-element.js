/*
Problem Statement
-----------------------------
 Given an array of integers, find the closest greater on left of every element.
 If there is no element greater to it on left, then print -1

 Ex:
 [15,10,18,12,4,6,2,8]

 Result
 [-1,15,-1,18,12,12,6,12]

 */

const Stack = require('./stack');

function previousGreater(array){
    const stack = new Stack(array.length);
    const result = [-1];
    stack.push(0);
    for(let i = 1; i < array.length; i+= 1){
        while(stack.empty() === false && array[i] >= array[stack.getTop()]) {
            stack.pop();
        }
        let res;
        res = stack.empty() ? -1 : array[stack.getTop()];
        result.push(res);
        stack.push(i);
    }
    console.log(result);
}

const array = [15,10,18,12,4,6,2,8];
previousGreater(array);

