function findCommonDivisors(array) {
    const minNum = Math.min(...array);
    const commonDivisors = [];
    
    for (let i = 1; i <= minNum; i++) {
        if (array.every(num => num % i === 0)) {
            commonDivisors.push(i);
        }
    }
    
    return commonDivisors;
}

/*
const inputArrays = [ 
[42, 12, 18],[15, 30, 45, 60],[7, 14, 21, 28, 35],[10, 20, 30, 40, 50, 60],
[3, 6, 9, 12, 15, 18, 21],[25, 50, 75, 100],[8, 16, 24, 32],[6, 12, 18, 24, 30],
[4, 8, 12, 16, 20, 24],[9, 18, 27, 36],[2, 4, 6],]
for (let i = 0; i<inputArrays.length;i++) {
    const commonDivisors = findCommonDivisors(inputArrays[i]);
    console.log(commonDivisors); 
}
*/