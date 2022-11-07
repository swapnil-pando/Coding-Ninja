/**
 * Problem Statement
 * ------------------------------------------->
 *
 * We have been given an array of integers. This array represents prices of stocks on N consecutive days.
 * The task is to find out span of stock on every day.
 * Span of a stock is the number of consecutive elements which are to the left of it including current element,
 * whose values are less than or equal to the current element/stock.
 *
 * Ex: arr[] = [13,15,12,14,16,8,6,4,10,30]
 * Solution =  [1, 2, 1,  2, 5,1,1,1,4,10]
 *
 * Simple Solution is to use two loops which in worst case will go to O(n2).
 *
 * One thing to notice
 * Span of current element = Index of current Element - Index of the closest Greater Element to left side
 * If there is no greater element to the left size, then span = index of current element + 1
 *
 * One more thing to notice
 * Span is calculated from left to right -> If we are calculating span for i, then we would have already known the
 * span for (i-1) elements.
 *
 * Suppose there is an array i.e [60,10,20,40,35, ...]
 * Suppose we are calculating the span for the element that is next to 35. There are three possibilities for this element.
 * Either, it can be smaller than 35, then the closest greater element is 35.
 * Or, it can be between 35 and 40, then the closest greater element is 40.
 * Or, it can be between 40 and 60, then the closest greater element is 60.
 * Or, it can be more than 60, then the closest greater element is none.
 *
 * So the information, we will have to store here is the previous element, previous closest greater element and
 * previous closest greater element.
 *
 * We need to process these elements in LIFO order.
 * We will be pushing indexes
 */


const Stack = require('./stack');

function findSpan(array){
    const stack = new Stack(array.length);
    const result = [1];
    stack.push(0);
    for(let i = 1; i < array.length; i+= 1){
        while(stack.empty() === false && array[i] >= array[stack.getTop()]) {
            stack.pop();
        }
        let span;
        span = stack.empty() ? i + 1 : i - stack.getTop();
        result.push(span);
        stack.push(i);
    }
    console.log(result);
}

const array = [13,15,12,14,16,8,6,4,10,30];
findSpan(array);

/*
This is a 0(n) solution, since you are popping only the items which are already pushed to the stack
and each item is pushed and popped from the stack at most once.
 */
