function isPalindrome(str) {
  if (str.length === 0) return '';

  function reverse(str) {
    if (str.length === 0) return '';
    return str.slice(-1) + reverse(str.slice(0, str.length - 1));
  }

  return str === reverse(str);
}

isPalindrome('awesome'); // false
isPalindrome('racecar'); // true
