const numbers = [25, 3, 4, 98, -5, 11, 0];

function bubbleSort(arr) {
  let sortedArr = [...arr];
  let arrChanges;
  let n = 1;

  while (arrChanges !== 0) {
    arrChanges = 0;

    for (let i = 0; i < sortedArr.length - n; i++) {
      if (sortedArr[i] > sortedArr[i + 1]) {
        [sortedArr[i + 1], sortedArr[i]] = [sortedArr[i], sortedArr[i + 1]];

        arrChanges++;
      }
    }

    n++;
  }

  return sortedArr;
}

bubbleSort(numbers);
