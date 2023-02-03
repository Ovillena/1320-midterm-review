function multiplier(num1, num2, callback) {
    let number1 = parseInt(num1);
    let number2 = parseInt(num2);

    if (typeof (num1) !== 'number' || typeof (num2) !== "number") {
        callback(new Error('must input numbers'));
    } else {
        let result = num1 * num2;
        callback(null, result);
    };
}

multiplier(2, "yu", (err, result) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log(result);
    }
});

//----------------------------------------------------

console.log(typeof 4)

