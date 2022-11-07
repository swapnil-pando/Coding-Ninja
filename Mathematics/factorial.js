function factorial(N) {
    // const factArr = new Array(N + 1, -1);
    // factArr[0] = 1;
    // factArr[1] = 1;
    // factArr[2] = 2;
    // for(let i = 3; i <= N; i+=1){
    //     factArr[i] = factArr[i-1] * i;
    //     }
    // return factArr[N];

    let a = 1;
    let b = 1;
    let c = 2;
    let i = 3;
    for(; i <= N; i += 1) {
        let temp = c;
        c = a * b;
        b = temp;
        a = 
    }
}


