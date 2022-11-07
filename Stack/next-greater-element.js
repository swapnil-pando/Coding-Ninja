const Stack = require('./stack');
function reverse(array){
    let i = 0;
    let j = array.length-1;
    while(i<j){
        let swap = array[j];
        array[j] = array[i];
        array[i] = swap;
        i++;
        j--;
    }
    return array;
}
function nextGreater(array){
    const stack = new Stack(array.length);
    const result = [-1];
    stack.push(array.length - 1);
    for(let i = array.length-2; i > -1; i-= 1){
        while(stack.empty() === false && array[i] >= array[stack.getTop()]) {
            stack.pop();
        }
        let res;
        res = stack.empty() ? -1 : array[stack.getTop()];
        result.push(res);
        stack.push(i);
    }
    console.log(reverse(result));
}

const array = [5,15,10,8,6,12,9,18];
nextGreater(array);