function sumFibs(num) {
    let prev = 1;
    let cur = 1;
    let sum = 0;
    while (num > prev) {
        let temp = prev;
        prev += cur;
        cur = temp;
        if (temp % 2 === 0) {
            sum += temp;
        }
    }

    return sum;
}

console.log(sumFibs(4000000));
//4613732
