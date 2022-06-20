function sameFrequency(num1, num2) {
    var _a = [num1.toString(), num2.toString()], firstNumber = _a[0], secondNumber = _a[1];
    var val1 = firstNumber.split('').reduce(function (prev, curr) { return (prev + curr.charCodeAt(0)); }, 0);
    var val2 = secondNumber.split('').reduce(function (prev, curr) { return (prev + curr.charCodeAt(0)); }, 0);
    return val1 === val2;
}
console.log(sameFrequency(1145242, 991));
19;
