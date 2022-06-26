const numbers = [25, 3, 4, 98, -5, 11, 0];

function insertionSort(arr) {
  const sortedArr = [...arr];

  for (let i = 1; i < sortedArr.length; i++) {
    console.table([sortedArr]);

    if (sortedArr[i] < sortedArr[i - 1]) {
      for (let j = 0; j < i; j++) {
        if (
          sortedArr[i] <= sortedArr[j] &&
          (sortedArr[i] >= sortedArr[j - 1] || !sortedArr[j - 1])
        ) {
          sortedArr.splice(j, 0, ...sortedArr.splice(i, 1));
          break;
        }
      }
    }
  }

  return sortedArr;
}

insertionSort(numbers);
