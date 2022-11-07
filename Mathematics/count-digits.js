function countDigits(number) {
    number = number < 0 ? number * -1 : number;
    let count = 0;
    while(number) {
        count += 1;
        number = Math.floor(number / 10);
    }
    return count;
}

console.log(countDigits(23));
console.log(countDigits(1345678905423));
console.log(countDigits(-2345676));
console.log(countDigits(100));
console.log(countDigits(0));
console.log(countDigits(876442));
console.log(countDigits(-1));
console.log(countDigits(0));
