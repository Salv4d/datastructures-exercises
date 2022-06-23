const names = [
  'Gwen',
  'Ichabod',
  'Christian',
  'Oihana',
  'Titus',
  'Veronica',
  'Dok',
];

function linearSearch(val, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }

  return -1;
}

console.log(linearSearch('Oihana', names));
console.log(linearSearch('Eukithor', names));
