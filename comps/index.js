function formatString(number) {
    let word = "компьютер";
    if (number % 100 >= 11 && number % 100 <= 19) {
        return number + " " + word + "ов";
    } else if (number % 10 === 1) {
        return number + " " + word;
    } else if (number % 10 >= 2 && number % 10 <= 4) {
        return number + " " + word + "а";
    } else {
        return number + " " + word + "ов";
    }
}



/*
for (let i = 0; i< 1015; i++ ) {
    console.log(formatString(i));
}
*/