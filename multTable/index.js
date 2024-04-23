function multTable(number) {
    let answer = '';
    for (let i = 1; i <= number; i++) {
        let row = '';
        for (let j = 1; j <= number; j++) {
            row += `${i * j}`;
            if ((i*j)/10 >= 1) {
                row += "  ";
            } else {
                row += "   ";
            }
        }
        answer += row+"\n";
    }
    console.log(answer);
}

//const number = 10;
//multTable(number);