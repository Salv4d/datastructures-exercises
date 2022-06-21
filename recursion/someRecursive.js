// return true if the callback return true to any value of the array

const isOdd = (val) => val % 2 !== 0;

function someRecursive(arr, callback) {
  if (callback(arr[0])) return true;

  return arr[1] ? someRecursive(arr.slice(1), callback) : false;
}

someRecursive([1, 2, 3, 4], isOdd); // true
someRecursive([4, 6, 8, 9], isOdd); // true
someRecursive([4, 6, 8], isOdd); // false
someRecursive([4, 6, 8], (val) => val > 10); // false
