function sameFrequency(num1: Number, num2: Number): Boolean {
  let [firstNumber, secondNumber] = [num1.toString(), num2.toString()]

  let val1: Number = firstNumber.split('').reduce((prev, curr) => (prev + curr.charCodeAt(0)), 0)
  let val2: Number = secondNumber.split('').reduce((prev, curr) => (prev + curr.charCodeAt(0)), 0)
  
  return val1 === val2
}

console.log(sameFrequency(199, 991));
