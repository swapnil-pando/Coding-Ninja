// Input will be string of parenthesis like {()}
const input = process.argv[2];

const Stack = require('./stack');
const stack = new Stack();

const mapping = {
    '{' : '}',
    '[' : ']',
    '(' : ')',
}

console.log(isBalancedParenthesis(input));

function isBalancedParenthesis(input){
    for(let i of input) {
        switch(i) {
            case '{':
            case '[':
            case '(':
                stack.push(i);
                break;
            case '}':
            case ']':
            case '}':
                if(mapping[stack.getTop()] === i) {
                    stack.pop();
                } else {
                    return false;
                }
                break;
            default:
                break;
        }
    }
    if(stack.getCurrentSize() === 0)
        return true;
    else
        return false;
}