function isPrimal(number) {
    if (number < 2) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
}

function getPrimalFromArray(minNumber, maxNumber) {
    const primals = [];
    for (let i = minNumber; i <= maxNumber; i++) {
        if (isPrimal(i)) {
            primals.push(i);
        }
    }
    return primals;
}

//console.log(getPrimalFromArray(11,20));