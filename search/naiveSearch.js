const phrase =
  'fyi a quick and really fast brown fox jumps over the lazy dog, another fox, not that quick, got cought';

function naiveSearch(word, phrase) {
  let matchCount = 0;

  for (let i = 0; i < phrase.length; i++) {
    let matchSize = 0;

    for (let j = 0; j < word.length; j++) {
      if (phrase[i + j] !== word[j]) break;
      matchSize++;
    }
    if (matchSize === word.length) matchCount++;
  }

  return matchCount;
}

console.log(naiveSearch('fox', phrase));
