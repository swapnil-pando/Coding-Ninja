
class TwoStacks {
    constructor(n){
        this.size = n;
        this.firstTop = -1;
        this.secondTop = n;
        this.arr = new Array(n);
    }
    pushIntoFirst(element) {
        if(!this.isFull()){
        this.firstTop += 1;
        this.arr[this.firstTop] = element;
        }
    }
    pushIntoSecond(element){
        if(!this.isFull()){
        this.secondTop -= 1;
        this.arr[this.secondTop] = element;
        }
    }
    popFromFirst() {
        if(this.firstTop === -1) {
            console.log('Already the first stack is empty');
            return;
        }
        const element = this.arr[this.firstTop];
        this.firstTop -= 1;
        return element;
    }
    popFromSecond() {
        if(this.secondTop === this.size) {
            console.log('Already the Second stack is empty');
            return;
        }
        const element = this.arr[this.secondTop];
        this.secondTop += 1;
        return element;
    }
    isFull(){
        if(this.secondTop === this.firstTop + 1){
            console.log('Already the Stack is full');
            return true;
        }
        return false;
    }
    printFirstStack(){
        for(let i = this.firstTop; i >= 0 ;i--){
            console.log(this.arr[i]);
        }
    }
    printSecondStack(){
        for(let i = this.secondTop; i < this.size; i++){
            console.log(this.arr[i]);
        }
    }
}

const twoStacks = new TwoStacks(5);
twoStacks.pushIntoFirst(2);
twoStacks.pushIntoFirst(4);
twoStacks.popFromFirst();
twoStacks.pushIntoSecond(3);


twoStacks.pushIntoSecond(5);
twoStacks.pushIntoSecond(6);
twoStacks.popFromSecond();
twoStacks.printFirstStack();
console.log('*'.repeat(10));
twoStacks.printSecondStack();

module.exports = TwoStacks;