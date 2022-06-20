function averagePair(arr, num) {
  return !arr.every((val, idx, arr) => (
    (val + (arr[idx - 1])) / 2 !== num
  ));
}

console.log(averagePair([1, 3, 3, 5, 6, 6, 10, 12, 19], 8))
